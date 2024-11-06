const ServicesList = (props: { title: string; desc: string }) => {
  return (
    <>
      <h2 className="text-6xl font-semibold text-fourth mb-[34px]">
        {props.title}
      </h2>
      <p className="text-base text-[#808080] max-w-[420px]">{props.desc}</p>
    </>
  );
};

export default ServicesList;
