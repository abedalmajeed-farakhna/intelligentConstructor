import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    "& .MuiPaper-elevation": {
      borderRadius: "5px",
      background: "white",
      overflow: "visible",
      width:250,
      padding:"10px 0px",
      transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow:"rgb(0 0 0 / 15%) 0px 2px 8px"
    },
    '& .MuiMenuItem-gutters':{
      padding:"10px 15px",
    }
  },
}));

export default useStyle;
