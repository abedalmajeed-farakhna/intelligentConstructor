import { Box, CssBaseline, Toolbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GuestSidebar from "../../../components/commonComponent/Guest/Sidebar/guestSidebar.index";
import useStyles from "./craftsmanProfile.style";

const CraftsmanProfile: React.FC<any> = ({ children }) => {
  const location = window.location ;
  const locationQiery = location?.href.split("/");
  const classes = useStyles();
  const Id =locationQiery[locationQiery.length -1]

  const [data, setdata] = useState<any>(null);


  useEffect(()=>{

    console.log( location);
    axios.get(`/Craftsman/GetCraftsmanInformationById?Id=${Id}`)
    .then(result=>{
      
        setdata(result.data)
    })
},[]);


if(!data?.fullName) return <> loading</>
return (
  
<div className={classes.root}>
  <div className={classes.imageContainer}>{<img  className={classes.image}  src={`/Upload/${data?.profileImage}`} alt="ProfileImage"/>}</div>
  <div className={classes.fullName}> {data.fullName}</div>
  <div className={classes.userName}> {data.userName}</div>
  <div>phoneNumber: {data.phoneNumber}</div>
  <div >note:{data.note}</div>
  <div>speed: {data.speed}</div>
  
</div>
  );
};
export default CraftsmanProfile;
