import { Class } from "@mui/icons-material";
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
import useStyles from "./craftsmanBySector.style";

const CraftsmanBySector: React.FC<any> = ({ children }) => {
  const location = window.location;
  const classes = useStyles();

  const locationQiery = location?.href.split("/");
  const [rowsData, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const sector = locationQiery[locationQiery.length - 1];

  const columns2: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Full name",
      sortable: false,
      width: 265,
      renderCell: (params) => (
        <CustomLink className={classes.link}
          path={`/craftsmanInformation/${params.row.id}`}
          text={params.row.fullName}
        />
      ),
    },

    {
      field: "regionName",
      headerName: "Region Name",
      width: 265,
    },
    {
      field: "speed",
      headerName: "speed",
      width: 265,
    },
    {
      field:"ratingValue",
      headerName:"Rating",
      width:265,
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
