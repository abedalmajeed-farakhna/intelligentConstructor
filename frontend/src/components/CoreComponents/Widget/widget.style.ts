import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    border: `1px solid gray`,
    borderRadius: 5,
    float: 'left',
    padding: 20
  },
  title: {},
  body: {},
  element: {},
}));

export default useStyle;
