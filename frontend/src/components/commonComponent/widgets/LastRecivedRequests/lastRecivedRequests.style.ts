import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
display:"flex",
  },
  main:{
    width:  `calc(100% - ${200}px)` ,
    flexGrow:1,
    margin:20,
    paddingTop:'30px',
    minHeight:"100vh"

  }
}));

export default useStyle;
