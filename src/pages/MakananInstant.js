import Card from "../components/Card";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Instant } from "../data/Instant";
import { Link } from "react-router-dom";
export default function MakananInstant() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div>
        <Header title="Our Menu's" />
      </div>
      <div className="pt-16">
        <Content
          judul="instant food"
          deskripsi="food that is easy and practical to make. just brew. no need to bother to eat it. all simple and fast to serve."
        />
      </div>
      <div className="md:flex md:flex-grow ">
        {Instant.map((menu) => (
          <Link
            onClick={scrollToTop}
            className="mx-auto"
            key={menu.id}
            to={`/product/${menu.id}`}
          >
            <Card name={menu.name} caption={menu.capt} img={menu.photo} />
          </Link>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
