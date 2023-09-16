import { IoLogoFacebook } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import Email from "./Email";
import { Link } from "react-router-dom";

export default function Footer() {
  const Media = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/PedasholicOfficial",
      logo: <IoLogoFacebook />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ptberkahniagaperkasa/",
      logo: <GrInstagram />,
    },
  ];

  const Support = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Instant Food", to: "/MakananInstant" },
    { name: "Snack", to: "/Snack" },
    { name: "Blog", to: "/Blog" },
  ];

  return (
    <div className="bg-primary w-full text-center text-white mt-16 md:mt-24 md:pt-6">
      <h1 className="py-5 text-2xl font-Poppins tracking-wide font-medium md:py-9">
        PEDASHOLIC
      </h1>
      <div className="flex pb-5">
        <div className="flex mx-auto ">
          {Media.map((media) => (
            <a
              className="text-centers px-5 text-3xl"
              target="_blank"
              href={media.link}
              rel="noreferrer"
            >
              {media.logo}
            </a>
          ))}
          <Email email="pedasholicofficial@gmail.com" />
        </div>
      </div>
      <div className="h-0.5 bg-slate-300 my-5 w-2/3 mx-auto"></div>

      <div className="flex font-Poppins">
        <div className="mx-auto">
          <h1 className="text-md text-center font-semibold py-3">Support</h1>
          {Support.map((isi) => (
            <li className="list-none text-center py-2">
              <Link to={isi.to}>{isi.name}</Link>
            </li>
          ))}
        </div>
      </div>
      <div className="flex pt-9 pb-3 items-center justify-between">
        <div className="bg-slate-200 h-0.5 w-1/4"></div>
        <div>
          <h2 className="text-center text-xs  font-PublicSans">
            pedasholicoficial@gmail.com
          </h2>
        </div>
        <div className="bg-slate-200 h-0.5 w-1/4"></div>
      </div>
    </div>
  );
}
