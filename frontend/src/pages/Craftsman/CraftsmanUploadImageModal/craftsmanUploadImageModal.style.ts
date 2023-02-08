import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    height: 400,
    width: "100%",
  },
  imageContainer: {
    borderRadius: "50%",
    width: "40px",
    overflow: "hidden",
    height: "40px",
  },
  image: {
    maxWidth: "100%",
  },
  majeedpopup: {
    minWidth: 450,

    "& .MuiPaper-elevation": {
      width: 750,
      maxWidth: 750,
    },
  },
  fileUploader: {
    width: 600,
  },
}));

export default useStyle;
