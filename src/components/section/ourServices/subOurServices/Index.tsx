import { ourServicesProps } from "../types";
import BasicServicesMonthly from "./monthly/BasicServices";
import BasicServicesYearly from "./yearly/BasicServices";
import PremiumServicesYearly from "./yearly/PremiumServices";
import PremiumServices from "./monthly/PremiumServices";

const SubOurServices = (props: ourServicesProps) => {
  const renderService = () => {
    switch (props.element.type) {
      case "monthly":
        switch (props.element.route) {
          case "basic":
            return <BasicServicesMonthly />;
          case "premium":
            return <PremiumServices />;
        }
        break;
      case "yearly":
        switch (props.element.route) {
          case "basic":
            return <BasicServicesYearly />;
          case "premium":
            return <PremiumServicesYearly />;
        }
    }
  };
  return <>{renderService()}</>;
};

export default SubOurServices;
