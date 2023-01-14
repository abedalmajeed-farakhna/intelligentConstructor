import { Grid } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../components/CoreComponents/CustomDataGrid/customDataGrid.index";




const CraftsmanBySector: React.FC<any> = ({ children }) => {

    const location = window.location ;
    const locationQiery = location?.href.split("/");
    const [rowsData, setRows] = useState([]);




const sector =locationQiery[locationQiery.length -1]
   
  
const columns2: GridColDef[] = [
    
    {
        field: 'userName',
        headerName: 'User name',
        description: 'Username ',
        sortable: false,
        width: 160
      },

    {
      field: 'fullName',
      headerName: 'full name',
      width: 150,
      
    },
    {
      field: 'speed',
      headerName: 'speed',
      width: 150,
      
    },
 

  ];

useEffect(()=>{


        axios.get(`/Craftsman/GetCraftsmanbYSector?sector=${sector}`)
        .then(result=>{
            setRows(result.data) 
            console.log(result.data);
        })
    },[]);
    console.log(rowsData,"rowsData")
  return (
    <div>
        <CustomDataGrid columns={columns2} rows={rowsData}/>
    </div>
    
  );
};
export default CraftsmanBySector;


