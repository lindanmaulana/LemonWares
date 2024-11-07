import Footer from "../components/footer/Index";
import Header from "../components/header/Index";
import BlogNews from "../components/section/blog&News/Index";
import Contact from "../components/section/contact/Index";
import HeroBanner from "../components/section/heroBanner/Index";
import OurServices from "../components/section/ourServices/Index";
import PowerfullCloudHostingSolutions from "../components/section/powerfullCloudHostingSolutions/Index";
import Weserve from "../components/section/weserve/Index";

const HomePages = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <PowerfullCloudHostingSolutions />
      <OurServices />
      <BlogNews />
      <Weserve />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePages;
