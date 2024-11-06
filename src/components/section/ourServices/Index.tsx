import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRouteOurServices } from "../../../redux/slices/ourServicesFeatures";
import { AppDispatch, RootState } from "../../../redux/store/store";
import SubOurServices from "./subOurServices/Index";

const OurServices = () => {
  const [isActive, setIsActive] = useState<{
    type: string;
    route: string;
  }>({
    type: "monthly",
    route: "basic",
  });
  const selector = useSelector((state: RootState) => state.ourServices);
  const dispatch = useDispatch<AppDispatch>();

  const [type, setType] = useState<boolean>(false);

  const handleType = () => {
    setType((type) => !type);
    if (type) {
      setIsActive({ ...isActive, type: "monthly" });
      dispatch(handleRouteOurServices({ ...isActive, type: "monthly" }));
    } else {
      setIsActive({ ...isActive, type: "yearly" });
      dispatch(handleRouteOurServices({ ...isActive, type: "yearly" }));
    }
  };

  const handleRoute = (route: string) => {
    console.log({ isActive });
    setIsActive({ ...isActive, route });
    dispatch(handleRouteOurServices({ ...isActive, route }));
  };

  return (
    <section className="py-[66px]">
      <div className="container max-w-6xl">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <h2 className="text-5xl font-semibold text-[#000000] mb-8">
            Ready to get started with Lemon Wares?
          </h2>
          <p className="text-2xl text-[#000000] mb-12">
            Choose the package that suits you
          </p>
          <div className="flex items-center justify-center mb-10 gap-7">
            <h4>Monthly</h4>
            <button
              onClick={() => handleType()}
              className={`flex items-center ${
                type ? "justify-end" : "justify-start"
              } w-16 px-1 rounded-full h-9 bg-primary`}
            >
              <span className="block w-6 h-6 rounded-full bg-third"></span>
            </button>
            <h4>Yearly</h4>
          </div>
          <div className="grid grid-cols-2 items-center text-xl font-semibold  text-[#000000]">
            <button
              onClick={() => handleRoute("basic")}
              className={`border-b-2 ${
                isActive.route === "basic" ? "border-primary" : ""
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => handleRoute("premium")}
              className={`border-b-2 ${
                isActive.route === "premium" ? "border-primary" : ""
              }`}
            >
              Premium
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-24">
          <SubOurServices element={selector} />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
