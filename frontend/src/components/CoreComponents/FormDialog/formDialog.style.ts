import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  rootasd: {
    '& .MuiPaper-root':{
          minWidth: 450,
    }

  },
  close:{
    cursor:"Pointer",
    fontSize:'13px',
    color:theme.colors.gray3
    ,'&:hover':{
      color:`red !important`
    }
  },
  modaleTitle:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    textTransform:'capitalize',
    color:theme.colors.primary
  }
}));

export default useStyle;
