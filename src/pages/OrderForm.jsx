import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const loadCartItems = () => {
    const cartProducts = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    setCartItems(cartProducts);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  const removeFromCart = (id) => {
    const cartProducts = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const newCart = cartProducts.filter((product) => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));

    setCartItems(newCart);
  };

  const totalCartItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + (item.quantity * item.price || 0),
    0
  );
  return (
    <>
      <div className="min-h-screen">
        {cartItems.length === 0 ? (
          <p className="text-[35px] flex justify-center mt-[100px]">
            {`Your cart is empty (${totalCartItems})`}.
          </p>
        ) : (
          <div className="mt-[50px]">
            <p className="text-[25px] flex justify-center mt-[30px]">
              {`Your cart is empty (${totalCartItems})`}.
            </p>

            {cartItems.map((item, i) => (
              <div key={i} className="mb-[10px]">
                <div className="my-[10px] px-[30px] flex gap-10">
                  <img
                    className="w-[130px] rounded-[8px]"
                    src={item.image}
                    alt=""
                  />

                  <div className="mt-[20px]">
                    <p className="text-[17px] font-medium">{item.name}</p>
                    <p>quantity: {item.quantity}</p>

                    <div className="flex items-center gap-5">
                      <p className="text-[14px] font-medium ">{`$${
                        item.quantity * item.price
                      }.00`}</p>

                      <div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-700 text-white py-[5px] px-[12px] rounded-[8px] cursor-pointer"
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full border-[0.1px] border-gray-200"></div>
              </div>
            ))}
          </div>
        )}

        <div className="text-right me-[40px] mb-[20px]">
          <p className="text-[30px] font-bold">
            Total Price: {`$${totalCartPrice.toFixed(2)}`}
          </p>
          <button
            disabled={cartItems.length === 0}
            onClick={() => navigate("/success")}
            className={`cursor-pointer text-[30px] px-[12px] py-[8px] bg-[#008751] hover:bg-[#008769] text-white rounded-[12px] font-medium`}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
