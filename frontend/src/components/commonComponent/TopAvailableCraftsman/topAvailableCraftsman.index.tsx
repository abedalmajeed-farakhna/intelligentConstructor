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

const TopAvailableCraftsman: React.FC<ITopAvailableCraftsmanProps> = ({
  values,
  sector,
  checkBoxName,
  timeLine,
  handleUpdateTimeLine,
}) => {
  console.log(values, "values");
  const classes = useStyles();
  const [rowsData, setRows] = useState<ITopAvailableCraftsman[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!values[checkBoxName]) return;
    console.log(values[checkBoxName], "values[checkBoxName]]");
    handleUpdateTimeLine({
      ...timeLine,
      [checkBoxName]:
        rowsData.find((t) => t.id == values[checkBoxName])?.expectedTime ?? 0,
    });
  }, [values[checkBoxName]]);

  const handleOnCahnage = (e) => {
    console.log(e, "handleOnCahnage");
  };
  const columns: GridColDef[] = [
    {
      field: "",
      renderCell: (params) => (
        <label
          className={classNames(
            classes.radioLabel,
            values[checkBoxName] == params.row.id && classes.checked
          )}
        >
          <Field
            /*checked={
              values[checkBoxName]
                ? values[checkBoxName] == params.row.id
                : rowsData[0].id == params.row.id
            }*/
            onFromChange={handleOnCahnage}
            type="radio"
            name={checkBoxName}
            value={params.row.id}
            className={classes.radioButton}
          />
        </label>
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
      field: "speed",
      headerName: "speed",
      width: 150,
    },
    { field: "expectedTime", headerName: "expected time" },
  ];

  useEffect(() => {
    setLoading(true);
    if (!isLoading) {
      axios
        .get(
          `/Constructor/GetTopAvailableCraftsmanInSpecificInterval?space=${
            values.space
          }&sector=${sector}&FromDate=${GetFromDateValue(
            sector,
            timeLine,
            values.fromDate
          )}`
        )
        .then((result) => {
          setRows(result.data);
          console.log(result.data);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div role="group" aria-labelledby="my-radio-group02">
      <CustomDataGrid columns={columns} rows={rowsData} />
    </div>
  );
};
export default TopAvailableCraftsman;