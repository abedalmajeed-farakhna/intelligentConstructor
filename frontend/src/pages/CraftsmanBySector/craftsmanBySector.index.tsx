import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";




const CraftsmanBySector: React.FC<any> = ({ children }) => {

    const location = window.location ;
    const locationQiery = location?.href.split("/")

const sector =locationQiery[locationQiery.length -1]
    useEffect(()=>{


        axios.get(`/Craftsman/GetCraftsmanbYSector?sector=${sector}`).then(t=>{
            console.log(t);
        })
    },[]);
  return (
    <div>
bghnjkxl,ghjkml;,'gf hjkl,;'
    </div>
    
  );
};
export default CraftsmanBySector;


