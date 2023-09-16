import { Galery } from "../data/Galery";

export default function AboutGalery() {
  return (
    <div className="md:flex md:flex-wrap">
      {Galery.map((poto) => (
        <div
          className="py-14 mx-auto delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
          data-taos-offset="300"
        >
          <img
            src={poto.foto}
            alt="foto"
            className="w-96 md:w-[35rem] object-cover mx-auto"
          />
        </div>
      ))}
    </div>
  );
}
