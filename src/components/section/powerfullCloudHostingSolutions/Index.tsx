import usePropsDriling from "../../../context/usePropsDriling";
import ServicesPowerfullCloudHostingSolutions from "./ServicesPowerfullCloudHostingSolutions";
import TrueCloudpowerfullCloudHostingSolutions from "./TrueCloudpowerfullCloudHostingSolutions";

const PowerfullCloudHostingSolutions = () => {
  const context = usePropsDriling();

  if (!context) throw new Error("Terjadi kesalahan pada route");
  const { aboutRef } = context;
  return (
    <section className="pt-10 pb-[66px]" ref={aboutRef}>
      <div className="container max-w-6xl">
        <div className="grid items-start grid-cols-2 gap-6 mb-14">
          <TrueCloudpowerfullCloudHostingSolutions />
        </div>
        <div className="grid grid-cols-4 gap-[34px]">
          <ServicesPowerfullCloudHostingSolutions />
        </div>
      </div>
    </section>
  );
};

export default PowerfullCloudHostingSolutions;
