import React, { useEffect } from "react";

import Loading from "../../../../CoreComponents/Loading/loading.index";
import axios from "axios";
import Widget from "../../../../CoreComponents/Widget/widget.index";
import { ProjectStatusEnum } from "../../../../../enums/projectStatusEnum";
import { INumberOfRequestesProps } from "./numberOfRequestes.type";
import useStyles from "./numberOfRequestes.style";

const NumberOfequestes: React.FC<INumberOfRequestesProps> = ({status, icon, title, isSentRequests}) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const url = isSentRequests? `/UserSettings/GetNumberOfSentRequest?projectStatus=`
    :`/UserSettings/GetNumberOfRecivedRequest?projectStatus=`;
    axios
      .get(
        `${url}${status}`
      )
      .then((res) => {
        console.log(res, "res");
        setCount(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return <Widget title={title}><>{count}<div >{icon}</div></></Widget>;
};
export default NumberOfequestes;
