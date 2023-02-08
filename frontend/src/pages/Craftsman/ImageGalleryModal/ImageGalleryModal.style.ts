import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

  },
  image: {
    width: "150px !important",
    height: "150px !important",
  },
  imageListItem:{
    width: "150px !important",
    height: "150px !important",
  },
  majeedpopup: {
    minWidth: 450,

    "& .MuiPaper-elevation": {
      width: 750,
      maxWidth: 750,
    },
  },
}));

export default useStyle;
