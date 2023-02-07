import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { ICustomDataGridProps } from "./customDataGrid.type";
import useStyles from "./customDataGrid.style";


const CustomDataGrid: React.FC<ICustomDataGridProps> = ({ columns, rows }) => {
  const classes = useStyles();

  return (
    <Box sx={{ height: 400, width: "100%" }} >
      <DataGrid 
      className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default CustomDataGrid;
