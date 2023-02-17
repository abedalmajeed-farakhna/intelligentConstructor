import axios from "axios";
import React, { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import CancelIcon from "@mui/icons-material/Cancel";
import ImageListItem from "@mui/material/ImageListItem";

import Loading from "../../../CoreComponents/Loading/loading.index";
import CustomIconButton from "../../../CoreComponents/CustomIconButton/customIconButton.index";

import { IDataProps, IImageGalleryProps } from "./imageGallery.type";
import useStyles from "./imageGallery.style";
import { IImageGalleryListProps } from "../../../../types/types";
import { Grid, List } from "@mui/material";
import CustomButton from "../../../CoreComponents/CustomButton/customButton.index";

const ImageGallery: React.FC<IImageGalleryProps> = ({
  list,
  requestId,
  userId,
  reloadData,
  isEditable,
}) => {
  const classes = useStyles();

  const [data, setData] = useState<undefined | IImageGalleryListProps[]>(list);
  useEffect(() => {
    console.log(reloadData, "reloadData");
    getImageList();
  }, [reloadData]);
  useEffect(() => {
    if (!list) {
      getImageList();
    }
  }, []);

  const getImageList = () => {
    axios
      .get(`/Craftsman/GetImageList?requestId=${requestId}&userId=${userId}`)
      .then((res) => {
        console.log(res, "res");
        setData(res.data);
      });
  };

  const deleteImage = (id) => {
    const req = { ImageGalleryId: id };
    axios.post(`/Craftsman/DeleteImage/`, req).then((res) => {
      getImageList();
    });
  };
  const deleteSection = (id) => {
    const req = { SectionId: id };
    axios.post(`/Craftsman/deleteSection/`, req).then((res) => {
      getImageList();
    });
  };
  if (data?.length == 0) return <div> </div>; //No image

  return (
    <>
      <div className={classes.myProjects}>
      {data?.map((element, key) => (
        <div className={classes.projectItem}>
          <div className={classes.projectHead}>
            <div className={classes.projectTitle}> {element.title} </div>
            <div className={classes.projectDelete}>
              {" "}
              {isEditable && (
                <CustomButton
                  onClick={() => deleteSection(element.id)}
                  text={"delete section"}
                />
              )}
            </div>
          </div>

          <Grid container className={classes.albumImages}>
            {element.imageList.map((item) => (
              <Grid className={classes.imageListItem}>
                <img
                  className={classes.image}
                  width={160}
                  height={120}
                  src={`/Upload/ImageGallery/${item.imageName}`}
                  srcSet={`/Upload/ImageGallery/${item.imageName}`}
                  alt={""}
                  loading="lazy"
                />
                {isEditable && (
                  <CustomButton className={classes.deleteImg}
                    onClick={() => deleteImage(item.id)}
                    text={"x"}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
      </div>
    </>
  );
};
export default ImageGallery;
