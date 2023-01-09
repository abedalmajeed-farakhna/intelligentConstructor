import { Button, IconButton } from "@mui/material";
import { IImageUploadProps } from "./imageUpload.types";
import React, { useState } from "react";
import useStyles from "./imageUpload.style";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const ImageUpload: React.FC<IImageUploadProps> = ({text,type,isMultiple,defaultImage,onChange}) => {

  const classes = useStyles();

  const [file, setFile] = useState(defaultImage??"images/Default_pecture.png");
 
  const handleChange=(e) =>{
      console.log(e.target.files[0]);
      const asd =URL.createObjectURL(e.target.files[0]);
      console.log(asd);
      console.log(typeof(asd));
      onChange(e.target.files[0]);

      setFile(asd);
     
  }
    return (
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img src={file} className={classes.image} />
        </div>

        <IconButton className={classes.cameraIcones}
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept={type}
            multiple={isMultiple}
            type="file"
            onChange={handleChange}
          />
          <PhotoCameraIcon  />
        </IconButton>
      </div>
    );
};

export default ImageUpload;



