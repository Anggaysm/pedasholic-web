import { useParams } from "react-router-dom";
import { DataArticle } from "../data/DataArticle";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { BestSeller } from "../data/BestSeller";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function ArticleContent() {
  const { id } = useParams();
  const content = DataArticle.find((p) => p.id.toString() === id);
  if (!content) {
    return <h1>Article tidak ditemukan</h1>;
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="mx-auto pt-8">
      <div className="md:w-2/3 mx-auto">
        <h1 className="text-center px-2 pb-2 pt-8 text-xl font-bold font-Poppins md:text-4xl md:text-start">
          {content.judul}
        </h1>
        <h2 className="self-center pb-8 font-Poppin text-sm text-slate-500 text-center md:text-start">
          {content.tanggal}
        </h2>
        <img
          src={content.poto}
          alt=""
          className="w-2/3 mx-auto pb-8 md:w-full md:h-[40rem] object-cover"
        />
        <div className="md:flex ">
          <div className="w-3/4 mx-auto text-base tracking-wide break-words md:mx-0 ">
            {content.Deskripsi.map((isi) => (
              <p className="md:text-2xl md:pt-11 pt-4 font-PublicSans text-sm">
                {isi.paragraf}
              </p>
            ))}
          </div>
          <div className="hidden md:block self-center h-full pb-8 bg-slate-100 rounded-lg ml-7">
            <h1 className="text-center pt-9 uppercase font-Poppins font-bold tracking-widest text-sm">
              Best Seller
            </h1>
            {BestSeller.map((best) => (
              <Link
                onClick={scrollToTop}
                key={best.id}
                className="mx-auto"
                to={`/product/${best.id}`}
              >
                <Card name={best.name} caption={best.caption} img={best.img} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-9">
        <Button text="Back To Article" to="/Blog" />
      </div>
      <div className="pt-9">
        <Footer />
      </div>
    </div>
  );
}
