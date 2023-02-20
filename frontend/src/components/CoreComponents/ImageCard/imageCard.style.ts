import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    boxShadow: "rgb(0 0 0 / 15%) 0px 2px 8px !important",
    borderRadius: "5px !important",
    flex: "1",
    width:" 100%",
    marginBottom:20,
  },
  link:{
    color:`${theme.colors.gray3} !important`
  },
  description:{
    color:`${theme.colors.gray6} !important`,
    height:120
  }
}));

export default useStyle;
