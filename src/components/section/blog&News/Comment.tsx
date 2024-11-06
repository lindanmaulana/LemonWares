import { dataNews } from "./services";

const Comment = () => {
  return (
    <>
      {dataNews?.map((news) => (
        <div key={news.id} className={`px-8 py-10 shadow-xl rounded-xl max-w-[380px]`}>
          <div className="pl-8">
            <img src={news.image} alt={news.position} className="mb-4" />
            <p className="text-sm text-[#000000] mb-6">{news.coment}</p>
            <h4 className="text-base font-semibold text-secondary">
              {news.person}
            </h4>
            <h5 className="text-xs text-[#969BAB]">{news.position}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
