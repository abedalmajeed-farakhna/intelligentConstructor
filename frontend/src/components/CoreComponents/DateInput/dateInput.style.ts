import { BorderColor, Height } from "@mui/icons-material";
import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  formControl:{
    marginBottom:'15px'
  },
  root: {
    width:'100%',
   '& input':{
    width: '100%',
    padding: '5px 15px !important',
    height: '35px !important',
    border:`1px solid ${theme.colors.borderColor} !important`,
    borderRadius:'5px',
    outline:'0 !important',
    boxShadow:'none !important'
   },
   '& fieldset':{
    border:0
   }
  },
  formLabel:{
    fontSize:'15px',
    color:theme.colors.gray3,
    marginBottom:'5px',
    display:'block',
    textTransform:'capitalize'
  }
}));

export default useStyle;
