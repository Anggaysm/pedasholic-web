import { useParams } from "react-router-dom";
import { BigData } from "../data/BigData";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const detail = BigData.find((p) => p.id.toString() === id);
  if (!detail) {
    return <h1>makanan tidak ditemukan</h1>;
  }
  return (
    <div className="flex flex-col">
      <h1 className="md:text-4xl md:pb-32 md:pt-24 uppercase text-center pt-20 pb-10 font-Poppins font-semibold tracking-widest text-sm ">
        Detail Product
      </h1>
      <div className="md:flex md:w-3/4 mx-auto w-72 md:items-center">
        <div className="md:px-3">
          <img className="w-72 md:w-[30rem]" src={detail.photo} alt="" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="md:text-4xl md:font-bold uppercase pt-7 font-semibold font-Poppin text-base tracking-widest ">
            {detail.name}
          </h1>
          <div className="bg-slate-300 h-0.5 mt-9"></div>
          <p className="pt-4 md:text-xl text-slate-500 font-PublicSans text-xs  ">
            {detail.caption}
          </p>
          <div className="bg-slate-300 h-0.5 mt-10 mb-2"></div>
          <p className="pt-4  md:text-xl text-slate-500 font-PublicSans text-xs mb-7">
            {detail.desc}
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
