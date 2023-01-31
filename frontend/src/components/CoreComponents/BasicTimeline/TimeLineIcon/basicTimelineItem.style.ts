import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

width:150,
minWidth:150,
maxWidth:150,
  }
  ,icon:{

  }
  ,nameSection:{
    
width:110
  },
  dateSection:{
    color:theme.colors.gray5,
    fontSize:theme.fontSize.small
  }
}));

export default useStyle;
