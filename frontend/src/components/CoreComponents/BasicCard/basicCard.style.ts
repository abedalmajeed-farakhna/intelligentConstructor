import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
  },
  dFlexCol:{
    display:'flex',
    flexDirection:'column',
  },
  portfolio:{
    cursor:'pointer',
    '& p':{
      color:theme.colors.mainTextColor,
      fontSize:15,
      margin:'5px 0px'
    },
    '& svg':{
      color:theme.colors.primary,
      fontSize:23,
      margin:'0 auto'
    }
  },
  dFlex:{
    display:'flex',
    justifyContent:'space-between'
  },
  headItem:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'20px !important',
    color:'black !important'
  },
  rootw:{
    '& p':{
      color:theme.colors.mainTextColor
    }
  },
  dateIem:{
    display:'flex',
    alignItems:'center',
    color:theme.colors.mainTextColor,
    '& svg':{
      fontSize: '15px !important',
      marginRight: '6px',
      color: '#4b4b4b',
      marginTop: '-3px'
    }
  },
  boxShadow:{
    boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 8px !important',
  }
}));

export default useStyle;
