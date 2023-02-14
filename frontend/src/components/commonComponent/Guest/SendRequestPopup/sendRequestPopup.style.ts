import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    

  },
  button:{
    display:'flex !important',
    alignItems:'center !important',
    justifyContent:'center !important',
    margin:'0 auto 15px !important',
  },
  textarea:{
    maxWidth:'100% !important',
  }
}));

export default useStyle;