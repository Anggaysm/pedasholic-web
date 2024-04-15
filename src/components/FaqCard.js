import { useEffect, useRef, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

export default function FaqCard({ tanya, jawab }) {
  const [open, setOpen] = useState(false);
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
    <div ref={menuRef} className="mx-auto px-4 pt-7 md:w-3/5">
      <div className=" flex items-center ">
        <h1
          onClick={() => setOpen(!open)}
          className="font-Poppins md:text-xl hover:py-2 transition-all duration-150 text-sm font-semibold tracking-wider cursor-pointer"
        >
          {tanya}
        </h1>
        <div className="transition-all duration-300">
          {open ? (
            <AiFillCaretUp className="mx-3 transition-all duration-500 " />
          ) : (
            <AiFillCaretUp className="mx-3 -rotate-180  transition-all duration-500" />
          )}
        </div>
      </div>
      <div className="bg-slate-200 w-full h-0.5 mt-2 md:mt-4"></div>
      <div className={`${open ? "block" : "hidden"} -z-10 `}>
        <h2 className="font-PublicSans italic text-sm font-light text-slate-500 pt-3 md:text-base">
          {jawab}
        </h2>
      </div>
    </div>
  );
}
