import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    color: theme.colors.primary,
    textDecoration: "none",
    margin: "0 5px",
  },
}));

export default useStyle;