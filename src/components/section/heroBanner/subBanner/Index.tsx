import { heroBannerProps } from "../types";
import DomainServices from "./DomainServices";
import EmailServices from "./EmailServices";
import HostingServices from "./HostingServices";
import SeoServices from "./SeoServices";

const SubBanner = (props: heroBannerProps) => {
  const renderService = () => {
    switch (props.element.route) {
      case "hosting":
        return <HostingServices />;
      case "domain":
        return <DomainServices />;
      case "seo":
        return <SeoServices />;
      case "email":
        return <EmailServices />;
    }
  };
  return <>{renderService()}</>;
};

export default SubBanner;
