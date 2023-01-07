import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    color: theme.colors.error,
    fontSize: 12,
    width: "100%",
    textAlign: "left",
  }
}));

export default useStyle;
