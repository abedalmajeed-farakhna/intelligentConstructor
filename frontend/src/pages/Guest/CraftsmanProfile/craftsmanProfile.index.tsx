import axios from "axios";
import React, { useEffect, useState } from "react";
import SendRequestPopup from "../../../components/commonComponent/Guest/SendRequestPopup/sendRequestPopup.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import useStyles from "./craftsmanProfile.style";
import CustomRating from "../../../components/CoreComponents/CustomRating/customRating.index";
import Loading from "../../../components/CoreComponents/Loading/loading.index";
import { showSuccessPopup } from "../../../utils/projectUtils";
import BreadCrump from "../../../components/CoreComponents/BreadCrump/breadCrump.index";
import { PATH_NAMES } from "../../../constants/route";

const CraftsmanProfile: React.FC<any> = ({ children }) => {
  const location = window.location;
  const locationQiery = location?.href.split("/");
  const classes = useStyles();
  const userId = locationQiery[locationQiery.length - 1];

  const [data, setdata] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(location);
    axios
      .get(`/Craftsman/GetCraftsmanInformationById?Id=${userId}`)
      .then((result) => {
        setdata(result.data);
      });
  }, []);

  const handleOnClose = (showAlertPopup) => {
    setIsOpen(false);
    showAlertPopup && showSuccessPopup();
  };

  const handleClick = () => {
    setIsOpen(true);
    /*axios.post(`/Project/SendRequest `, data).then((res) => {



  }
  )

*/
  };

  if (!data?.fullName) return <Loading/>;
  return (
    <>
              <BreadCrump current={"Craftsman information"} linkList={[{name:"Craftsman list",link:PATH_NAMES.CRAFTSMAN}]}/>

      {isOpen && (
        <SendRequestPopup
          isOpen={isOpen}
          onClose={(showAlertPopup) => handleOnClose(showAlertPopup)}
          userId={userId}
        />
      )}
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          {
            <img
              className={classes.image}
              src={`/Upload/${data?.profileImage}`}
              alt="ProfileImage"
            />
          }
        </div>
        <div>
          {" "}
          <CustomRating value={data.ratingValue} readOnly={true} />
        </div>
        <div className={classes.fullName}> {data.fullName}</div>
        <div className={classes.userName}> {data.userName}</div>
        <div>phoneNumber: {data.phoneNumber}</div>
        <div>note:{data.note}</div>
        <div>speed: {data.speed}</div>

        <CustomButton text={"Send requist"} onClick={handleClick} />
      </div>
    </>
  );
};
export default CraftsmanProfile;