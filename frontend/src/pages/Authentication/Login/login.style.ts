import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    boxShadow: `rgb(0 0 0 / 15%) 0px 2px 8px !important`,
    margin: "1em 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
    padding: "1em",
    minWidth: "600px",
    borderRadius: "5px",
    "& input": {
      width: "calc( 100% - 30px)",
    },
  },
  error:{
    textAlign: "center",
  },
  signUp: {
    textAlign: "center",
    color: `${theme.colors.primary} !important`,
    justifyContent: "center",
    fontSize: 15,
  },
  profileIcon: {
    border: `1px solid ${theme.colors.primary}`,
    width: "52px",
    height: "52px",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.primary,
  },
}));

export default useStyle;
