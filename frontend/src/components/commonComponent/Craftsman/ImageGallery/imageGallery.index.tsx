import axios from "axios";
import React, { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import CancelIcon from "@mui/icons-material/Cancel";
import ImageListItem from "@mui/material/ImageListItem";

import Loading from "../../../CoreComponents/Loading/loading.index";
import CustomIconButton from "../../../CoreComponents/CustomIconButton/customIconButton.index";

import { IDataProps, IImageGalleryProps } from "./imageGallery.type";
import useStyles from "./imageGallery.style";

const ImageGallery: React.FC<IImageGalleryProps> = ({}) => {
  const classes = useStyles();

  const [data, setData] = useState<IDataProps[]>([]);

  useEffect(() => {
    axios.get(`/Craftsman/GetImageList`).then((res) => {
      console.log(res, "res");
      setData(res.data);
    });
  }, []);

  const deleteImage = (id) => {
    const req = { ImageGalleryId: id };
    axios.post(`/Craftsman/DeleteImage/`, req).then((res) => {
      console.log(res, "res");
      //data =data.filter(t=>t.id != id);
      setData(data.filter((t) => t.id != id));
    });
  };
  console.log(data, "data");
  if (data.length == 0) return <Loading />;

  return (
    <ImageList>
      {data.map((item) => (
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
           <CustomIconButton
            handleOnClick={() => deleteImage(item.id)}
            title={"delete"}
            icon={<CancelIcon color="error" />}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default ImageGallery;
