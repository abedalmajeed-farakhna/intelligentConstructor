import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../../CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../../CoreComponents/CustomLink/customLink.index";
import { IBuilderStepProps } from "./builderStep.type";
import useStyles from "./builderStep.style";
import { sectorEnum } from "../../../../enums/sectorEnum";
import { Field } from "formik";
import classNames from "classnames";

const BuilderStep: React.FC<IBuilderStepProps> = ({ values }) => {
    const classes = useStyles();
    const location = window.location ;
    const locationQiery = location?.href.split("/");
    const [rowsData, setRows] = useState([]);


console.log(values,"values hooon")

const sector =locationQiery[locationQiery.length -1]
   
  
const columns2: GridColDef[] = [


    {field:"",
renderCell:(params)=>(<label className={classNames(classes.radioLabel, values.picked ==params.row.id && classes.checked)} ><Field type="radio" name="picked" value={params.row.id}  className={classes.radioButton}/></label>)},

        { field: "profileImage", headerName: "ProfileImage", width: 70,
        filterable:false,
        sortable:false,
        renderCell: (params) => 
        <div className={classes.imageContainer}><img  className={classes.image} src={`/Upload/${params.row.profileImage}`}/></div>, 
      
      
      
      },
    {
        field: 'username',
        headerName: 'User name',
        description: 'Username ',
        sortable: false,
        width: 160,
        renderCell:(params) => (
          
          <CustomLink path={`/craftsmanInformation/${params.row.id}`} text={params.row.username}/>
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
    },
 

  ];

useEffect(()=>{


        axios.get(`/Constructor/GetTopAvailableCraftsmanInSpecificInterval?sector=${sectorEnum.Builder}&FromDate=${values.fromDate}&ToDate=${values.toDate}`)
        .then(result=>{
            setRows(result.data) 
            console.log(result.data);
        })
    },[]);
    console.log(rowsData,"rowsData")
  return (

    <>
     <div role="group" aria-labelledby="my-radio-group">
          
           
          </div>
          <div role="group" aria-labelledby="my-radio-group02">
        
        <CustomDataGrid columns={columns2} rows={rowsData}/>
   </div>
    </>
   
  );
};
export default BuilderStep;