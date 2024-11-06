import { dataServices } from "./types";

const ServicesPowerfullCloudHostingSolutions = () => {
  return (
    <>
      {dataServices?.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center justify-center"
        >
          <img src={service.image} alt={service.title} className="mb-4" width={80} height={80} />
          <h3 className="text-lg font-bold text-[#000000]">
            {service.title}
          </h3>
          <p className="text-xs font-light text-center">
            {service.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default ServicesPowerfullCloudHostingSolutions;