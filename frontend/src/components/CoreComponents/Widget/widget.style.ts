import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    padding: 20,
    margin:'0px 10px 20px',
    background:'white'
  },
  title: {
    color:'black',
    textTransform:'capitalize'
  },
  body: {
    color:'black',
    fontWeight:'bold',
    fontSize: '26px',
    lineHeight: '26px',
    marginTop:'10px',
    display:'flex',
    alignItems:'center'
  },
  element: {},
}));

export default useStyle;
