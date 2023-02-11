import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import useStyles from "./addProjectCraftsmanPage.style";
import AddNewProjectSection from "../../../../components/commonComponent/Constuctor/AddNewProjectSection/addNewProjectSection.index";
import BuilderStep from "../../../../components/commonComponent/FormStepper/BuilderStep/builderStep.index";
import { ITimeLineProps } from "../../../../components/commonComponent/FormStepper/formStepper.type";
import { PATH_NAMES } from "../../../../constants/route";
import { addNumberOfDays } from "../../../../utils/DateUtils";
import { getIdFromLocationPath } from "../../../../utils/projectUtils";
import Loading from "../../../../components/CoreComponents/Loading/loading.index";
import { IDataProps } from "./addProjectCraftsmanPage.type";
import { format } from "date-fns";
import { sectorEnum } from "../../../../enums/sectorEnum";
import TilerStep from "../../../../components/commonComponent/FormStepper/TilerStep/tilerStep.index";
import HousePainterStep from "../../../../components/commonComponent/FormStepper/HousePainterStep/housePainterStep.index";
import CarpenterStep from "../../../../components/commonComponent/FormStepper/CarpenterStep/carpenterStep.index";

const AddProjectCraftsmanPage: React.FC<any> = ({}) => {
  const projectId = getIdFromLocationPath();

  const [data, setData] = useState<IDataProps | undefined>(undefined);

  const classes = useStyles();
  const navigate = useNavigate();

  const [fromDate, setFrom] = useState(moment().format("YYYY-MM-DD"));

  const [timeLine, setTimeLine] = React.useState<ITimeLineProps>({
    builder: {
      numberOfDays: 0,
    },
    tiler: {
      numberOfDays: 0,
    },
    housePainter: {
      numberOfDays: 0,
    },
    carpenter: {
      numberOfDays: 0,
    },
  });

  const handleUpdateTimeLine = (val) => {
    setTimeLine(val);
  };

  const onFromChange = (value) => {
    setFrom(value);
  };

  const onHandleSubmit = (values) => {
    console.log("Test,", values);
    console.log("timeLine Test,", timeLine);
    values.startDate = fromDate;

    values.builder = {
      userId: values.builder,
      stratDate: timeLine.builder.startDate,
      endDate: addNumberOfDays(
        timeLine.builder.startDate,
        timeLine.builder.numberOfDays
      ),
    };
    values.tiler = {
      userId: values.tiler,
      stratDate: timeLine.tiler.startDate,
      endDate: addNumberOfDays(
        timeLine.tiler.startDate,
        timeLine.tiler.numberOfDays
      ),
    };
    values.housePainter = {
      userId: values.housePainter,
      stratDate: timeLine.housePainter.startDate,
      endDate: addNumberOfDays(
        timeLine.housePainter.startDate,
        timeLine.housePainter.numberOfDays
      ),
    };
    values.carpenter = {
      userId: values.carpenter,
      stratDate: timeLine.carpenter.startDate,
      endDate: addNumberOfDays(
        timeLine.carpenter.startDate,
        timeLine.carpenter.numberOfDays
      ),
    };
    console.log(values, "values");

    axios.post(`/Constructor/AddNewProject`, values).then((result) => {
      if (result.status == 200) {
        navigate(PATH_NAMES.PROJECT_LIST);
      }
    });
  };

  const values = {
    fromData: moment(),
  };

  useEffect(() => {
    axios
      .get(`/Constructor/GetProjectDetailsById?ProjectId=${projectId}`)
      .then((res) => {
        console.log(res.data, "res test ");
        setData(res.data);
      });
  }, []);

  if (!data) return <Loading />;

  return (
    <div>
      <AddNewProjectSection title={"Project Details"}>
        <div>
          <h3> name :{data.projectName}</h3>

          <h3> startDate:{format(new Date(data.startDate), "yyyy-MM-dd")} </h3>
          <h3> area : {data.space}</h3>
          <h3> region:{data.region.name}</h3>
        </div>
      </AddNewProjectSection>
      <AddNewProjectSection title={"Builder"}>
        <BuilderStep
         timeLine={timeLine}
         handleUpdateTimeLine={handleUpdateTimeLine}
          values={{
            startDate: new Date(data.startDate),
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
          builderDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Builder
          )}
        />
      </AddNewProjectSection>

      <AddNewProjectSection title="Tiler">
        <TilerStep
         timeLine={timeLine}
         handleUpdateTimeLine={handleUpdateTimeLine}
          tilerDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Tiler
          )}
          builderDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Builder
          )}
          values={{
            startDate: new Date(data.startDate),
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
          //  timeLine={timeLine}
          // handleUpdateTimeLine={handleUpdateTimeLine}
        />
      </AddNewProjectSection>

      <AddNewProjectSection title="HousePainterStep">
        <HousePainterStep
         timeLine={timeLine}
         handleUpdateTimeLine={handleUpdateTimeLine}
          previousDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Tiler
          )}
          currentDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.HousePainter
          )}
          values={{
            startDate: new Date(data.startDate),
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
        />
      </AddNewProjectSection>

      <AddNewProjectSection title="CarpenterStep">
        <CarpenterStep
          timeLine={timeLine}
          handleUpdateTimeLine={handleUpdateTimeLine}
          previousDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.HousePainter
          )}
          currentDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Carpenter
          )}
          values={{
            startDate: new Date(data.startDate),
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
        />
      </AddNewProjectSection>
    </div>
  );
};

export default AddProjectCraftsmanPage;
