import AboutContent from "../components/AboutContent";
import AboutGalery from "../components/AboutGalery";
import AboutVideo from "../components/AboutVideo";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <div>
        <Header title="About" />
      </div>
      <div className=" pt-9">
        <Content
          judul="About Us"
          deskripsi="PT Berkah Niaga Perkasa is a private company located in Bandung Regency, West Java, Indonesia. Innovation, Determination and Commitment form the cornerstone of our business credo. In our philosophy, customer needs are our own needs. With this in mind, our goal is to continuously and consistently pursue breakthroughs and deliver on our promises."
        />
      </div>
      <div className="py-6">
        <AboutContent />
      </div>

      <div>
        <Content
          judul="Galery"
          deskripsi="This is a photo of our company that we can present to all of you how we produce our products properly."
        />
      </div>
      <div>
        <AboutGalery />
        <AboutVideo />
      </div>

      <div className="pt-6">
        <Footer />
      </div>
    </div>
  );
}
