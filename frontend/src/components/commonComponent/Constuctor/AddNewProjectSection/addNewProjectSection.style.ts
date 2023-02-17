import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    padding: "1em",
    minWidth: 600,
  },
  imageContainer:{
    borderRadius: "50%",
    width: "40px",
    overflow: "hidden",
    height: "40px",
  
  }
  ,image:{
    maxWidth: "100%",
  
  },
  radioLabel:{
    background:theme.colors.gray3,
    border:`2px solid ${theme.colors.primary}`,
    cursor: "pointer",

  },
  radioButton:{
    visibility:"hidden",

  },
  checked:{
    backgroundColor:theme.colors.primary,
  },
  blockTitle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:'15px'
  },
  customBlock:{
    boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 8px !important',
    marginBottom:'30px'
  }
}));

export default useStyle;