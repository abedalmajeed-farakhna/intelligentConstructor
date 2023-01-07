import React from "react";
import axios from "axios";
const Logout: React.FC<any> = ({ children }) => {
  axios.post(`/Account/SignOut`).then((res) => {
    localStorage.clear();
  });
  return children;
};
export default Logout;
