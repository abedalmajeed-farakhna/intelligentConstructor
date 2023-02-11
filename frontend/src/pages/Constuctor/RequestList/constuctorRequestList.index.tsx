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
import ViewIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "../../../constants/route";

const ConstuctorRequestList: React.FC<IRequestListProps> = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();

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

    { field: "toFullName", headerName: "Full Name", width: 160 },
    {
      field: "startDate",
      headerName: "start Date",
      type: "date",
      width: 160,
      renderCell: (params) =>
        format(new Date(params.row.startDate), "yyyy-MM-dd"),
    },
    {
      field: "endDate",
      headerName: "End Date",
      type: "date",
      width: 160,
      renderCell: (params) =>
        format(new Date(params.row.endDate), "yyyy-MM-dd"),
    },
    {
      field: "requestStatus",
      headerName: "Status ",
      width: 150,
      renderCell: (params) => (
        <ProjectStatus projectStatus={params.row.requestStatus} />
      ),
    },

    {
      field: "id",
      headerName: "Action ",
      filterable: false,
      sortable: false,
      width: 180,
      renderCell: (params) => (
        <>
          <div className={classes.tableICon}>
            <ViewIcon className={classes.viewICon} onClick={()=>showRequestDetails(params.row.id)} />
          </div>
          <div
            className={classNames(
              classes.tableICon,classes.deleteICon,
              params.row.requestStatus != ProjectStatusEnum.Pending &&
                classes.disabled
            )}
            title="cancel request"
          >
            <DeleteIcon
              onClick={() =>
                onShowAlertDialog(params.row.id, params.row.requestStatus)
              }
            />
          </div>
        </>
      ),
    },

    {
      field: "Rating",
      headerName: "Rating ",
      width: 150,
      renderCell: (params) => (
        params.row.id,
        (
          <CustomRating
            id={params.row.id}
            disabled={params.row.requestStatus != ProjectStatusEnum.Done}
            value={params.row.rating}
          />
        )
      ),
    },
  ];

  const showRequestDetails=(id)=>{
    navigate(`${PATH_NAMES.RequestDetails}/${id}`); //TODO save name in redux

  }
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
