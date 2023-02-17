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
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import { useNavigate } from "react-router-dom";
import ViewIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/ModeEdit';


const ProjectList: React.FC<IProjectListProps> = ({}) => {
  const [data, setData] = useState([]);
  const classes = useStyles();


  const navigate = useNavigate();

  const showProjectDetails=(id)=>{
    navigate(`${PATH_NAMES.PROJECT_DETAILSLink}/${id}`); 
  }

  const editProjectDetails=(id)=>{
    navigate(`${PATH_NAMES.AddProjectCraftsman}/${id}`); 
  }
  const columns: GridColDef[] = [
    {
      field: "projectName",
      headerName: "Project name",
      description: "Project Name ",
      sortable: false,
      width: 160
    },

    {
      field: "Status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <BasicTimeline data={params.row.projectDetails}/>
      ),
    },
    {
      field: "Electrician",
      headerName: "Electrician",
      width: 120,
      renderCell: (params) => (
        <div> test</div>
      ),
    },
    {
      field: "Plumber",
      headerName: "Plumber",
      width: 120,
      renderCell: (params) => (
        <div> test 02</div>
      ),
    },
    {
      field: "Builder",
      headerName: "Builder",
      width: 120,
      renderCell: (params) => (
        <div> test 02</div>
      ),
    },
    {
      field: "Tiler",
      headerName: "Tiler",
      width: 120,
      renderCell: (params) => (
        <div> test 02</div>
      ),
    },
    {
      field: "carpenter",
      headerName: "carpenter",
      width: 120,
      renderCell: (params) => (
        <div> test 02</div>
      ),
    },
    {
      field: "hous painter",
      headerName: "hous painter",
      width: 120,
      renderCell: (params) => (
        <div> test 02</div>
      ),
    },
   
    {
      field: "action",
      headerName: "Actions",
      filterable: false,
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
        <div className={classes.tableICon}  onClick={()=>showProjectDetails(params.row.id)}>
        <ViewIcon className={classes.viewICon} /> view
      </div>
       <div className={classes.tableICon} onClick={()=>editProjectDetails(params.row.id)}>
       <EditIcon className={classes.editIcon}  /> edit 
     </div>
     </>
      ),
    },
  ];
  useEffect(() => {
    axios.get(`/Constructor/GetProjectList`).then((result) => {
      setData(result.data);
      console.log(result.data);
    });
  }, []);

  const goToProjectList=()=>{
    navigate(PATH_NAMES.PROJECT);
  }

  return (
    <div>
      <div>
        <BreadCrump current={"ProjectList"} linkList={[]} />
      </div>

      <div>
        <div className={classes.fullWidth}>
        <CustomButton className={classes.addProjectBtn} onClick={goToProjectList} text={"add new project"} />
        </div>
        
        <div>
          <CustomDataGrid rows={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};
export default ProjectList;