import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

    return () => {
      localStorage.removeItem("cart");
    };
  }, []);

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + (item.quantity * item.price || 0),
    0
  );
  return (
    <>
      <div className="flex justify-center text-[20px] mt-[50px]">
        You have Successful Ordered:
      </div>

      {cartItems.map((item, i) => (
        <div key={i} className="mb-[10px]">
          <div className="my-[10px] px-[30px] flex gap-10">
            <img className="w-[130px] rounded-[8px]" src={item.image} alt="" />

            <div className="mt-[20px]">
              <p className="text-[17px] font-medium">{item.name}</p>
              <p>quantity: {item.quantity}</p>

              <div className="flex items-center gap-5">
                <p className="text-[14px] font-medium ">{`$${
                  item.quantity * item.price
                }.00`}</p>
              </div>
            </div>
          </div>
          <div className=" w-full border-[0.1px] border-gray-200"></div>
        </div>
      ))}
      <p className='text-right me-5 text-[30px] font-bold'>
        Total Price: {`$${totalCartPrice.toFixed(2)}`}
      </p>

      <div className={`${cartItems.length > 0 ? 'mb-[180px]' : 'mb-0'} text-[20px] cursor-pointer mx-auto bg-[#008751] hover:bg-[#008769] w-[200px] text-white py-[8px] rounded-[4px]`}>
        <button className="w-full cursor-pointer" onClick={() => navigate("/")}>
          Return to Hompage
        </button>
      </div>
    </>
  );
};

export default Success;
