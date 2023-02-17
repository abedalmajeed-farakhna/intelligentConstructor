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
import { dataInitialValue, IDataProps } from "./addProjectCraftsmanPage.type";
import { format } from "date-fns";
import { sectorEnum } from "../../../../enums/sectorEnum";
import TilerStep from "../../../../components/commonComponent/FormStepper/TilerStep/tilerStep.index";
import HousePainterStep from "../../../../components/commonComponent/FormStepper/HousePainterStep/housePainterStep.index";
import CarpenterStep from "../../../../components/commonComponent/FormStepper/CarpenterStep/carpenterStep.index";
import { timeLineInitialValue } from "./addProjectCraftsmanPage.const";
import ElectricianStep from "../../../../components/commonComponent/FormStepper/ElectricianStep/electricianStep.index";
import PlumberStep from "../../../../components/commonComponent/FormStepper/PlumberStep/plumberStep.index";

const AddProjectCraftsmanPage: React.FC<any> = ({}) => {
  const classes = useStyles();

  const projectId = getIdFromLocationPath();

  const [data, setData] = useState<IDataProps>(dataInitialValue);
  const [timeLine, setTimeLine] =
    React.useState<ITimeLineProps>(timeLineInitialValue);

  const handleUpdateTimeLine = (val) => {
    console.log(val, "val:handleUpdateTimeLine");
    setTimeLine(val);
  };

  useEffect(() => {
    axios
      .get(`/Constructor/GetProjectDetailsById?ProjectId=${projectId}`)
      .then((res) => {
        setData(res.data);
        setTimeLine({
          ...timeLine,
          builder: { ...timeLine.builder, startDate: res.data.startDate },
        });
      });
  }, []);

  if (!data.projectName) return <Loading />;

  console.log(timeLine, "timeLine");
  return (
    <div>
      <AddNewProjectSection  title={"Project Details"}>
        <div className={classes.projectDetailss}>
          <div className={classes.projectDetailsItem}> Project Name: <span>{data.projectName}</span></div>
          <div className={classes.projectDetailsItem}> startDate: <span>{format(new Date(data.startDate), "yyyy-MM-dd")}</span> </div>
          <div className={classes.projectDetailsItem}> area: <span>{data.space}</span></div>
          <div className={classes.projectDetailsItem}> region: <span>{data.region.name}</span></div>
        </div>
      </AddNewProjectSection>
      
      <AddNewProjectSection title={"Electrician"}>
        <ElectricianStep
          values={{
            //startDate: timeLine.builder.startDate ,
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
          currentDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Electrician
          )}
        />
      </AddNewProjectSection>
      
      <AddNewProjectSection title={"Plumber"}>
        <PlumberStep
          values={{
            //startDate: timeLine.builder.startDate ,
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
          currentDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Plumber
          )}
        />
      </AddNewProjectSection>

      <AddNewProjectSection title={"Builder"}>
        <BuilderStep
          timeLine={timeLine}
          handleUpdateTimeLine={handleUpdateTimeLine}
          values={{
            startDate: timeLine.builder.startDate,
            area: data.space,
            regionId: data.region.id,
            projectId: projectId,
          }}
          builderDetails={data.craftsmans.find(
            (t) => t.sector == sectorEnum.Builder
          )}
        />
      </AddNewProjectSection>
      {timeLine.builder.startDate && (
        <AddNewProjectSection title="Tiler">
          <TilerStep
            timeLine={timeLine}
            handleUpdateTimeLine={handleUpdateTimeLine}
            currentDetails={data.craftsmans.find(
              (t) => t.sector == sectorEnum.Tiler
            )}
            previousDetails={data.craftsmans.find(
              (t) => t.sector == sectorEnum.Builder
            )}
            values={{
              startDate: new Date(
                addNumberOfDays(
                  timeLine.builder.startDate,
                  timeLine.builder.numberOfDays
                )
              ),
              area: data.space,
              regionId: data.region.id,
              projectId: projectId,
            }}
            //  timeLine={timeLine}
            // handleUpdateTimeLine={handleUpdateTimeLine}
          />
        </AddNewProjectSection>
      )}

      {timeLine.tiler.startDate && (
        <AddNewProjectSection title="House Painter">
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
              startDate: new Date(
                addNumberOfDays(
                  timeLine.tiler.startDate,
                  timeLine.tiler.numberOfDays
                )
              ),
              area: data.space,
              regionId: data.region.id,
              projectId: projectId,
            }}
          />
        </AddNewProjectSection>
      )}

      {timeLine.housePainter.startDate && (
        <AddNewProjectSection title="Carpenter Step">
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
              startDate: new Date(
                addNumberOfDays(
                  timeLine.housePainter.startDate,
                  timeLine.housePainter.numberOfDays
                )
              ),
              area: data.space,
              regionId: data.region.id,
              projectId: projectId,
            }}
          />
        </AddNewProjectSection>
      )}
    </div>
  );
};

export default AddProjectCraftsmanPage;
