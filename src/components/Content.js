export default function Content({ judul, deskripsi }) {
  return (
    <div className="flex flex-col pt-4">
      <h1 className="mx-auto md:pt-20 md:text-3xl text-center uppercase font-Poppins font-bold tracking-widest text-sm">
        {judul}
      </h1>
      <p className="mx-auto md:text-2xl md:py-14 md:w-[60rem] font-PublicSans text-slate-600 w-96 text-center text-xs leading-relaxed pt-8">
        {deskripsi}
      </p>
    </div>
  );
}
