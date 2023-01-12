import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    color: "#fff !important",
    backgroundColor: `${theme.colors.primary} !important`,
    width: 300,
    boxShadow: " none",
    fontWeight: "400",
  },
}));

export default useStyle;
