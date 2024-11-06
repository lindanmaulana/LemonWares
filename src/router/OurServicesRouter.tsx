import { useRoutes } from "react-router-dom";
import BasicServices from "../components/section/ourServices/subOurServices/monthly/BasicServices";
import PremiumServices from "../components/section/ourServices/subOurServices/monthly/PremiumServices";

const OurServicesRouter = () => {
  const router = useRoutes([
    {
      path: "",
      children: [
        {
          path: "",
          element: <BasicServices />,
        },
        {
          path: "premium",
          element: <PremiumServices />,
        },
      ],
    },
    {
      path: "yearly",
      element: <PremiumServices />,
    },
  ]);
  return router;
};

export default OurServicesRouter;
