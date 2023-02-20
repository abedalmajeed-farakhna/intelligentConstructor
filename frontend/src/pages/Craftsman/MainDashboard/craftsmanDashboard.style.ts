import { backdropClasses, ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    display: "flex",
    backgroundColor: theme.colors.gray1,
    padding:20
  },
  main: {
    width: `calc(100% - ${200}px)`,
    paddingTop:'50px',
    paddingLeft: '10px',
    minHeight:"100vh"
  },
  widgetICon:{
    color: 'white',
    padding: '0px 6px',
    borderRadius: '5px',
    marginLeft: '20px',
    minWidth: '40px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'blue',
    fontSize: '13px !important',
    fontWeight:'normal',
    '& svg':{
      fontSize:'15px',
      marginRight:'5px'
    }
  },
  requestsColor:{
    background:"gray"
  },
  pendingColor:{
    background:"rgb(250, 173, 20)"
  },
  rejectedColor:{
    background:"rgb(255, 77, 79)"
  },
  approvedColor:{
    background:"rgb(82, 196, 26)"
  },
  inprogresColor:{
    background:"#1890ff"
  },
}));

export default useStyle;
