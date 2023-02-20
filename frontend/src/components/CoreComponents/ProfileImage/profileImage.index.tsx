import * as React from "react";

import Avatar from "@mui/material/Avatar";
import classNames from "classnames";

import useStyles from "./profileImage.style";
import { IProfileImageProps } from "./profileImage.type";

const ProfileImage: React.FC<IProfileImageProps> = ({ path, className }) => {
  console.log(path,"path")
  const classes = useStyles();
  return (
    <>
      {path && path !== "" ? (
              <div  className={classNames(classes.imageContainer,className)} style={{ backgroundImage: `URL(${`/Upload/${path}`})` }}/>

              
      ) : (
        <Avatar  className={classNames(className)}  sx={{ width: 32, height: 32 }} />
      )}
    </>
  );
};
export default ProfileImage;
