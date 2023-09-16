import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import NavItems from "./NavItems";
import NavDropDown from "./NavDropDown";
import logo from "../asset/logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(false);
  };
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className=" md:bg-white bg-black bg-opacity-40 flex w-full shadow-md py-2 md:py-0 text-white sticky top-0 z-50 backdrop-blur-sm">
      <div className="md:flex md:mx-auto flex ">
        <div className="flex items-center">
          <Link to="/" className="md:absolute md:left-28">
            <img src={logo} alt="logo" className="w-16 md:w-20" />
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className=" md:hidden absolute right-0 px-7 transition-all duration-500"
          >
            <span className="cursor-pointer text-3xl text-white ">
              {open ? <IoMdClose /> : <IoIosMenu />}
            </span>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`md:flex md:shadow-none md:gap-32 md:visible md:top-0 md:hover:text-black -top-96  bg-white md:relative md:py-0 md:px-0 md:left-10 absolute  pb-10 w-full text-center  shadow-lg md:bg-transparent transition-all duration-500 ease-in  ${
            open ? "top-20 visible" : "invisible"
          }`}
        >
          <NavItems name="Home" to="/" klik={toggleMenu} />
          <NavDropDown klik={toggleMenu} />
          <NavItems name="About" to="/About" klik={toggleMenu} />
          <NavItems name="Blog" to="/Blog" klik={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}
