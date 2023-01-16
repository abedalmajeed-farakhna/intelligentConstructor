import * as React from "react";

import Avatar from "@mui/material/Avatar";

import useStyles from "./profileImage.style";
import { IProfileImageProps } from "./profileImage.type";

const ProfileImage: React.FC<IProfileImageProps> = ({ path }) => {
  const classes = useStyles();
  return (
    <>
      {path && path !== "" ? (
        <div>
          <img
            className={classes.root}
            src={`/Upload/${path}`}
            alt="profile pecher"
            width="25px"
            height="25px"
          />
        </div>
      ) : (
        <Avatar sx={{ width: 32, height: 32 }} />
      )}
    </>
  );
};
export default ProfileImage;
