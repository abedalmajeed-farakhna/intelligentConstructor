import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
 height: 400,
  width:  '100%',

 }
,
disabled: {

  cursor: "no-drop",
  color: theme.colors.gray3,


},
actionColumn: {

  cursor: "pointer",

},
imageContainer:{
  borderRadius: "50%",
  width: "40px",
  overflow: "hidden",
  height: "40px",

}
,image:{
  maxWidth: "100%",

}

}));
export default useStyle;
