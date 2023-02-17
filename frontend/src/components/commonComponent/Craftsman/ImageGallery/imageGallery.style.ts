import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    maxWidth: 150,
    maxHeight: 150,
  },
  image: {},
  myProjects:{
    paddingLeft:'30px',
    height: '100vh',
    overflowY: 'scroll',
    paddingRight:'10px',
    '&::-webkit-scrollbar':{
      width: '5px !important'
    },
    '&::-webkit-scrollbar-track':{
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3) !important'
    },
    '&::-webkit-scrollbar-thumb':{
      backgroundColor: `${theme.colors.gray3} !important`
    },
  },
  
  imageListItem: {},
  projectItem: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    border: `1px solid ${theme.colors.borderColor}`,
    marginBottom: "20px",
    padding: "10px",
  },
  projectHead: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px",
    justifyContent: "space-between",
  },
  projectTitle: {
    color: "black",
    fontSize: "18px",
    textTransform:'capitalize'
  },
  projectDelete: {
    "& button": {
      background: `${theme.colors.error} !important`,
      fontSize: "14px",
      textTransform: "capitalize",
      maxWidth: "fit-content",
      padding: "4px 8px",
      width: "fit-content",
    },
  },
  albumImages: {
    display: "flex !important",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "0px -10px",
    ' & div': {
      padding: "0px 10px",
      position:'relative',
      margin:'10px 0'
    },
    '& button':{
      position:'absolute'
    }
  },
  deleteImg:{
    width: '22px !important',
    height: '22px !important',
    padding: '0px !important',
    margin: '0px !important',
    maxWidth: '22px !important',
    borderRadius: '100% !important',
    minWidth: '22px !important',
    position: 'absolute',
    right: '0px',
    top: '-10px',
    fontSize: '11px !important',
    background:'white !important',
    color: `${theme.colors.error} !important`,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }
}));

export default useStyle;
