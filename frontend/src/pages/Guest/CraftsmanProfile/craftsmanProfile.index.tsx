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
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from '@mui/icons-material/MailOutline';
import TimeICon from '@mui/icons-material/QueryBuilder';
import { Class } from "@mui/icons-material";
import ImageGallery from "../../../components/commonComponent/Craftsman/ImageGallery/imageGallery.index";
import ProfileImage from "../../../components/CoreComponents/ProfileImage/profileImage.index";

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

  if (!data?.fullName) return <Loading />;
  return (
    <>
      <BreadCrump
        current={"Craftsman information"}
        linkList={[{ name: "Craftsman list", link: PATH_NAMES.CRAFTSMAN }]}
      />

      <Grid container className={classes.container}>
        <Grid item xs={4} className={classes.col}>
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
                <ProfileImage path={data?.profileImage} className={classes.image}/>
               
              }
            </div>
            <div className={classes.ratingBlock}>
              <CustomRating value={data.ratingValue} readOnly={true} classNames={classes.customRating}/>
            </div>
            <div className={classes.fullName}> {data.fullName}</div>
            <div className={classes.contactInfo}>
              <div className={classes.contactItem}> 
              <EmailIcon className={classes.contactIcon}/>
              {data.userName}
              </div>
              <div className={classes.contactItem}><PhoneIcon className={classes.contactIcon}/>{data.phoneNumber}</div>
              <div className={classes.contactItem}><TimeICon className={classes.contactIcon} />{data.speed} m/day</div>
            </div>
            <div className={classes.userIntro}>{data.note} </div>

            <CustomButton text={"Send requist"} onClick={handleClick} />
          </div>
        </Grid>
        <Grid item xs={8} className={classes.col}>
        <ImageGallery  isEditable={false} userId={userId}  />

        </Grid>
      </Grid>
    </>
  );
};
export default CraftsmanProfile;
