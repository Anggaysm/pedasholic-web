export default function ArticleCard({ img, judul, tanggal, caption }) {
  return (
    <div className="flex px-9 w-full mx-auto pt-8 ">
      <div className="mx-auto w-96 md:flex md:w-2/3 ">
        <div>
          <img
            src={img}
            alt="produk"
            className="h-60 w-full md:w-[33rem] md:h-44 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="pt-4 md:pt-0 md:pl-7">
          <h2 className="font-Poppins up font-bold md:text-3xl tracking-wide hover:underline">
            {judul}
          </h2>

          <h2 className="text-xs md:text-sm pt-2 font-PublicSans text-slate-500 pb-3">
            {tanggal}
          </h2>
          <p className="text-slate-500 font-PublicSans text-sm md:text-xl ">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}
