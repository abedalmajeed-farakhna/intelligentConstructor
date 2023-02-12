import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    height: 400,
    width: "100%",
  },
  imageContainer: {
    borderRadius: "50%",
    width: "40px",
    overflow: "hidden",
    height: "40px",
  },
  image: {
    maxWidth: "100%",
  },
  majeedpopup: {
    minWidth: 450,

    "& .MuiPaper-elevation": {
      width: 750,
      maxWidth: 750,
    },
  },
  fileUploader: {
    width: 600,
  },
  tableICon:{
  margin:'0px 5px',
  padding: '0px 6.5px',
  height: '28px !important',
  border: `1px solid ${theme.colors.borderColor}`,
  borderRadius:'5px',
  background: theme.colors.gray1,
  cursor: "pointer",
  fontSize:'13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg':{
    fontSize:'15px'
  }
},
viewICon:{
  color:theme.colors.doneColor
}
}));

export default useStyle;
