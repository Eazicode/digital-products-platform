import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div key={product.id}>
        <img
          className="rounded-tl-[16px] rounded-tr-[16px]"
          src={product.image}
          alt=""
        />
        <h1 className="my-[10px] text-[18px] font-medium ">{product.name}</h1>
        <p className="text-gray-700">{`${product.description.slice(
          0,
          50
        )}........`}</p>
        <p className="text-[17px] font-medium mb-[15px]">{`$${product.price.toFixed(
          2
        )}`}</p>

        <div className="bg-[#008751] hover:bg-[#1eba7e] rounded-[8px] text-white flex justify-center cursor-pointer">
          <button
            className="w-full py-[10px] font-medium cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
