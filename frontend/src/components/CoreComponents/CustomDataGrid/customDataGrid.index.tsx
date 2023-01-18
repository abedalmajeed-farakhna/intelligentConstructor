import { Box } from "@mui/material";
import React from "react";
import { ICustomDataGridProps } from "./customDataGrid.type";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const CustomDataGrid: React.FC<ICustomDataGridProps> = ({ columns,rows}) => {

  
 console.log(rows,"rows")
  
  
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
     // checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>)
};

export default CustomDataGrid;