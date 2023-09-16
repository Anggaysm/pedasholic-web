import Header from "../components/Header";
import Content from "../components/Content";
import ArticleCard from "../components/ArticleCard";
import { DataArticle } from "../data/DataArticle";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Blog() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Header title="Blog" />
      <div className="pt-10">
        <Content
          judul="Article"
          deskripsi="This is the part of the article where you can read about traditional Indonesian food which can broaden your knowledge about traditional Indonesian food"
        />
        {DataArticle.map((articles) => (
          <Link
            onClick={scrollToTop}
            key={articles.id}
            to={`/article/${articles.id}`}
          >
            <ArticleCard
              judul={articles.judul}
              caption={articles.caption}
              tanggal={articles.tanggal}
              img={articles.poto}
            />
          </Link>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
