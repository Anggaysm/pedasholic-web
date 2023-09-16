import { Link } from "react-router-dom";
import Content from "../components/Content";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { DataMenu } from "../data/DataMenu";

export default function Menu() {
  return (
    <div>
      <div>
        <Header title="Our Menu's" />
      </div>
      <div className="pt-16">
        <Content
          judul="All Menu's"
          deskripsi="this is a page that displays all the menus that we serve, you can see all the menus that we have on this page."
        />
      </div>
      <div className="md:flex md:flex-wrap md:w-3/4 md:mx-auto ">
        {DataMenu.map((menu) => (
          <Link
            className="mx-auto md:mt-4"
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
