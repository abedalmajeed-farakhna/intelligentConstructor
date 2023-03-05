import axios from "axios";
import React, { useEffect, useState } from "react";
import { IDataProps, IGalleryDBProps } from "./galleryDB.type";
import Loading from "../../../components/CoreComponents/Loading/loading.index";
import { Grid } from "@mui/material";
import { getProjectStatus } from "../../../utils/projectUtils";
import useStyles from "./galleryDB.style";
import ImageGallery from "../../../components/commonComponent/Craftsman/ImageGallery/imageGallery.index";

const GalleryDB: React.FC<IGalleryDBProps> = ({}) => {
  const classes = useStyles();
  const [data, setData] = useState<IDataProps>();

  const location = window.location;
  const locationQiery = location?.href.split("/");
  const [rowsData, setRows] = useState([]);

  const id = parseInt(locationQiery[locationQiery.length - 1]);



  console.log(data?.craftsmans, "data?.craftsmans");
  var allRequestStatus = data?.craftsmans.map((t) => {
    return t.projectStatus;
  });

  return (
    <Grid xs={8}>
    <ImageGallery
      requestId={id}
      //list={undefined}
      //userId ={data?.toUserId}
      //list={data?.imageGalleryList}
      isEditable={false}
    />
  </Grid>
  );
};
export default GalleryDB;
