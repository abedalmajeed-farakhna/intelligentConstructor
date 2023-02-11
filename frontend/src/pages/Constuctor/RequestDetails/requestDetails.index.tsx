import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { ImageListItem } from "@mui/material";
import CustomIconButton from "../../../components/CoreComponents/CustomIconButton/customIconButton.index";

const RequestDetails: React.FC<IRequestDetailsProps> = ({}) => {
  const [data, setData] = useState<IDataProps | undefined>(undefined);
  const classes = useStyles();
  const requestId = getIdFromLocationPath();

  useEffect(() => {
    axios
      .get(`/Constructor/GetRequestDetailsById?requestId=${requestId}`)
      .then((result) => {
        setData(result.data);
      });
  }, []);

  if (!data) return <Loading />;
  return (
    <>
      <BreadCrump current={"RequestDetails"} linkList={[]} />

      <div> description :{data.requestDescription}</div>
      <div>
        {" "}
        user Name :
        {
          <CustomLink
            path={`${PATH_NAMES.CRAFTSMAN_INFORMATION}/${data.toUserId}`}
            text={data.toUserName}
          />
        }
      </div>
      <div> Start Date :{format(new Date (data.startDate), "yyyy-MM-dd")}</div>
      <div>status : ${getProjectStatusDescription(data.requestStatus)}</div>
      {data.projectId && (
        <div>
          project : 
          {
            <CustomLink
              path={`${PATH_NAMES.PROJECT_DETAILS}/${data.projectId}`}
              text={data.projectName ?? ""}
            />
          }
        </div>
      )}


<div>

{data.imageGalleryList.map((item) => (
        <ImageListItem key={item.imageName}>
          <img 
          className={classes.root}
            width={20}
            height={20}
            src={`/Upload/ImageGallery/${item.imageName}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`/Upload/ImageGallery/${item.imageName}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
         
        </ImageListItem>
      ))}

</div>

    </>
  );
};
export default RequestDetails;
