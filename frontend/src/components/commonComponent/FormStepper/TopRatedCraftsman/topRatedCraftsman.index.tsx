import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "formik";
import { GridColDef } from "@mui/x-data-grid";
import useStyles from "./topRatedCraftsman.style";

import {
  ITopRatedCraftsman,
  ITopRatedCraftsmanProps,
} from "./topRatedCraftsman.type";
import CustomLink from "../../../CoreComponents/CustomLink/customLink.index";
import CustomDataGrid from "../../../CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomRating from "../../../CoreComponents/CustomRating/customRating.index";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import CustomButton from "../../../CoreComponents/CustomButton/customButton.index";
import { showSuccessPopup } from "../../../../utils/projectUtils";
import Loading from "../../../CoreComponents/Loading/loading.index";
import ProjectStatus from "../../../CoreComponents/ProjectStatus/projectStatus.index";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";
import ProfileImage from "../../../CoreComponents/ProfileImage/profileImage.index";
import AlertDialog from "../../../CoreComponents/AlertDialog/alertDialog.index";

const TopRatedCraftsman: React.FC<ITopRatedCraftsmanProps> = ({
  values,
  selectedUser,
  editable,
  sector,
 projectStatus,
  requestId,
}) => {
  // we will read it from the backend
  const classes = useStyles();
  const [rowsData, setRows] = useState<ITopRatedCraftsman[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isEditable, setIsEditable] = useState<boolean>(editable);
  const [value, setValue] = React.useState("");
  const [currentProjectStatus, setCurrentProjectStatus] = useState<
    ProjectStatusEnum | undefined
  >(projectStatus);
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);

  const columns: GridColDef[] = [
    {
      field: "#",
      headerName: "",
      width:50,
      renderCell: (params) => (
        <FormControlLabel
          disabled={!isEditable}
          value={params.row.id}
          //checked={params.row.username ===selectedUser}
          control={<Radio />}
          label=""
          //onChange={handleOnCahnage}
        />
      ),
    },

    {
      field: "profileImage",
      headerName: "",
      width: 70,
      filterable: false,
      sortable: false,
      renderCell: (params) => <ProfileImage path={params.row.profileImage} />,
    },
    {
      field: "username",
      headerName: "User name",
      description: "Username ",
      sortable: false,
      width: 180,
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
  ];

  const handleOnCahnage = (e) => {
    console.log(e, "handleOnCahnage");
  };
  const sendRequest = () => {
    console.log(value, "value");
    const currentUserinfo = rowsData.find((t) => t.id == value);
    const data = {
      ToUserId: value,
      Description: ` we have a  new project with area ${values.area}`,
      projectId: values.projectId,
    };
    axios.post(`/Project/SendRequest`, data).then(() => {
      showSuccessPopup();
      setIsEditable(false);
      setCurrentProjectStatus(ProjectStatusEnum.Pending)
    });
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    // updateTimeLine(event.target.value,rowsData);
    //if (!values[checkBoxName]) return;
    //console.log(values[checkBoxName], "values[checkBoxName]]");
  };

  const onHideAlertDialog = () => {
    setShowAlertDialog(false);
  };
  
  const onShowAlertDialog = () => {
      setShowAlertDialog(true);
  };
  
  const onDeleteRequest = (curentRequestId) => {
    const requestData = {
      requestId: curentRequestId,
    };
    axios.post(`/Project/CancelRequest`, requestData).then(() => {
      setIsEditable(true);
      setCurrentProjectStatus(undefined)
   //   setdata(data?.filter((t) => t.id != CurentRequestId));
    });
  };
  

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `/Constructor/GetTopRatedCraftsman?sector=${sector}&region=${Number(
          values.regionId
        )}`
      )
      .then((result) => {
        setRows(result.data);
        //console.log(result.data);
        const defaultValue = selectedUser || result?.data[0]?.id;
        setValue(defaultValue);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <Loading />;

  return (
    <div role="group" aria-labelledby="my-radio-group02">
        {showAlertDialog && (
        <AlertDialog
          title={""}
          message={"Are you sure you wont to delete this request?"}
          onHandleClose={onHideAlertDialog}
          onClick={()=>onDeleteRequest(requestId)}
        />
      )}
      <RadioGroup
        onChange={handleRadioChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={value}
        name="radio-buttons-group"
      >
        <div className={classes.headerSection}>
          {isEditable && (
            <CustomButton
              className={classes.sendRequest}
              text={" Send Request"}
              onClick={sendRequest}
            />
          )}

          {currentProjectStatus === ProjectStatusEnum.Pending && (
            <CustomButton
              text={" Cancel Request"}
              className={classes.sendRequest}
              onClick={onShowAlertDialog}
            />
          )}
          <ProjectStatus projectStatus={currentProjectStatus} />
        </div>
        <div className={classes.suggestionOption}>
          suggested: <span>{rowsData[0]?.fullName}</span>{" "}
        </div>
        <CustomDataGrid columns={columns} rows={rowsData} />
      </RadioGroup>
    </div>
  );
};
export default TopRatedCraftsman;