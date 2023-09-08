import React, { useContext } from "react";
import { categories } from "../utils/constant";
import LeftNavMenuItems from "./LeftNavMenuItems";
import { Context } from "../context/contextApi";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectCategoroies, setSelectCategoroies, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategoroies(name);
      case "home":
        return setSelectCategoroies(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[240px] md:translate-x-0 transition-all ">
      <div className="flex px-5 flex-col h-screen">
        {categories.map((item) => {
          return (
            <>
              <LeftNavMenuItems
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategoroies === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by Arvind Kumar
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
