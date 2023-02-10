import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "formik";
import classNames from "classnames";
import { GridColDef } from "@mui/x-data-grid";
import useStyles from "./topRatedCraftsman.style";

import {
  ITopRatedCraftsman,
  ITopRatedCraftsmanProps,
} from "./topRatedCraftsman.type";
import { GetFromDateValue } from "./topRatedCraftsman.utils";
import { format } from "date-fns";
import CustomLink from "../../../CoreComponents/CustomLink/customLink.index";
import { addNumberOfDays } from "../../../../utils/DateUtils";
import CustomDataGrid from "../../../CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomRating from "../../../CoreComponents/CustomRating/customRating.index";

const TopRatedCraftsman: React.FC<ITopRatedCraftsmanProps> = ({
  values,
  sector
}) => {
  console.log(values, "values");
  // we will read it from the backend
  const classes = useStyles();
  const [rowsData, setRows] = useState<ITopRatedCraftsman[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);


  const handleOnCahnage = (e) => {
    console.log(e, "handleOnCahnage");
  };
  const columns: GridColDef[] = [
    {
      field: "",
      renderCell: (params) => (
       
          <Field
            onFromChange={handleOnCahnage}
            type="radio"
            value={params.row.id}
            className={classes.radioButton}
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
    }
  ];

  useEffect(() => {
    setLoading(true);
    if (!isLoading) {
      axios
        .get(
          `/Constructor/GetTopRatedCraftsman?sector=${sector}&region=${Number(
            values.region
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
export default TopRatedCraftsman;