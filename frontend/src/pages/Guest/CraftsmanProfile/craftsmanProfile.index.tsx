import { Box, CssBaseline, Toolbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SendRequestPopup from "../../../components/commonComponent/Guest/SendRequestPopup/sendRequestPopup.index";
import GuestSidebar from "../../../components/commonComponent/Guest/Sidebar/guestSidebar.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import FormDialog from "../../../components/CoreComponents/FormDialog/formDialog.index";
import useStyles from "./craftsmanProfile.style";

const CraftsmanProfile: React.FC<any> = ({ children }) => {
  const location = window.location ;
  const locationQiery = location?.href.split("/");
  const classes = useStyles();
  const userId =locationQiery[locationQiery.length -1]

  const [data, setdata] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);


  useEffect(()=>{

    console.log( location);
    axios.get(`/Craftsman/GetCraftsmanInformationById?Id=${userId}`)
    .then(result=>{
      
        setdata(result.data)
    })
},[]);
   
const handleOnClose =()=>{
  setIsOpen(false)
}
const handleClick=()=>{
  setIsOpen(true)
  /*axios.post(`/Project/SendRequest `, data).then((res) => {



  }
  )

*/
}
  
if(!data?.fullName) return <> loading</>
return (
  <>
    {isOpen && <SendRequestPopup 
    isOpen={isOpen}
     onClose={handleOnClose} 
     userId={userId}/>}
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        {
          <img
            className={classes.image}
            src={`/Upload/${data?.profileImage}`}
            alt="ProfileImage"
          />
        }
      </div>
      <div className={classes.fullName}> {data.fullName}</div>
      <div className={classes.userName}> {data.userName}</div>
      <div>phoneNumber: {data.phoneNumber}</div>
      <div>note:{data.note}</div>
      <div>speed: {data.speed}</div>

      <CustomButton text={"Send requist"} onClick={handleClick} />
    </div>
  </>
);
};
export default CraftsmanProfile;
