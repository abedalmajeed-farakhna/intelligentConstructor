import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
  //  color: theme.colors.primary,
    textDecoration: "none",
    //margin: "0 5px",
  },
  link: {
    color: `${theme.colors.gray3} !important`,
    textTransform: "capitalize",
    textDecoration: "none",
    display:"flex",
    alignItems:"center",
  },
  activeLink: {
    color: `${theme.colors.primary} !important`,
  },
}));

export default useStyle;
