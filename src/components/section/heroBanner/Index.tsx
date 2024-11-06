import { useState } from "react";
import { useSelector } from "react-redux";
import { ImageHeroBanner } from "../../../assets/images";
import usePropsDriling from "../../../context/usePropsDriling";
import { RootState } from "../../../redux/store/store";
import ListServices from "./ListServices";
import SubBanner from "./subBanner/Index";



const HeroBanner = () => {
  const propsDrilingContext = usePropsDriling();
  const selector = useSelector((state: RootState) => state.hero)
  const [isError, setIsError] = useState<boolean>(false);

  if (!propsDrilingContext) {
    setIsError(true);
    throw new Error("Terjadi kesalahan pada route");
  }

  const { heroBannerRef } = propsDrilingContext;

  if (isError) return <h2>Terjadi Kesalahan di route</h2>;

  return (
    <section ref={heroBannerRef} className="pt-4 pb-10">
      <div className="container max-w-6xl ">
        <div className="flex justify-between">
          <div className="w-1/2">
            <ListServices />
            <div className="mb-[60px]">
              <SubBanner element={selector} />
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-primary text-[#FFFFFF] text-sm p-3 shadow-2xl shadow-primary/40 rounded-lg border-2 border-transparent">
                Create an Account
              </button>
              <button className="p-3 text-sm border-2 rounded-lg border-secondary text-secondary">
                Choose your plan
              </button>
            </div>
          </div>
          <div className="self-center">
            <img
              src={ImageHeroBanner.banner}
              alt="Banner"
              className="w-full h-[446px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
