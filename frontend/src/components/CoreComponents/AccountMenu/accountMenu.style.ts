import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

document.body.style.margin = "0px";

const useStyle = makeStyles((theme:ThemeOptions) => ({
  root: {
    display:"flex",
    width:  `100%` ,
    top: "0",
  },
  container: {
    width:  `calc(100% - ${250}px)` ,
    flex:1,
    borderBottom:`1px solid ${theme.colors.borderColor}`,
    display: "flex",
    justifyContent: "flex-end",
    background:theme.colors.secondary,
    alignItems:"center",
    padding:"0px 10px",
  },
  logo:{
    width:250,
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    height:50,
    padding:"0px 10px",
    borderRight:`1px solid ${theme.colors.borderColor}`,
  },
  accountSettings:{
    display:"flex",
    alignItems:"center",
    borderRadius:"5px !important",
    padding:"5px 10px !important",
    cursor:"pointer !important"
  },
  userName:{
    marginLeft:"10px !important"
  }

}
  
));

export default useStyle;

