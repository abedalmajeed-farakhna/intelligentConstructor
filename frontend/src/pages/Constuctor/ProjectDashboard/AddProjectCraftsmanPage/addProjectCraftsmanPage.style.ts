import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

    
  },
  projectDetailss:{
    display:'flex',
    alignItems:'center',
    margin:'-10px -10px 0px'
  },
  projectDetailsItem:{
    margin: '10px 10px',
    border:`1px solid ${theme.colors.borderColor} !important`,
    background: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    flex: 1,
    fontSize: '17px !important',
    color: 'black',
    textTransform: 'capitalize',
    display:'flex',
    flexDirection:'column',
    '& span':{
      color:'#5a5a5a',
      fontSize: '16px !important',
      marginTop:'5px',
      display:'block'
    }
  },
}));

export default useStyle;
