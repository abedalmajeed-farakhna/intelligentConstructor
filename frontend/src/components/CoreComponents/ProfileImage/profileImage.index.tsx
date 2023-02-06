import * as React from "react";

import Avatar from "@mui/material/Avatar";

import useStyles from "./profileImage.style";
import { IProfileImageProps } from "./profileImage.type";

const ProfileImage: React.FC<IProfileImageProps> = ({ path }) => {
  const classes = useStyles();
  return (
    <>
      {path && path !== "" ? (
               <img
               className={classes.root}
               src={`/Upload/${path}`}
               alt="profile pic"
               width="32px"
               height="32px"
             />
      ) : (
        <Avatar sx={{ width: 32, height: 32 }} />
      )}
    </>
  );
};
export default ProfileImage;
