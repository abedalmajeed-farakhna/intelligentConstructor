import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({

  customForm:{
    '& div':{
      maxWidth: '100%',
    },
    '& label':{
      color:'black',
      marginBottom:'5px',
      display: 'block'
    },
  },
  root: {
    height: 400,
    width: "100%",
  },
  imageContainer: {
    borderRadius: "50%",
    width: "40px",
    overflow: "hidden",
    height: "40px",
  },
  image: {
    maxWidth: "100%",
  },
  majeedpopup: {
    minWidth: 450,


    "& .MuiPaper-elevation": {
      width: 750,
      maxWidth: 750,
    },
  },
  fileUploader: {
    width:'calc( 100% - 32px) !important',
    border: `1px solid ${theme.colors.borderColor}`,
  },
  formField:{
   width:"100% !important",
   maxWidth:"100% !important",
   marginBottom:15,
   '& input':{
    width: 'calc( 100% - 30px) !important',
    maxWidth: 'calc( 100% - 30px) !important',
   }
  },
  addBtn:{
    '& button':{
      margin:' 0 auto 20px'
    }
  }
}));

export default useStyle;
