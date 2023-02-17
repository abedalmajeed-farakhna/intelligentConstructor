import { ThemeOptions } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme: ThemeOptions) => ({
  root: {

  },
  container:{
    position:"relative",
  },
  addProjectBtn:{
    display:'flex',
    maxWidth: 'fit-content',
    padding: '8px 15px !important',
    marginBottom: '25px !important',
  },
  fullWidth:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    fontSize:'15px',
    marginRight:'2px'
  }
},
viewICon:{
  color:theme.colors.doneColor
},
editIcon:{
  color:theme.colors.primary
}
}));

export default useStyle;
