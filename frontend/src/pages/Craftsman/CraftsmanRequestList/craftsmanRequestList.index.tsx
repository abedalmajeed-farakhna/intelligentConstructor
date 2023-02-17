import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

import ViewIcon from '@mui/icons-material/Visibility';
import { GridColDef } from "@mui/x-data-grid";

import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import { getProjectStatusDescription } from "../../../utils/enumDescriptions";
import CustomRating from "../../../components/CoreComponents/CustomRating/customRating.index";
import CraftsmanAction from "../../../components/commonComponent/Craftsman/CraftsmanAction/craftsmanAction.index";
import ProfileImage from "../../../components/CoreComponents/ProfileImage/profileImage.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import CraftsmanUploadImageModal from "../CraftsmanUploadImageModal/craftsmanUploadImageModal.index";
import ImageGalleryModal from "../ImageGalleryModal/ImageGalleryModal.index";
import { PATH_NAMES } from "../../../constants/route";

import useStyles from "./craftsmanRequestList.style";
import { ICraftsmanRequestListProps } from "./craftsmanRequestList.type";


const CraftsmanRequestList: React.FC<ICraftsmanRequestListProps> = ({}) => {

  const classes = useStyles();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [activeRow, setActiveRow] = useState<number>(0);
  const [showUploadImageModal, setShowUploadImageModal] =  useState<boolean>(false);
  const [showImageGalleryModal, setshowImageGalleryModal] =  useState<boolean>(false);



  const columns: GridColDef[] = [
    {
      field: "fromProfileImage",
      headerName: "",
      sortable: false,
      filterable: false,
      width: 30,
      renderCell: (params) => <ProfileImage path={params.row.fromProfileImage} />,
    },
    {
      field: "fromFullName",
      headerName: "Full Name",
      sortable: false,
      width: 100,
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
      width: 100,
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
      width: 100,
      renderCell: (params) => (
        <CraftsmanAction
          requestStatus={params.row.requestStatus}
          id={params.row.id}
        />
      ),
    },
    {
      field: "uploadImage",
      width: 120,
      renderCell: (params) => (
        params.row.requestStatus,
        (
          <CustomButton
            text="upload"
            //   requestStatus= {params.row.requestStatus}
            disabled={
              params.row.requestStatus != ProjectStatusEnum.Done &&
              params.row.requestStatus != ProjectStatusEnum.Inprogres
            }
            onClick={() => openUploadImageModal(params.row.id)}
          />
        )
      ),
    },

    {
      field:"",
      headerName:"Actions",
      width:120,
      renderCell :(params)=>(<div className={classes.tableICon}>
        <ViewIcon className={classes.viewICon} onClick={()=>showRequestDetails(params.row.id)} />
      </div>)
    }
  ];
  
  useEffect(() => {
    axios.get(`/Project/GetReceivedRequestList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);

  const openUploadImageModal = (id:number) => {
    setActiveRow(id)
    setShowUploadImageModal(true);
  };
  const showRequestDetails=(id)=>{
    navigate(`${PATH_NAMES.RequestDetails}/${id}`); //TODO save name in redux

  }
  const hideUploadImageModal = () => {
    setShowUploadImageModal(false);
  };


  const closeImageGalleryModal = () => {
    setshowImageGalleryModal(false);
  };
  return (
    <>
      {showUploadImageModal && (
        <CraftsmanUploadImageModal requestId ={activeRow}
          hideUploadImageModal={hideUploadImageModal}
        />
      )}
      {showImageGalleryModal && (
        <ImageGalleryModal onHide={closeImageGalleryModal} requestId ={activeRow} />
      )}
      <CustomDataGrid rows={data} columns={columns} />
      {}
    </>
  );
};
export default CraftsmanRequestList;