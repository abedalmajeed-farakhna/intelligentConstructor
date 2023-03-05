import React, { useEffect, useState } from "react";

import useStyles from "../../../CoreComponents/BasicTimeline/basicTimeline.style";
import ProjectStatus from "../../../CoreComponents/ProjectStatus/projectStatus.index";
import Loading from "../../../CoreComponents/Loading/loading.index";
import axios from "axios";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "../../../CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomRating from "../../../CoreComponents/CustomRating/customRating.index";
import Widget from "../../../CoreComponents/Widget/widget.index";

const TopRatedProject: React.FC<any> = ({  }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(true);

  
  useEffect(() => {
    axios
    .get(`/UserSettings/GetTopRatedRequestsList`)
    .then((res) => {
      console.log(res, "res");
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "requestDescription",
      headerName: "Description",
      sortable: false,
      width: 300
    },

    {
      field: "requestStatus",
      headerName: "Status",
      width: 100,
      renderCell: (params) => (
        <ProjectStatus projectStatus={params.row.requestStatus}/>
      ),
    },
    {
      field: "rateValue",
      headerName: "",
      width: 140,
      renderCell: (params) => (
        <CustomRating value={params.row.rateValue} readOnly={true} />
      ),
    },

  ];
  if (loading) return<Loading/>;

  return (
    <Widget title={"Top Rated requests "}>
    <CustomDataGrid rows={data} columns={columns} />
    </Widget>
  );
};
export default TopRatedProject;