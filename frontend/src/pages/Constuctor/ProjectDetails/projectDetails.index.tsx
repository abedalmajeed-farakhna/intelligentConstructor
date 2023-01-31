import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicCard from "../../../components/CoreComponents/BasicCard/basicCard.index";
import { IProjectDetailsProps } from "./projectDetails.type";
import { PieChart } from 'react-minimal-pie-chart';

const ProjectDetails: React.FC<IProjectDetailsProps> = ({  }) => {
  const [data, setData] = useState([]);
  const location = window.location ;
  const locationQiery = location?.href.split("/");
  const [rowsData, setRows] = useState([]);




const id =locationQiery[locationQiery.length -1]

useEffect(() => {
  axios.get(`/Constructor/GetProjectList?id=${id}`).then((result) => {
    setData(result.data);
    console.log(result.data);
  });
}, []);


  return (
    <div>

   <div>
     <BasicCard title={"Builder"} name={"abed"} status={"inProgres"} expectedStart={new Date('1/2/2023')} expectedEnd={new Date('1/2/2023')}/>
     </div>

        <div>
      <BasicCard title={"Tiler"} name={"sameer"} status={"inProgres"} expectedStart={new Date('1/2/2023')} expectedEnd={new Date('1/2/2023')}/>
        </div>

        <div>
     <BasicCard title={"HouseBainter"} name={"mohammed"} status={"inProgres"} expectedStart={new Date('1/2/2023')} expectedEnd={new Date('1/2/2023')}/>
        </div>
        
        <div>
     <BasicCard title={"Carpenter"} name={"mahmoud"} status={"inProgres"} expectedStart={new Date('1/2/2023')} expectedEnd={new Date('1/2/2023')}/>
        </div>
   </div>

  );
};
export default ProjectDetails;