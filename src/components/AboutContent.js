import { Profile } from "../data/Profile";

export default function AboutContent() {
  return (
    <div className="">
      {Profile.map((isi) => (
        <div className="py-14 mx-auto text-center md:text-start w-96 md:w-2/3 md:flex ">
          <img
            src={isi.photo}
            alt="poto kegiatan"
            className="w-96 object-cover"
          />
          <div className="md:pl-11">
            <h1 className="font-semibold md:pb-6 md:text-3xl uppercase font-Poppins text-sm pt-3 tracking-widest">
              {isi.judul}
            </h1>
            <p className="text-slate-600 md:text-xl text-xs tracking-wider py-3 font-PublicSans">
              {isi.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
