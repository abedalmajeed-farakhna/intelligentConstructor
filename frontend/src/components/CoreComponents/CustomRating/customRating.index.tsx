import * as React from "react";
import PropTypes from "prop-types";

import { ICustomRatingProps } from "./customRating.type";
import { customIcons } from "./customRating.constants";
import { StyledRating } from "./customRating.style";
import axios from "axios";

const CustomRating: React.FC<ICustomRatingProps> = ({id}) => {
 
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
   
  };


  const handleChange =(event, newValue)=>{
    alert(newValue);

   const  data ={
    requestId: id,
    rateValue: newValue
    }
    axios.post(`/Rating/AddOrUpdateRatingDetails`, data).then(() => {
      console.log(data);
    });
  } 
  
  return (
    <StyledRating
      onChange={handleChange}
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
};
export default CustomRating;
