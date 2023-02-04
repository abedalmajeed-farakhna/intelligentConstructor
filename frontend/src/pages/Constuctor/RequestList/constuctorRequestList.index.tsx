import React, { useEffect, useState } from "react";
import { IRequestListProps } from "./constuctorRequestList.type";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import axios from "axios";
import useStyles from "./constuctorRequestList.style";
import { format } from "date-fns";
import ProjectStatus from "../../../components/CoreComponents/ProjectStatus/projectStatus.index";
import ClearIcon from "@mui/icons-material/Clear";
import AlertDialog from "../../../components/CoreComponents/AlertDialog/alertDialog.index";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import CustomRating from "../../../components/CoreComponents/CustomRating/customRating.index";

const ConstuctorRequestList: React.FC<IRequestListProps> = ({}) => {
  const classes = useStyles();
  const [data, setdata] = useState<any>([]);
  const [CurentRequestId, setCurentRequestId] = useState<number>(-1);

  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);

  const columns: GridColDef[] = [
    {
      field: "toProfileImage",
      headerName: "",
      width: 70,
      filterable: false,
      sortable: false,
      renderCell: (params) => (
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={`/Upload/${params.row.toProfileImage}`}
          />
        </div>
      ),
    },

    { field: "toFullName", headerName: "Full Name", width: 190 },
    {
      field: "startDate",
      headerName: "start Date",
      type: "date",
      width: 180,
      renderCell: (params) =>
        format(new Date(params.row.startDate), "yyyy-MM-dd"),
    },
    {
      field: "endDate",
      headerName: "End Date",
      type: "date",
      width: 150,
      renderCell: (params) =>
        format(new Date(params.row.endDate), "yyyy-MM-dd"),
    },
    { field: "requestDescription", headerName: "Description", width: 130 },
    
    {field: "requestStatus",
      headerName: "Status ",
      width: 150,
      renderCell: (params) => (
        <ProjectStatus projectStatus={params.row.requestStatus} />
      ),
    },

    { field: "",
      headerName: "Action ",
      width: 90,
      renderCell: (params) => (
        <div
          className={
            params.row.requestStatus != ProjectStatusEnum.Pending
              ? classes.disabled
              : classes.actionColumn
          }
          title="cancel request"
        >
          <ClearIcon
            onClick={() =>
              onShowAlertDialog(params.row.id, params.row.requestStatus)
            }
          />
        </div>
      ),
    },

    {field: "Rating",
    headerName: "Rating ",
    width: 150,
    renderCell: (params) => ((params.row.id),
      <CustomRating id= {params.row.id} disabled={params.row.requestStatus != ProjectStatusEnum.Done} value={params.row.rating}/>
      
   
    ),
  },
  ];

  useEffect(() => {
    axios.get(`/Project/GetSentRequestList`).then((result) => {
      setdata(result.data);
    });
  }, []);
  const onHideAlertDialog = () => {
    setShowAlertDialog(false);
  };
  const onShowAlertDialog = (id: number, status: any) => {
    setCurentRequestId(id);
    if (status == ProjectStatusEnum.Pending) {
      setShowAlertDialog(true);
    }
  };
  const onDeleteRequest = () => {
    const requestData = {
      requestId: CurentRequestId,
    };
    axios.post(`/Project/CancelRequest`, requestData).then(() => {
      setdata(data?.filter((t) => t.id != CurentRequestId));
    });
  };
  return (
    <div className={classes.root}>
      {showAlertDialog && (
        <AlertDialog
          title={""}
          message={"Are you sure you wont to delete this request?"}
          onHandleClose={onHideAlertDialog}
          onClick={onDeleteRequest}
        />
      )}
      <CustomDataGrid rows={data} columns={columns} />
    </div>
  );
};
export default ConstuctorRequestList;
