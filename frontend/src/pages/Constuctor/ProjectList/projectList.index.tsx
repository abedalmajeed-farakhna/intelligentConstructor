import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTimeline from "../../../components/CoreComponents/BasicTimeline/basicTimeline.index";
import CustomDataGrid from "../../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../../components/CoreComponents/CustomLink/customLink.index";
import { PATH_NAMES } from "../../../constants/route";
import { IProjectListProps } from "./projectList.type";
import useStyles from "./projectList.style";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";

const ProjectList: React.FC<IProjectListProps> = ({}) => {
  const [data, setData] = useState([]);
  const classes = useStyles();


  const columns: GridColDef[] = [
    {
      field: "projectName",
      headerName: "Project name",
      description: "Project Name ",
      sortable: false,
      width: 160,
      
      renderCell: (params) => (

        <CustomLink path={`${PATH_NAMES.PROJECT_DETAILSLink}/${params.row.id}`} text={params.row.projectName}

        /> 
      ),
    },

    {
      field: "",
      headerName: "Progress",
      width: 150,
      renderCell: (params) => (
        <BasicTimeline data={params.row.projectDetails}/>
      ),
    }
  ];
  useEffect(() => {
    axios.get(`/Constructor/GetProjectList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);

  console.log(data, "rowsData");
  return (
    <div>  

    <div>  
    
    <BreadCrump current={"ProjectList"} linkList={[]}/>

     </div>
     
    <div>    
<CustomLink path={PATH_NAMES.PROJECT} text={"add new project"} /> 
    <div>
      <CustomDataGrid rows={data} columns={columns} />
    </div>
    </div>

    </div>
  );
};
export default ProjectList;