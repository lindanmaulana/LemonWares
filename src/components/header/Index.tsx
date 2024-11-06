import { Link } from "react-router-dom";
import { ImageHeroBanner } from "../../assets/images";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between max-w-6xl py-6">
        <div>
          <img
            src={ImageHeroBanner.logo}
            alt="LemonWares"
            width={90}
            height={60}
          />
        </div>
        <Navbar />
        <div>
          <Link to="/" className="text-base font-semibold">
            085322701120
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
