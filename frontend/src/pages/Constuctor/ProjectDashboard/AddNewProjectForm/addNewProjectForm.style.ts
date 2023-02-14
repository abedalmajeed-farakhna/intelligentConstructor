import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

    
  },
  FieldItem:{
    width:'100% !important',
    maxWidth:'100% !important',
    marginBottom:'15px',
    '& div':{
      width:'100% !important',
      maxWidth:'100% !important'
    },
    '& input':{
      maxWidth: 'calc( 100% - 30px) !important',
      backgroundColor:'white !important'
    },
    '& select':{
      borderColor: `${theme.colors.borderColor} !important`,
      outline: 'none !important',
    },
    '& label':{
      color: `${theme.colors.gray3} !important`,
      display: 'block',
      fontSize: '15px',
      marginBottom: '5px',
      textTransform: 'capitalize',
    }
  },
  addNewProject:{
    width:'100% !important',
    marginTop:'20px',
    '& button':{
      width:'100% !important',
    }
  },
  projectImagee:{
    maxWidth:'90% !important',
    borderRadius:'5px',
    height:'345px',
    margin:'0 auto',
    backgroundSize:'cover',
    backgroundPosition:'center',
    marginTop:'15px'
  }
}));

export default useStyle;
