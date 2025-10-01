import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const productToRender = products.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <>
      <div className="flex ">
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
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
