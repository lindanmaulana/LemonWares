import { ImageBlogNews } from "../../../assets/images";
import usePropsDriling from "../../../context/usePropsDriling";
import Comment from "./Comment";

const BlogNews = () => {
  const propsDrilingContext = usePropsDriling();
  if (!propsDrilingContext) throw new Error("Terjadi Kesalahan pada route");
  const { blogNewsRef } = propsDrilingContext;
  return (
    <section ref={blogNewsRef} className="pt-[52px] pb-[42px]">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-start gap-[30px]">
          <div className="max-w-[440px] relative">
            <h2 className="mb-2 text-5xl font-bold leading-tight text-secondary">
              Real Stories from Real Customers
            </h2>
            <p className="text-lg text-secondary">
              Get inspired by these stories
            </p>
            <img
              src={ImageBlogNews.quote}
              alt="Quote"
              className="absolute -top-8 w-[100px] h-[100px] -left-16"
            />
          </div>
          <div className="flex flex-wrap gap-[30px] max-w-[80%] ml-auto relative">
            <Comment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
