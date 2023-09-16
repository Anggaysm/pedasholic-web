import Gambar from "../asset/img/Gambar.jpg";
export default function Header({ title, slogan }) {
  return (
    <header className="w-full">
      <div className="w-full relative ">
        <img
          src={Gambar}
          alt=""
          className="w-full md:h-[40rem] h-96 object-cover absolute -z-10"
        />
        <div className="p-28 md:h-[40rem] h-96 bg-black bg-opacity-30 text-center flex flex-wrap">
          <h1 className="font-Poppins  h-auto md:text-8xl text-4xl md:tracking-wide md:w-full  font-extrabold mx-auto text-white text-center self-center">
            {title}
          </h1>
          <h2 className="mx-auto w-full text-sm font-semibold md:text-4xl  text-white italic font-PublicSans">
            {slogan}
          </h2>
        </div>
      </div>
    </header>
  );
}
