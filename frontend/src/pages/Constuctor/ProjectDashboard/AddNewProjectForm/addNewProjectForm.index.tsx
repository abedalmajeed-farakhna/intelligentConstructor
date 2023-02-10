import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import moment from "moment";

import useStyles from "./addNewProjectForm.style";
import { validationSchema } from "./addNewProjectForm.utils";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../../../components/CoreComponents/SelectInput/selectInput.index";
import DateInput from "../../../../components/CoreComponents/DateInput/dateInput.index";

import TextInput from "../../../../components/CoreComponents/TextInput/textInput.index";
import BreadCrump from "../../../../components/CoreComponents/BreadCrump/breadCrump.index";
import { PATH_NAMES } from "../../../../constants/route";
import CustomButton from "../../../../components/CoreComponents/CustomButton/customButton.index";
import Loading from "../../../../components/CoreComponents/Loading/loading.index";
import ErrorMessage from "../../../../components/CoreComponents/Alerts/Error/errorMessage.index";
import { IRegionProps } from "../../../../types/types";

const AddNewProjectForm: React.FC<any> = ({}) => {
  const classes = useStyles();


  
  const [initialValues, setInitialValues] = useState({
    projectName: "",
    space: 0,
    fromDate: moment(),
    regionId:0
  });
  const navigate = useNavigate();

  const [regionList, setRegionList] = useState<IRegionProps[]>([]);
  const [error, setError] = useState<string>("");
  const [fromDate, setFrom] = useState(moment().format("YYYY-MM-DD"));

  const onFromChange = (value) => {
    setFrom(value);
  };

  const onHandleSubmit = (values) => {
    console.log("values")
    values.startDate = fromDate;
    values.regionId = Number(values.regionId);

    axios.post(`/Constructor/AddNewProject`, values).then((result) => {
      navigate(`${PATH_NAMES.AddProjectCraftsman}/${result.data}`);
      console.log(result,"result")
      /* if (result.status == 200) {
       
      }*/
    })
    .catch(error => {
      console.error('There was an error!', error);
      setError(error.response.data);
  })

  };
  const onAreaKeyUp =(val)=>{
    if(error){
      setError("")
    }
  }
  const getRegionList = () => {
    axios.get(`/Region/GetRegionList`).then((res) => {
      setRegionList(res.data);
      setInitialValues({ ...initialValues, regionId: res.data[0].id });
    });
  };
  useEffect(() => {
    getRegionList();

  }, []);


  if (regionList.length == 0) return <Loading />;
  return (
    <div>

      <Formik
        initialValues={initialValues}
          validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onHandleSubmit(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <TextInput
              name="projectName"
              placeholder="project Name"
              type="string"
              error={touched.projectName && errors.projectName}
              label="project Name"
            />

            <SelectInput
              label="Region"
              name={"regionId"}
              options={regionList}
              keyName={"id"}
            />
            <TextInput
             onKeyUp={onAreaKeyUp}
              name="space"
              placeholder="Area"
              type="number"
              label="Area"
              error={touched.space && errors.space}
            />

            <DateInput
              defaultValue={moment().format("YYYY-MM-DD")}
              label={"Start Date"}
              name={"from"}
              onChange={(val) => onFromChange(val)}
            />
            <div>
               <CustomButton  text={"Add New Project"}  />
               <ErrorMessage error={error}/>
            </div>
              

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewProjectForm;