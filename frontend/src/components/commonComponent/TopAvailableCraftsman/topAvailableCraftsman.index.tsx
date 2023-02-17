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
import ProjectStatus from "../../CoreComponents/ProjectStatus/projectStatus.index";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import ProfileImage from "../../CoreComponents/ProfileImage/profileImage.index";

const TopAvailableCraftsman: React.FC<ITopAvailableCraftsmanProps> = ({
  values,
  sector,
  editable,
  selectedUser,
  projectStatus,
  sectionName,
  timeLine,
  handleUpdateTimeLine,
}) => {
  console.log(values, "values 01" + sector);
  // format(new Date(values.startDate), "yyyy-MM-dd")
  const classes = useStyles();
  const [rowsData, setRows] = useState<ITopAvailableCraftsman[]>([]);
  const [isEditable, setIsEditable] = useState<boolean | undefined>(editable);
  const [isLoading, setLoading] = useState<boolean>(true);

  const [value, setValue] = React.useState("");

  const columns: GridColDef[] = [
    {
      field: "",
      renderCell: (params) => (
        <FormControlLabel
          disabled={!isEditable}
          value={params.row.id}
          //checked={params.row.username ===selectedUser}
          control={<Radio />}
          label=""
          //onChange={handleOnCahnage}
        />
      ),
    },

    {
      field: "ProfileImage",
      headerName: "ProfileImage",
      width: 70,
      filterable: false,
      sortable: false,
      renderCell: (params) => (<ProfileImage path={params.row.profileImage}/>   
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

  const updateTimeLine = (val, data) => {
    const item = data.find((t) => t.id == val);
    handleUpdateTimeLine({
      ...timeLine,
      [sectionName]: {
        startDate: item?.expectedStartDate,
        numberOfDays: item?.expectedTime ?? 0,
      },
    });
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    updateTimeLine(event.target.value, rowsData);
  };

  const getTopAvailableCraftsmanInSpecificInterval = (startDate) => {
    if(!startDate) return;
   
    setLoading(true);
    const fromDate = startDate && format(new Date(startDate), "yyyy-MM-dd");
    axios.get(
        `/Constructor/GetTopAvailableCraftsmanInSpecificInterval?space=${
          values.area
        }&sector=${sector}&FromDate=${fromDate}&region=${Number(
          values.regionId
        )}`
      )
      .then((result) => {
        setRows(result.data);
        //console.log(result.data);
        const defaultValue = selectedUser || result.data[0]?.id;
        //console.log(defaultValue,"defaultValue")
        setValue(defaultValue);
        updateTimeLine(defaultValue, result.data);
        setLoading(false);
        //setLoading(false);
      });
  };

  useEffect(() => {
    console.log(values.startDate, "values.startDate");
     getTopAvailableCraftsmanInSpecificInterval(values.startDate)
  }, [values.startDate &&format(new Date(values.startDate), "yyyy-MM-dd")]);
  
  useEffect(() => {
    if (!values.startDate) return;
    getTopAvailableCraftsmanInSpecificInterval(values.startDate);
  }, []);

  const sendRequest = () => {
    const currentUserinfo = rowsData.find((t) => t.id == value);
    if(currentUserinfo == undefined) return;
    
    const data = {
      ToUserId: value,
      From: currentUserinfo?.expectedStartDate,
      expectedEndDate: addNumberOfDays(currentUserinfo?.expectedEndDate, -1),
      Description: ` we have a  new project with area ${values.area}`,
      projectId: values.projectId,
    };
    axios.post(`/Project/SendRequest`, data).then(() => {
      setIsEditable(false);
      showSuccessPopup();
    });
  };

  if (isLoading) return <Loading />;

  if (!values.startDate) return <div> error</div>;
console.log(projectStatus,"projectStatus")
  return (
    <div role="group" aria-labelledby="my-radio-group02">
      <RadioGroup
        onChange={handleRadioChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={value}
        name="radio-buttons-group"
      >
        <div className={classes.headerSection}>
          {
            <>
              {(projectStatus  == undefined|| isEditable) && (
                <CustomButton
                  disabled={!isEditable}
                  text={" Send Request"}
                  className={classes.sendRequest}
                  onClick={sendRequest}
                />
              )}

              {projectStatus === ProjectStatusEnum.Pending && (
                <CustomButton
                  text={" Cancel Request"}
                  className={classes.sendRequest}
                  onClick={sendRequest}
                />
              )}

              <ProjectStatus projectStatus={projectStatus} />
            </>
          }
        </div>
        <div className={classes.suggestionOption}>
          suggested:{rowsData[0]?.fullName}
        </div>
        {/*  <div>expectedTime: {timeLine[sectionName]?.expectedTime}</div>*/}

        <CustomDataGrid columns={columns} rows={rowsData} />
      </RadioGroup>
    </div>
  );
};
export default TopAvailableCraftsman;