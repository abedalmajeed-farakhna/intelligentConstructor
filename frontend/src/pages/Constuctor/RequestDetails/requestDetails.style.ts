import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

  },
  container:{
    paddingTop: '20px',
    paddingLeft: '20px',
  },
  imageListItem:{

  },
  image:{
    
  },
  itemField:{
    display:'flex',
    marginBottom:'15px',
    color:theme.colors.mainTextColor,
    border:`1px solid ${theme.colors.borderColor}`,
    padding:'10px',
    borderRadius:5,
    '& span':{
      textTransform:'capitalize',
      color:'black',
      marginRight:5
    }
  }
}));

export default useStyle;
