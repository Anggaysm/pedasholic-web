import { MdLocationPin } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

export default function Sosmed() {
  const Media = [
    {
      name: "New Sagira Kampoeng geulis blok A7 RT 04/RW 13, Manggung hardja, kecamatan ciparay, Bandung, Jawa Barat, Indonesia",
      link: "/",
      logo: <MdLocationPin />,
    },
    {
      name: "pedasholicofficial@gmail.com",
      link: "https://mail.google.com/",
      logo: <BiLogoGmail />,
    },
    {
      name: "Pedasholic ",
      link: "https://www.facebook.com/PedasholicOfficial",
      logo: <IoLogoFacebook />,
    },
    {
      name: "@ptberkahniagaperkasa ",
      link: "https://www.instagram.com/ptberkahniagaperkasa/",
      logo: <GrInstagram />,
    },
    {
      name: "@pedasholic_official ",
      link: "https://www.instagram.com/pedasholic_official/",
      logo: <GrInstagram />,
    },
    {
      name: "+62 877-2660-4014",
      link: "https://api.whatsapp.com/send/?phone=%2B6287726604014&text&type=phone_number&app_absent=0",
      logo: <BsWhatsapp />,
    },
  ];

  return (
    <div className="py-9">
      <div className="mx-auto w-3/4 md:w-2/3 bg-slate-200 px-8 py-10 rounded-lg">
        {Media.map((media) => (
          <div className="text-slate-600 md:w-full  hover:text-black hover:my-3 transition-all duration-300 mx-auto flex pt-6">
            <a
              className="text-4xl md:text-6xl self-center"
              target="_blank"
              href={media.link}
              rel="noreferrer"
              key={media.name}
            >
              {media.logo}
            </a>
            <a
              href={media.link}
              target="_blank"
              rel="noreferrer"
              className="self-center"
            >
              <p className="pl-5 self-center font-Poppins md:text-xl text-xs">
                {media.name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
