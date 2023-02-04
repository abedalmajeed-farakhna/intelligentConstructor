import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import { ICraftsmanRequestListProps } from "./craftsmanRequestList.type";
import useStyles from "./craftsmanRequestList.style";
import { GridColDef } from "@mui/x-data-grid";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../../constants/route";
import axios from "axios";
import BasicTimeline from "../../../components/CoreComponents/BasicTimeline/basicTimeline.index";
import { getProjectStatusDescription } from "../../../utils/enumDescriptions";
import { Rating } from "@mui/material";
import CustomRating from "../../../components/CoreComponents/CustomRating/customRating.index";
import { format } from "date-fns";
import CraftsmanAction from "../../../components/commonComponent/Craftsman/CraftsmanAction/craftsmanAction.index";
import ProfileImage from "../../../components/CoreComponents/ProfileImage/profileImage.index";

const CraftsmanRequestList: React.FC<ICraftsmanRequestListProps> = ({}) => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: "fromProfileImage",
      headerName: "",
      sortable: false,
      filterable: false,
      width: 30,
      renderCell: (params) => (
        <div className={classes.imageContainer}>
          <ProfileImage
            path={params.row.fromProfileImage}
          />
        </div>
      ),
    },
    {
      field: "fromFullName",
      headerName: "Full Name",
      sortable: false,
      width: 160,
    },

  

    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      renderCell: (params) => (
        <CustomRating value={params.row.rating} readOnly={true} />
      ),
    },

    {
      field: "requestDescription",
      headerName: "Description",
      width: 150,
    },

    {
      field: "endDate",
      headerName: "End Date",
      width: 150,
      type: "date",
      renderCell: (params) =>
        format(new Date(params.row.endDate), "yyyy-MM-dd"),
    },

    {
      field: "startDate",
      headerName: "Start Date",
      width: 150,
      type: "date",
      renderCell: (params) =>
        format(new Date(params.row.startDate), "yyyy-MM-dd"),
    },

    {
      field: "requestStatus",
      headerName: "Status", // to be removed 
      width: 150,
      renderCell: (params) => (
        <div> {getProjectStatusDescription(params.row.requestStatus)}</div>
      ),
    },
    {
      field: "Actions",
      width: 120,
      renderCell: (params) => <CraftsmanAction requestStatus={params.row.requestStatus} id={params.row.id} />,
    },
  ];
  useEffect(() => {
    axios.get(`/Project/GetReceivedRequestList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);

  console.log(data, "rowsData");
  return <CustomDataGrid rows={data} columns={columns} />;
};
export default CraftsmanRequestList;
