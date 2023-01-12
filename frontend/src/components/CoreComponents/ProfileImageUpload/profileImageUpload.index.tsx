import { IconButton } from "@mui/material";
import { IProfileImageUploadProps } from "./profileImageUpload.types";
import React, { useState } from "react";
import useStyles from "./profileImageUpload.style";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
const ProfileImageUpload: React.FC<IProfileImageUploadProps> = ({type, isMultiple, defaultImage, onChange}) => {
  
  const classes = useStyles();

  const [file, setFile] = useState(
    defaultImage ?? "images/Default_pecture.png"
  );

  const handleChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    onChange(e.target.files[0]);

    setFile(image);
  };
  
  return (
    <div className={classes.root}>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `URL(${file})` }}
      />

      <IconButton
        className={classes.cameraIcones}
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
        <PhotoCameraIcon />
      </IconButton>
    </div>
  );
};

export default ProfileImageUpload;