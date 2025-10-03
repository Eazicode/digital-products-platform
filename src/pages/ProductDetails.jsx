import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const productToRender = products.find(
    (product) => product.id === parseInt(id)
  );

  const navigate = useNavigate();

  const addToCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    const existingItemIndex = cart.findIndex(
      (item) => item.id === productToRender.id
    );
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity =
        (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...productToRender, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex px-[30px] min-h-screen">
          <img
            className="w-[450px] h-[450px] m-[10px] rounded-[8px]"
            src={productToRender.image}
            alt=""
          />
          <div className="w-[350px] pt-[50px] ms-[20px]">
            <h1 className="text-[40px] font-medium">{productToRender.name}</h1>
            <p className="text-[14px] text-gray-600">
              {productToRender.description}
            </p>
            <p className="text-[25px] font-medium">{`$${productToRender.price.toFixed(
              2
            )}`}</p>

            <div className="bg-[#008751] hover:bg-[#1eba7e] mt-[15px] rounded-[8px] text-white flex justify-center cursor-pointer">
              <button
                className="w-full py-[10px] font-medium cursor-pointer"
                onClick={() => {
                  addToCart(), navigate("/order");
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
