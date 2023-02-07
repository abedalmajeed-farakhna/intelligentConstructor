import * as React from "react";
import PropTypes from "prop-types";

import { ICustomRatingProps } from "./customRating.type";
import { customIcons } from "./customRating.constants";
import { StyledRating } from "./customRating.style";
import axios from "axios";

const CustomRating: React.FC<ICustomRatingProps> = ({
  id,
  value,
  readOnly,
  disabled,
  classNames
}) => {
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  const handleChange = (event, newValue) => {
    const data = {
      requestId: id,
      rateValue: newValue,
    };
    axios.post(`/Rating/AddOrUpdateRatingDetails`, data).then(() => {
      console.log(data);
    });
  };

  return (
    <StyledRating className={classNames}
      onChange={handleChange}
      name="highlight-selected-only"
      defaultValue={value}
      //value={value}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => value && customIcons[value]?.label}
      highlightSelectedOnly
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};
export default CustomRating;
