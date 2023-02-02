import axios from "axios";
import React, { useEffect, useState } from "react";
import SendRequestPopup from "../../../components/commonComponent/Guest/SendRequestPopup/sendRequestPopup.index";
import AlertDialog from "../../../components/CoreComponents/AlertDialog/alertDialog.index";
import CustomButton from "../../../components/CoreComponents/CustomButton/customButton.index";
import useStyles from "./craftsmanProfile.style";
import Swal from 'sweetalert2'

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
    showAlertPopup &&  Swal.fire({
      title: "Done",
      icon: 'success',
      timerProgressBar:true,
      confirmButtonColor:"red"
    });
  };


  const handleClick = () => {
    setIsOpen(true);
    /*axios.post(`/Project/SendRequest `, data).then((res) => {



  }
  )

*/
  };

  if (!data?.fullName) return <> loading</>;
  return (
    <>
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