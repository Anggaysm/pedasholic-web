import Card from "../components/Card";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Snack } from "../data/Snack";
import { Link } from "react-router-dom";
export default function snack() {
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
          judul="Snack"
          deskripsi="Snacks that are very suitable to eat and enjoy when we are relaxing. This meal is also ready-to-eat and ready to be eaten with family, relatives or partners."
        />
      </div>
      <div className="md:flex md:flex-wrap md:w-3/4 mx-auto md:justify-normal ">
        {Snack.map((menu) => (
          <Link
            onClick={scrollToTop}
            className="mx-auto"
            key={menu.id}
            to={`/product/${menu.id}`}
          >
            <Card name={menu.name} img={menu.photo} caption={menu.caption} />
          </Link>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
