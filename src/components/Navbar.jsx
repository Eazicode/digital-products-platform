import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-5 bg-[#008751]">
        <Link to="/" className="text-[20px] font-bold text-white">
          Digital Platform
        </Link>

        <ul className="flex gap-5 text-white">
          <li className="hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-gray-400">
            <Link to="/products">Products</Link>
          </li>

          <li className="hover:text-gray-400">
            <Link to="/order">Check Cart </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
