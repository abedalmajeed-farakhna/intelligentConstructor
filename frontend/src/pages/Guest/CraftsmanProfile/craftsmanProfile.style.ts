import { ImportantDevices } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/material";


const useStyle = makeStyles((theme:ThemeOptions) => ({

    root :{
      textAlign: "center",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:"5px",
      padding:"20px",
      background: "white",
      flexDirection:"column",
      position:"relative"
    //borderRadius: "50%",
    },
    customRating:{
      display: 'flex',
      flexDirection: 'column',
      '& span:not(:last-child)':{
        marginBottom:5
      }
    },
    container:{
      margin:"0px -10px",
    },
    col:{
      padding:"0px 10px"
    },
    imageContainer:{  
        overflow: "hidden",
        width: 150,
        height: 150,
        borderRadius: "50%" ,
        margin: "auto",
        border:`6px solid ${theme.colors.primary}`,
        marginBottom:'20px',
    },
    image:{    
      maxWidth: "100%",
    },
    ratingBlock:{
      position: "absolute",
      right: "-22px",
      background: theme.colors.gray1,
      padding: "8px",
      borderRadius: "5px",
      top: "30px",
      border: `1px solid ${theme.colors.borderColor}`,
    },
    fullName:{
      fontWeight: "bold",
      marginBottom: "5px",
      marginTop: "30px",

    },
    contactInfo:{
      display:"flex",
      flexDirection:"column"
    },
    contactItem:{
      display:"flex",
      alignItems:"center",
      marginBottom:"10px"
    },
    contactIcon:{
      fontSize: "16px !important",
      color: `${theme.colors.primary}`,
      marginRight: "5px",
    },
    userIntro:{
      color:`${theme.colors.gray3}`,
      margin:'15px 0px',
    }

}));

export default useStyle;
