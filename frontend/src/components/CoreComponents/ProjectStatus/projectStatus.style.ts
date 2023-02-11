import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

  },
  circleIcon:{
    fontSize:'10px !important',
    marginRight:'10px'
  },
  cancel:{
    color:theme.colors.error
  },
  done:{
    color:theme.colors.doneColor
  },
  rejected:{
    color:'rgb(255, 77, 79)'
  },
  inprogress:{
    color:theme.colors.primary
  },
  approved:{
    color:'rgb(82, 196, 26)'
  },
  pending:{
    color:'rgb(250, 173, 20)'
  }
}));

export default useStyle;
