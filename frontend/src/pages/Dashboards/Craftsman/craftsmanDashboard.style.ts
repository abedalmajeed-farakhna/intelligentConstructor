import { backdropClasses, ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    display: "flex",
    backgroundColor:theme.colors.gray1
  }

}));

export default useStyle;
