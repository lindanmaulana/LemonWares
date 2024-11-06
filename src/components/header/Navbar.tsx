import { useCallback, useState } from "react";
import { nav } from "./types";
import usePropsDriling from "../../context/usePropsDriling";

interface isactive {
  id: number | string;
  active: boolean;
}

const Navbar = () => {
  const [isActive, setIsActive] = useState<isactive>({
    id: 1,
    active: false,
  });

  const context = usePropsDriling();
  if (!context) throw new Error("Terjadi kesalahan di route");

  const dataNavList: nav[] = [
    {
      id: 1,
      title: "Home",
      ref: context.heroBannerRef,
    },
    {
      id: 2,
      title: "Our Services",
      ref: context.ourServicesRef,
    },
    {
      id: 3,
      title: "About",
      ref: context.aboutRef,
    },
    {
      id: 4,
      title: "Blog&News",
      ref: context.blogNewsRef,
    },
    {
      id: 5,
      title: "Contact",
      ref: context.contactRef,
    },
    {
      id: 6,
      title: "Account",
      ref: context.accountRef,
    },
  ];

  const handleActive = useCallback(
    (params: { id: number | string; ref: React.RefObject<HTMLElement> }) => {
      if (params.ref && params.ref.current) {
        params.ref.current.scrollIntoView({ behavior: "smooth" });
      }

      setIsActive({
        id: params.id,
        active: true,
      });

      console.log(params);
    },
    []
  );
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {dataNavList?.map((list) => (
          <li
            key={list.id}
            className={`text-sm font-semibold ${
              isActive.id === list.id && isActive
                ? "border-b-2 border-primary"
                : ""
            }`}
          >
            <button
              onClick={() => handleActive({ id: list.id, ref: list.ref })}
            >
              {list.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
