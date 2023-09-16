import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
export default function NavDropDown({ klik }) {
  const Menu = [
    { name: "Instant Food", link: "/MakananInstant" },
    { name: "Snack", link: "/snack" },
  ];
  const [drop, setDrop] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="w-32 mx-auto " ref={menuRef}>
      <div
        onClick={() => setDrop(!drop)}
        className="text-slate-600 flex items-center pt-6"
      >
        <span className="flex hover:font-bold text-xl items-center text-center mx-auto cursor-pointer hover:text-black md:text-2xl md:font-bold font-PublicSans md:pb-5">
          Menu
          {/* <IoIosArrowDown className=" hover:text-black md:text-2xl " /> */}
        </span>
      </div>
      <div
        className={`${
          drop ? "block " : "hidden "
        } md:absolute  text-slate-600 transition-all duration-500 ease-in`}
      >
        <ul className="md:bg-white md:shadow-md md:h-28">
          {Menu.map((menu) => (
            <li
              className="py-2 hover:font-bold text-xl hover:text-black md:text-2xl md:font-bold font-PublicSans md:px-6"
              key={menu.name}
            >
              <Link to={menu.link} onClick={klik}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
