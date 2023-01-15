import { Button, Grid } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../constants/route";




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
        width: 160,
        renderCell:(params) => (
          
          <CustomLink path={`/craftsmanInformation/${params.row.id}`} text={params.row.userName}/>
      ),

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
      renderCell:(params) => (
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
          >
            {params.row.speed}
          </Button>
      ),
     

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


