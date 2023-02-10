import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "formik";
import classNames from "classnames";
import { GridColDef } from "@mui/x-data-grid";
import useStyles from "./topAvailableCraftsman.style";

import CustomDataGrid from "../../CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../CoreComponents/CustomLink/customLink.index";

import {
  ITopAvailableCraftsman,
  ITopAvailableCraftsmanProps,
} from "./topAvailableCraftsman.type";
import { GetFromDateValue } from "./topAvailableCraftsman.utils";
import { format } from "date-fns";
import { addNumberOfDays } from "../../../utils/DateUtils";
import CustomRating from "../../CoreComponents/CustomRating/customRating.index";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import CustomButton from "../../CoreComponents/CustomButton/customButton.index";
import { showSuccessPopup } from "../../../utils/projectUtils";
import Loading from "../../CoreComponents/Loading/loading.index";
import { getProjectStatusDescription } from "../../../utils/enumDescriptions";

const TopAvailableCraftsman: React.FC<ITopAvailableCraftsmanProps> = ({
  values,
  sector,

  editable,
  selectedUser,
  projectStatus,

}) => {
  console.log(values, "values");

  const classes = useStyles();
  const [rowsData, setRows] = useState<ITopAvailableCraftsman[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [value, setValue] = React.useState('');


  const handleRadioChange = (event) => {
    setValue(event.target.value);
    console.log(event, "handleOnCahnage");
  };
  const columns: GridColDef[] = [
    {
      field: "",
      renderCell: (params) => (
        <FormControlLabel disabled={!editable}
          value={params.row.id}
          //checked={params.row.username ===selectedUser}
          control={<Radio />}
          label=""
          //onChange={handleOnCahnage}
        />
      ),
    },

    {
      field: "profileImage",
      headerName: "ProfileImage",
      width: 70,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={`/Upload/${params.row.profileImage}`}
          />
        </div>
      ),
    },
    {
      field: "username",
      headerName: "User name",
      description: "Username ",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <CustomLink
          path={`/craftsmanInformation/${params.row.id}`}
          text={params.row.username}
        />
      ),
    },

    {
      field: "fullName",
      headerName: "full name",
      width: 150,
    },
    {
      field: "ratingValue",
      headerName: "Rating Value",
      width: 150,
      renderCell: (params) => (
        <CustomRating value={params.row.ratingValue} readOnly={true} />
      ),
    },
    {
      field: "speed",
      headerName: "speed",
      width: 150,
    },
    { field: "expectedTime", headerName: "expected time" },
    {
      field: "ExpectedStartDate",
      headerName: "ExpectedStartDate",
      renderCell: (params) =>
        format(new Date(params.row.expectedStartDate), "yyyy-MM-dd"),
    },
    {
      field: "ExpectedEndDate",
      headerName: "ExpectedEndDate",
      renderCell: (params) => addNumberOfDays(params.row.expectedEndDate, -1),
    },
  ];

  useEffect(() => {
    setLoading(true);
    if (!isLoading) {
      axios
        .get(
          `/Constructor/GetTopAvailableCraftsmanInSpecificInterval?space=${
            values.area
          }&sector=${sector}&FromDate=${ format(new Date(values.startDate), "yyyy-MM-dd")}&region=${Number(values.regionId)}`
        )
        .then((result) => {
          setRows(result.data);
          console.log(result.data);
          const defaultValue = selectedUser || result.data[0].id;
          console.log(defaultValue,"defaultValue")
          setValue(defaultValue)
          setLoading(false);
        });
    }
  }, []);
const sendRequest = () => {
  console.log(value, "value");
  const currentUserinfo = rowsData.find(t=>t.id == value);
  const data = {
    ToUserId: value,
    From: currentUserinfo?.expectedStartDate,
    expectedEndDate: addNumberOfDays(currentUserinfo?.expectedEndDate, -1),
    Description: ` we have a  new project with area ${values.area}`,
    projectId : values.projectId
  };
  axios.post(`/Project/SendRequest`, data).then(() => {
    showSuccessPopup();
  });
};
if(rowsData.length ==0) return <Loading/>
console.log(value,"value")

  return (
    <div role="group" aria-labelledby="my-radio-group02">
      <RadioGroup  onChange={handleRadioChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={value}
        name="radio-buttons-group"
      >
        suggested:{rowsData[0].fullName}      

        {projectStatus != undefined && <div>request Status:{getProjectStatusDescription(projectStatus)} </div>}
   {editable &&     <div> <CustomButton text={" Send Request"}  onClick={sendRequest}/></div>}
        <CustomDataGrid columns={columns} rows={rowsData} />
      </RadioGroup>
    </div>
  );
};
export default TopAvailableCraftsman;
