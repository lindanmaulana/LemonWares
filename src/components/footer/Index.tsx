import { Link } from "react-router-dom";
import { ImageLogo } from "../../assets/images";
import { dataListFooter } from "./services";

const Footer = () => {
  return (
    <footer className="bg-primary mt-[55px]">
      <div className="container max-w-6xl py-16">
        <div className="flex gap-24 mb-20">
          <div className="max-w-[300px]">
            <img src={ImageLogo.logoWhite} alt="Lemon Wares" className="mb-4" />
            <p className="text-sm text-[#e6e6e6]/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>
          {dataListFooter?.map((footer) => (
            <div>
              <h2 className="mb-6 text-base font-bold text-third">{footer.title}</h2>
              <ul className="flex flex-col gap-6 ">
                {footer.listLink?.map((el) => (
                  <li key={el.list} className="text-sm text-[#e6e6e6]/60 w-full hover:text-third transition-global duration-300">
                    <Link to={el.link}>{el.list}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
            <h3 className="text-sm text-third">Built by Jeremiah with ❤️ in Lagos. Copyright 2021</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
