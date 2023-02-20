import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BasicTimeline from "../../../components/CoreComponents/BasicTimeline/basicTimeline.index";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../../constants/route";
import { IDataProps, IRequestDetailsProps } from "./requestDetails.type";
import useStyles from "./requestDetails.style";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";
import { getIdFromLocationPath } from "../../../utils/projectUtils";
import Loading from "../../../components/CoreComponents/Loading/loading.index";
import { format } from "date-fns";
import { getProjectStatusDescription } from "../../../utils/enumDescriptions";
import { Grid, ImageListItem } from "@mui/material";
import CustomIconButton from "../../../components/CoreComponents/CustomIconButton/customIconButton.index";
import ProjectStatus from "../../../components/CoreComponents/ProjectStatus/projectStatus.index";
import { IUser } from "../../../types/types";
import { IApplicationState } from "../../../redux/ApplicationState";
import { userTypeEnum } from "../../../enums/userTypeEnum";
import ImageGallery from "../../../components/commonComponent/Craftsman/ImageGallery/imageGallery.index";

const RequestDetails: React.FC<IRequestDetailsProps> = ({}) => {
  const [data, setData] = useState<IDataProps | undefined>(undefined);
  const classes = useStyles();
  const requestId = getIdFromLocationPath();
  const user: IUser = useSelector((state: IApplicationState) => state.user);

  console.log(user, "user");
  useEffect(() => {
    axios
      .get(`/Constructor/GetRequestDetailsById?requestId=${requestId}`)
      .then((result) => {
        setData(result.data);
      });
  }, []);

  if (!data) return <Loading />;
  return (
    < div className={classes.container}>
      <BreadCrump
        current={"Request Details"}
        linkList={[
          { name: "Request List", link: PATH_NAMES.CRAFTSMAN_REQUEST_LISt },
        ]}
      />

      <Grid container className={classes.root}>
        <Grid xs={4}>
          
          <div className={classes.itemField}>
            <span>user Name:</span>
            {user.type === userTypeEnum.CONSTRUCTOR ? (
              <CustomLink
                path={`${PATH_NAMES.CRAFTSMAN_INFORMATION}/${data.toUserId}`}
                text={data.toUserName}
              />
            ) : (
              data.toUserName
            )}
          </div>
          <div className={classes.itemField}>
            <span>Start Date:</span>{format(new Date(data.startDate), "yyyy-MM-dd")}
          </div>
          <div className={classes.itemField}>
            <span>status:</span> <ProjectStatus projectStatus={data.requestStatus} />
          </div>
      
          {data.projectId && (
            <div className={classes.itemField}>
             <span>project:</span>
              {
                <CustomLink
                  path={`${PATH_NAMES.PROJECT_DETAILS}/${data.projectId}`}
                  text={data.projectName ?? ""}
                />
              }
            </div>
          )}
          <div className={classes.itemField}><span>description:</span> {data.requestDescription}</div>
        </Grid>
        <Grid xs={8}>
          <ImageGallery
            requestId={requestId}
            userId ={data?.toUserId}
            list={data?.imageGalleryList}
            isEditable={user.type === userTypeEnum.CRAFTSMAN}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default RequestDetails;
