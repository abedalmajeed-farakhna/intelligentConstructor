import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    borderRadius: "50%",
  },
  imageContainer:{
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width:32,
    height:32,
    borderRadius:'50%'
  }
}));

export default useStyle;
