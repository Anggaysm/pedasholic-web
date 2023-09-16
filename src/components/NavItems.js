import { Link } from "react-router-dom";

export default function NavItems({ name, to, klik }) {
  return (
    <ul className="md:flex text-slate-600 hover:font-bold text-xl hover:text-black md:text-2xl md:font-bold font-PublicSans md:pb-5">
      <li className="pt-6">
        <Link to={to} onClick={klik}>
          {name}
        </Link>
      </li>
    </ul>
  );
}
