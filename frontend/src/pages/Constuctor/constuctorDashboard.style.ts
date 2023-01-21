import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
display:"flex",
  },
  main:{
    width:  `calc(100% - ${200}px)` ,
    flexGrow:1

  }
}));

export default useStyle;
