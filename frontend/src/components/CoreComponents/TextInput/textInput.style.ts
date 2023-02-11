import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  container: {
    width: '100%',
    maxWidth:'300px',
    '& label':{
      fontSize:'15px',
      color:theme.colors.gray3,
      marginBottom:'5px',
      display:'block',
      textTransform:'capitalize'
    },
    '& textarea' : {
      minHeight:'100px',
      boxSizing: 'border-box'
    }
  },
  root: {
    textAlign: "left",
    width: '100%',
    padding: '10px 15px !important',
    border:`1px solid ${theme.colors.borderColor} !important`,
    borderRadius:'5px',
    outline:'0 !important',
    boxShadow:'none !important',
    "& :: focus-visible ": {
      outline: `0px !important`,
      border: `0px !important`,
    },
  },
  error: {
    borderColor: "red",
  },
  "input :focus-visible": {
    outline: `0px !important`,
    border: `0px !important`,
  }
}));

export default useStyle;
