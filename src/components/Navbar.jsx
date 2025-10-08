import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [TotalItems, setTotalItems] = useState(0);

  const TotalCartItems = () => {
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    setTotalItems(cartItems.reduce((total, item) => total + item.quantity, 0));
  };

  useEffect(() => {
    TotalCartItems();
  }, []);
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
            <Link to="/order">
              <div className="flex flex-col items-center gap-2">
                <p>Check cart</p>
                <p>{TotalItems}</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
