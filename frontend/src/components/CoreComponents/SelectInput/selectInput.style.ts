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
    borderColor: `${theme.colors.borderColor}!important`,
    padding: "10.5px 14px 10.5px 12px",
    fontSize: "14px",
    outline: 'none !important',

    "& :: focus-visible ": {
      outline: 'none !important',
    },
  },

  "input :focus-visible": {
    outline: 'none !important',
  }
}));

export default useStyle;
