import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const productToRender = products.find(
    (product) => product.id === parseInt(id)
  );

  const navigate = useNavigate();

  const addToCart = () => {
    // get the cart
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    const existingItemIndex = cart.findIndex(
      (item) => item.id === productToRender.id
    );
    if (existingItemIndex !== -1) {
      // 3a. If it exists, increase the quantity
      cart[existingItemIndex].quantity =
        (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // 3b. If it doesn’t exist, add it as a new product with quantity 1
      cart.push({ ...productToRender, quantity: 1 });
    }
    // push the new product
    // cart.push(productToRender);
    // set the cart
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <div className="flex px-[30px]">
        <img
          className="w-[650px] m-[10px] rounded-[8px]"
          src={productToRender.image}
          alt=""
        />
        <div className="pt-[50px] ms-[20px]">
          <h1 className="text-[40px] font-medium">{productToRender.name}</h1>
          <p className="text-[14px] text-gray-600">
            {productToRender.description}
          </p>
          <p className="text-[25px] font-medium">{`$${productToRender.price.toFixed(
            2
          )}`}</p>

          <div className="bg-[#008751] hover:bg-[#008769] mt-[15px] rounded-[8px] text-white flex justify-center cursor-pointer">
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
    </>
  );
};

export default ProductDetails;
