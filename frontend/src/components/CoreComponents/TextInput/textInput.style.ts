import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  container: {
    width: 300,
  },
  root: {
    textAlign: "left",
    margin: `3px 0`,
    borderRadius: 5,
    lineHeight: "1.4375em",
    width: "100%",
    overflow: "hidden",
    minWidth: "0%",
    padding: "10.5px 14px 10.5px 12px",
    fontSize: "14px",
    border: `1px solid ${theme.colors.primary}`,

    "& :: focus-visible ": {
      outline: `0px !important`,
      border: `0px !important`,
    },
  },
  error: {
    borderColor: "red",
  },
  "input :focus-visible": {
    outline: `0px !important`,
    border: `0px !important`,
  }
}));

export default useStyle;
