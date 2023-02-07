import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    color:theme.colors.gray3,
    '& .MuiListItemButton-gutters':{
      padding:"10px 15px"
    },
    '& .MuiSvgIcon-fontSizeMedium':{
      fontSize:"22px"
    }
  },
  active:{
    background:"rgb(24 144 255 / 20%)",
    borderRight: `2px solid ${theme.colors.primary} !important`,
  },
  activeIcon:{
    color:`${theme.colors.primary} !important` ,
  }
}));

export default useStyle;
