import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/material";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    width: 250,
    padding:"0px 10px",
  },
  drawer: {
    display: "block",

    "& .MuiDrawer-paper": {
      width: 270,
      marginTop: 50,
      borderRight:`1px solid ${theme.colors.borderColor} !important`,
    }
  }
}));

export default useStyle;