export default function Card({ img, name, caption }) {
  return (
    <div
      className="flex px-9 h-96 w-full md:w-80 mx-auto pt-8 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
      data-taos-offset="300"
    >
      <div className="mx-auto w-60 ">
        <img
          src={img}
          alt="produk"
          className="h-60 w-60 object-cover hover:scale-105 transition-all duration-500"
        />
        <div className="flex justify-between py-3 items-center">
          <h2 className="font-Poppins uppercase tracking-widest">{name}</h2>
          <button className="bg-primary font-Poppins text-sm text-white px-6 py-1 rounded-md">
            Visit
          </button>
        </div>
        <p className="text-slate-500 font-PublicSans text-sm ">{caption}</p>
      </div>
    </div>
  );
}
