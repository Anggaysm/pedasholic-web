import { Link } from "react-router-dom";

export default function Button({ text, to }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className="flex pt-8 mx-auto">
      <Link
        className="mx-auto bg-primary py-2 px-28 rounded-lg text-white drop-shadow-md hover:drop-shadow-none hover:scale-95 transition-all duration-500"
        to={to}
        onClick={scrollToTop}
      >
        {text}
      </Link>
    </button>
  );
}
