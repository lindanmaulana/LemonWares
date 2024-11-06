import { dataListPowerfullCloudHostingSolutions } from "./types";

const TrueCloudpowerfullCloudHostingSolutions = () => {
  return (
    <>
      <div>
        <h2 className="mb-4 text-[42px] font-semibold text-secondary">
          True Cloud Web Hosting
        </h2>
        <p className="text-base text-secondary max-w-[530px]">
          True Cloud Web Hosting All of the hosting packages we offer are
          deployed instantly on our SSD powered cloud. We don’t use dedicated
          servers that operate on single pieces of hardware. Our entire
          infrastructure is built to be reliable, secure, and scalable.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-3 gap-14">
        {dataListPowerfullCloudHostingSolutions?.map((list) => (
          <img key={list.id} src={list.image} alt={list.id.toString()} />
        ))}
      </div>
    </>
  );
};

export default TrueCloudpowerfullCloudHostingSolutions;
