import { ImportantDevices } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({

    root :{
      textAlign: "center",
     
      
    //borderRadius: "50%",
    }    ,
    imageContainer:{  
        overflow: "hidden",
        width: 170,
        height: 170,
        borderRadius: "50%" ,
        margin: "auto",
        

    },

    image:{    
      maxWidth: "100%",
    },
    fullName:{
      fontWeight: "bold",
      marginBottom: "5px",
      marginTop: "30px",

    },
    userName:{
      marginBottom: "30px",
      

    },


}));

export default useStyle;
