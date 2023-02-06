import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BreadCrump from "../../components/CoreComponents/BreadCrump/breadCrump.index";
import CustomDataGrid from "../../components/CoreComponents/CustomDataGrid/customDataGrid.index";
import CustomLink from "../../components/CoreComponents/CustomLink/customLink.index";
import CustomRating from "../../components/CoreComponents/CustomRating/customRating.index";
import Loading from "../../components/CoreComponents/Loading/loading.index";
import { PATH_NAMES } from "../../constants/route";
import { getSectorEnumDescriptions } from "../../utils/enumDescriptions";

const CraftsmanBySector: React.FC<any> = ({ children }) => {
  const location = window.location;
  const locationQiery = location?.href.split("/");
  const [rowsData, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const sector = locationQiery[locationQiery.length - 1];

  const columns2: GridColDef[] = [
    {
      field: "userName",
      headerName: "User name",
      description: "Username ",
      sortable: false,
      width: 180,
      renderCell: (params) => (
        <CustomLink
          path={`/craftsmanInformation/${params.row.id}`}
          text={params.row.userName}
        />
      ),
    },

    {
      field: "fullName",
      headerName: "full name",
      width: 150,
    },

    {
      field: "regionName",
      headerName: "Region Name",
      width: 150,
    },
    {
      field: "speed",
      headerName: "speed",
      width: 150,
    },
    {
      field:"ratingValue",
      headerName:"Rating",
      width:150,
      renderCell: (params) => ( <CustomRating value={params.row.ratingValue} readOnly={true} />)
    }
  ];

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/Craftsman/GetCraftsmanBySector?sector=${sector}`)
      .then((result) => {
        setLoading(false);
        setRows(result.data);
      });
  }, []);
  if (loading) return <Loading />;
  return (
    <div>

    <BreadCrump current={getSectorEnumDescriptions(parseInt(sector))} linkList={[{name:"Craftsman list",link:PATH_NAMES.CRAFTSMAN}]}/>

    <div>
      <CustomDataGrid columns={columns2} rows={rowsData} />
    </div>
    </div>

  );
};
export default CraftsmanBySector;
