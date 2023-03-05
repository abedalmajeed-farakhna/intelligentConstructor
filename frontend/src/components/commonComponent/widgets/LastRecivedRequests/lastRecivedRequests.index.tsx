import React, { useEffect } from "react";

import useStyles from "../../../CoreComponents/BasicTimeline/basicTimeline.style";
import ProjectStatus from "../../../CoreComponents/ProjectStatus/projectStatus.index";
import Loading from "../../../CoreComponents/Loading/loading.index";
import axios from "axios";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "../../../CoreComponents/CustomDataGrid/customDataGrid.index";
import Widget from "../../../CoreComponents/Widget/widget.index";

const LastRecivedRequests: React.FC<any> = ({  }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(true);

  
  useEffect(() => {
    axios
    .get(`/UserSettings/GetLastRequestsList`)
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
      width: 400
    },

    {
      field: "requestStatus",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <ProjectStatus projectStatus={params.row.requestStatus}/>
      ),
    }

  ];
  if (loading) return<Loading/>;

  return (
    <Widget title={"Last Recived Requests "}>
    <CustomDataGrid rows={data} columns={columns} />
    </Widget>
  );
};
export default LastRecivedRequests;