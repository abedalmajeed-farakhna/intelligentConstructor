import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    backgroundColor:"white !important",
    borderColor:`${theme.colors.borderColor} !important`,
  
    '& .MuiDataGrid-iconSeparator':{
      display:"none !important"
    },
    '& .css-f3jnds-MuiDataGrid-columnHeaders':{
      borderColor:`${theme.colors.borderColor} !important`,
      fontSize:"15px",
      textTransform: "capitalize !important"
    }
  },
}));

export default useStyle;