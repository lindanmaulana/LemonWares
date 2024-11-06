import { dataWeserve } from "./services";

const Weserve = () => {
  return (
    <section className="pt-[42px] pb-[52px]">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between gap-10">
          <div className="max-w-[500px]">
            <h2 className="mb-2 text-5xl font-semibold text-secondary">We serve over 100 Nigerian Websites</h2>
            <p className="text-base max-w-[440px] text-secondary">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {dataWeserve?.map((serve) => (
              <img key={serve.id} src={serve.image} alt={serve.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weserve;
