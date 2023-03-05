import axios from "axios";
import React, { useEffect, useState } from "react";



import { IImageGalleryProps } from "./imageGallery.type";
import useStyles from "./imageGallery.style";
import { IImageGalleryListProps } from "../../../../types/types";
import { Grid } from "@mui/material";
import CustomButton from "../../../CoreComponents/CustomButton/customButton.index";
import AlertDialog from "../../../CoreComponents/AlertDialog/alertDialog.index";
import Loading from "../../../CoreComponents/Loading/loading.index";

const ImageGallery: React.FC<IImageGalleryProps> = ({
  list,
  requestId,
  userId,
  reloadData,
  isEditable,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<undefined | IImageGalleryListProps[]>(list);
  const [selectedImageId, setSelectedImageId] = useState<number>(0);
  const [selectedSectionId, setSelectedSectionId] = useState<number>(0);
  useEffect(() => {
    console.log(reloadData, "reloadData");
    getImageList();
  }, [reloadData]);
  useEffect(() => {
    console.log("list,",list);
    if (!list) {
      getImageList();
    }else{
      setLoading(false)
    }
    
  }, []);
  const onShowImageDialog =(id)=>{
    setSelectedImageId(id);
  }
  const onHideDeleteImageDialog =()=>{
    setSelectedImageId(0);
  }

  
  const onShowSectionDialog =(id)=>{
    setSelectedSectionId(id);
  }
  const onHideDeleteSectionDialog =()=>{
    setSelectedSectionId(0);
  }
  
  const getImageList = () => {
    console.log("getImageList,");
    axios
      .get(`/Craftsman/GetImageList?requestId=${requestId}&userId=${userId}`)
      .then((res) => {
        console.log(res, "res");
        setData(res.data);
        setLoading(false)

      });
  };

  const deleteImage = () => {
    const req = { ImageGalleryId: selectedImageId };
    axios.post(`/Craftsman/DeleteImage/`, req).then((res) => {
      getImageList();
    });
  };
  const deleteSection = () => {
    const req = { SectionId: selectedSectionId };
    axios.post(`/Craftsman/deleteSection/`, req).then((res) => {
      getImageList();
    });
  };

  if(loading) return <Loading/>
  if (data?.length == 0) return <div> </div>;

  return (
    <>
     {selectedImageId !=0&& (
        <AlertDialog
          title={""}
          message={"Are you sure you wont to delete this Image?"}
          onHandleClose={onHideDeleteImageDialog}
          onClick={deleteImage}
        />
      )}
        {selectedSectionId !=0&& (
        <AlertDialog
          title={""}
          message={"Are you sure you wont to delete this Section?"}
          onHandleClose={onHideDeleteSectionDialog}
          onClick={deleteSection}
        />
      )}
      <div className={classes.myProjects}>
      {data?.map((element, key) => (
        <div className={classes.projectItem}>
          <div className={classes.projectHead}>
            <div className={classes.projectTitle}> {element.title} </div>
            <div className={classes.projectDelete}>
              {" "}
              {isEditable && (
                <CustomButton
                  onClick={() => onShowSectionDialog(element.id)}
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
                  width={152}
                  height={120}
                  src={`/Upload/ImageGallery/${item.imageName}`}
                  srcSet={`/Upload/ImageGallery/${item.imageName}`}
                  alt={""}
                  loading="lazy"
                />
                {isEditable && (
                  <CustomButton className={classes.deleteImg}
                    onClick={() => onShowImageDialog(item.id)}
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
