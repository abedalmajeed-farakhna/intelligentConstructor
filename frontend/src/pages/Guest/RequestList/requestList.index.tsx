import React, { useEffect, useState } from "react";
import { IRequestListProps } from "./requestList.type";
import { GridColDef } from '@mui/x-data-grid';
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import axios from "axios";
import useStyles from "./requestList.style";
import {format} from 'date-fns';


const columns: GridColDef[] = [
  { field: 'toProfileImage', headerName: 'profileImage', width: 190 },
  { field: 'toFullName', headerName: 'Full Name', width: 190 },
  {
    field: 'fromeDate',
    headerName: 'Frome',
    type: 'date',
    width: 190,
    renderCell:(params) => ( format(new Date(params.row.fromeDate), 'yyyy-MM-dd')),
  },
  {
    field: 'toDate',
    headerName: 'To',
    type: 'date',
    width: 190,
    renderCell:(params) => ( format(new Date(params.row.toDate), 'yyyy-MM-dd')),
  },
  { field: 'requestDescription', headerName: 'Description', width: 130 },
  { field: 'requestStatus', headerName: 'Status ', width: 190 },
  { field: 'action', headerName: 'Action ', width: 190 },
];


const RequestList: React.FC<IRequestListProps> = ({  }) => {
const classes = useStyles();
const [data, setdata] = useState<any>([]);
useEffect(()=>{

  
  axios.get(`/Project/GetGuestRequestList?`)
  .then(result=>{
    
      setdata(result.data)
  })
},[]);
console.log(data,"data")
//if(data?.fromUserId != null ) return (<> trs</>)

  return (
    <div className={classes.root}>
    <CustomDataGrid
      rows={data}
      columns={columns}

    />
  </div>
  );
};
export default RequestList;