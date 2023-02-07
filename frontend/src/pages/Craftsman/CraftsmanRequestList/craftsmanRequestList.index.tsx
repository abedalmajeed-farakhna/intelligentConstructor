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
import FormDialog from "../../../components/CoreComponents/FormDialog/formDialog.index";
import { UploadFile } from "@mui/icons-material";
import FileUploader from "../../../components/CoreComponents/FileUploader/fileUploader.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";

const CraftsmanRequestList: React.FC<ICraftsmanRequestListProps> = ({}) => {
  const [data, setData] = useState([]);
  const [showUploadImageModal, setShowUploadImageModal] =
    useState<boolean>(false);
  const [imageList, setImageList] = useState<string[]>([]);

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
          <ProfileImage path={params.row.fromProfileImage} />
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
      renderCell: (params) => (
        <CraftsmanAction
          requestStatus={params.row.requestStatus}
          id={params.row.id}
        />
      ),
    },
    {
      field: "",
      width: 120,
      renderCell: (params) => (
        <CustomButton
          text="test"
          onClick={openUploadImageModal}
        />
      ),
    },
  ];
  useEffect(() => {
    axios.get(`/Project/GetReceivedRequestList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);

  const openUploadImageModal = () => {
    setShowUploadImageModal(true);
  };
  const HideUploadImageModal = () => {
    setShowUploadImageModal(false);
  };
  const handleUploadImages = (images) => {
    images?.map((t) => {
      converToBase64(t);
    });
  };
  const converToBase64 = (blob) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    let base64data;
    reader.onloadend = function () {
      base64data = reader.result;
      //return base64data;
      imageList.push(base64data);
      setImageList(imageList);
    };
    //return base64data;
  };

  console.log(data, "rowsData");
  const onHandleSubmit = () => {
    let data = {
      imageList: imageList,
    };
    axios.post(`/Craftsman/AddImageForSpecificRequest`, data).then((res) => {
      console.log(res, "res");
      //  showSuccessPopup();
    });
  };
  return (
    <>
      {showUploadImageModal && (
        <FormDialog
          isOpen={showUploadImageModal}
          title={"Upload Image"}
          onClose={HideUploadImageModal}
        >
          <>
            <FileUploader onChange={(data) => handleUploadImages(data)} />

            <CustomButton text={"upload"} onClick={onHandleSubmit} />
          </>
        </FormDialog>
      )}
      <CustomDataGrid rows={data} columns={columns} />
    </>
  );
};
export default CraftsmanRequestList;
