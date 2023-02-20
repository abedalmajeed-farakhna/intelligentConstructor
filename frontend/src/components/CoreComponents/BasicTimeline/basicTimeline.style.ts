import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
   position: "absolute",
   // top: 44,
    background: "#fff",
    border: `1px solid ${theme.colors.gray4}`,
    borderRadius: 15,
    marginLeft: -15,
    padding: 0,
    "& .MuiTimeline-positionRight": {
      justifyContent: "center",
      padding:`0 8px 0 0;`
    },
  },
  nameSection:{
    //cursor:"pointer"
  },
  triangle:{
    width: 0,
    height: 0, 
    borderLeft: `5px solid transparent`,
    borderRight: `5px solid transparent`,
    
    borderBottom: `5px solid black`,

    marginLeft: `20%`,
    marginTop: -5
  },
}));

export default useStyle;
