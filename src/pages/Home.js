import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Content from "../components/Content";
import Card from "../components/Card";
import { BestSeller } from "../data/BestSeller";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { DataArticle } from "../data/DataArticle";
import FaqCard from "../components/FaqCard";
import { Faq } from "../data/Faq";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div>
        <Header title="Pedasholic" slogan="Sensational Snack for Millenials" />
      </div>
      <div className="py-10">
        <Content
          judul="What Makes us special"
          deskripsi="PT Berkah Niaga Perkasa, is a manufacturer and supplier of Indonesian snacks in the food and beverage sector and has provided exceptional service by offering premium quality snacks."
        />
        <Button text="About Us" to="/About" />
      </div>
      <div className="py-16 ">
        <Content
          judul="Best Seller"
          deskripsi="Our best-selling products are categorized as snacks consisting of basreng, tempeh chips, peyek, seblak, and cuanki. "
        />
        <div className=" flex  flex-grow  h-full overflow-auto snap-center scroll-smooth scrollbar-default">
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
        <Button text="All Menu's" to="/menu" />
      </div>
      <div>
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
        <Button text="All Article" to="/Blog" />
      </div>
      <div className="py-16">
        <Content
          judul="Faq"
          deskripsi="This is a question clients often ask when clients want to know more about us"
        />
        {Faq.map((faq) => (
          <div>
            <FaqCard tanya={faq.pertanyaan} jawab={faq.jawaban} />
          </div>
        ))}
      </div>
      <div className="flex ">
        <Footer />
      </div>
    </div>
  );
}
