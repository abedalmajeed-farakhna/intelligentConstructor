import { backdropClasses, ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    display: "flex",
    backgroundColor:theme.colors.gray1
  },
  main: {
    width: `calc(100% - ${250}px)`,
    flex: 1,
    background: theme.colors.gray1,
    padding: "40px 40px",
    marginTop:'40px',
    minHeight:"100vh"
  },
}));

export default useStyle;
