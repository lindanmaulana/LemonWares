import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store/store";
import { dataListHeroBanner } from "./types";
import { handleRouteHeroBanner } from "../../../redux/slices/heroBannerFeatures";

const ListServices = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isActive, setIsActive] = useState<{
    id: number | string;
    active: boolean;
  }>({
    id: 1,
    active: true,
  });

  const handleDispatch = (id: number | string, route: string) => {
    dispatch(handleRouteHeroBanner(route));
    setIsActive({ id: id, active: true });
  };

  return (
    <ul className="flex items-center gap-4 mb-[26px] border-b-2 max-w-[250px] ">
      {dataListHeroBanner?.map((list) => (
        <li key={list.id}>
          <button
            onClick={() => handleDispatch(list.id, list.link)}
            className={`text-primary font-semibold border-b-2 ${
              isActive.id === list.id && isActive.active
                ? "border-primary"
                : "border-transparent"
            }  pb-px`}
          >
            {list.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListServices;
