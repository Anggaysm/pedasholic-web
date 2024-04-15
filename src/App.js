import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MakananInstant from "./pages/MakananInstant";
import Snack from "./pages/Snack";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Menu from "./pages/Menu";
import ArticleContent from "./pages/ArticleContent";
import Blog from "./pages/Blog";
import { Contact } from "./pages/Contact";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MakananInstant" element={<MakananInstant />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/article/:id" element={<ArticleContent />} />
        <Route path="/Snack" element={<Snack />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
