import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    position: "sticky",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    background:theme.colors.secondary,
    borderBottom:`1px solid${theme.colors.gray2}`
  }}
));

export default useStyle;
