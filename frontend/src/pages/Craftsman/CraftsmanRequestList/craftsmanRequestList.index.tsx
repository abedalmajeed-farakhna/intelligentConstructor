import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import { ICraftsmanRequestListProps } from "./craftsmanRequestList.type";
import useStyles from "./craftsmanRequestList.style";
import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { getProjectStatusDescription } from "../../../utils/enumDescriptions";
import CustomRating from "../../../components/CoreComponents/CustomRating/customRating.index";
import { format } from "date-fns";
import CraftsmanAction from "../../../components/commonComponent/Craftsman/CraftsmanAction/craftsmanAction.index";
import ProfileImage from "../../../components/CoreComponents/ProfileImage/profileImage.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import CraftsmanUploadImageModal from "../CraftsmanUploadImageModal/craftsmanUploadImageModal.index";
import ImageGalleryModal from "../ImageGalleryModal/ImageGalleryModal.index";


const CraftsmanRequestList: React.FC<ICraftsmanRequestListProps> = ({}) => {

  const classes = useStyles();

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
      renderCell: (params) => (
        <div className={classes.imageContainer}>
          <ProfileImage path={params.row.fromProfileImage} />
        </div>
      ),
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
      field: "imageUploaded",
      headerName: "imageUploaded",
      width: 120,
      renderCell: (params) => (
    
        (params.row.requestStatus == ProjectStatusEnum.Done ||
          params.row.requestStatus == ProjectStatusEnum.Inprogres) && (
          <CustomButton
            text="show Image"
            onClick={() => openImageGalleryModal(params.row.id)}
          />
        )
      ),
    },
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
  
  const hideUploadImageModal = () => {
    setShowUploadImageModal(false);
  };



  // image Gallery
  const openImageGalleryModal = (id:number) => {
    setActiveRow(id)
    setshowImageGalleryModal(true);
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