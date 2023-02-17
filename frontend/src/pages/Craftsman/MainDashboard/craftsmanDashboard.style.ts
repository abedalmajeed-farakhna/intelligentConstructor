import { backdropClasses, ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    display: "flex",
    backgroundColor: theme.colors.gray1,
    padding:20
  },
  main: {
    width: `calc(100% - ${200}px)`,
    paddingTop:'30px',
    minHeight:"100vh"
  },
}));

export default useStyle;
