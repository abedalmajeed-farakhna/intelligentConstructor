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
