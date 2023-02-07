import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/material";


const useStyle = makeStyles((theme:ThemeOptions) => ({
  link: {
   color:`${theme.colors.primary} !important`
  },
}));

export default useStyle;
