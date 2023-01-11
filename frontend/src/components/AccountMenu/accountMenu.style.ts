import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileImageUpload from "../ProfileImageUpload/profileImageUpload.index";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    position: "sticky",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    background:theme.colors.secondary,
    borderBottom:`1px solid${theme.colors.gray2}`
  },
  ProfileImage:{

  borderRadius: "50%",
  backgroundColor: "#e4e6eb !important",


}}
));

export default useStyle;
