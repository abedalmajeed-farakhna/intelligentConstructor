import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

  },icon:{
    marginRight:3
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
}));

export default useStyle;
