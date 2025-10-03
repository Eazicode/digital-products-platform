import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Product from "../components/Product";
import { products } from "../data/products";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen">
        <div>
          <h1 className="text-[45px] text-center font-bold mt-[40px] mb-[20px]">
            Elevate Your Projects
          </h1>

          <p className="text-center text-[18px] mb-[20px]">
            Discover high-quality digital products, templates, and resources
            crafted by <br /> professionals to accelerate your creative workflow
          </p>
        </div>

        <div className="flex justify-center cursor-pointer mb-[80px]">
          <button
            onClick={() => navigate("./products")}
            className="w-[200px] py-[12px] bg-[#008751] hover:bg-[#1eba7e] rounded-[8px] text-white cursor-pointer"
          >
            Browse Products
          </button>
        </div>

        <div className="flex gap-[15px] justify-evenly mb-[60px] px-[10px]">
          <Card
            img="./cloud-lightning.svg"
            title="Instant Access"
            desc={`Download your products immediately after\npurchase`}
          />
          <Card
            img="./shield.svg"
            title="Secure Payment"
            desc={`Your transactions are protected and\nencrypted`}
          />
          <Card
            img="./star.svg"
            title="Premium Quality"
            desc={`Carefully curated products from top\ncreators`}
          />
        </div>

        <div className="text-center mb-[15px]">
          <h1 className="text-[40px] font-medium">Featured Products</h1>
          <p>Check out our most popular digital products</p>
        </div>

        <div className="grid gap-[25px] [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] px-[15px]">
          {products.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center my-[40px] cursor-pointer">
          <button
            onClick={() => navigate("./products")}
            className="bg-[#008751] w-[200px] py-[12px] text-white rounded-[8px] font-medium cursor-pointer hover:bg-[#1eba7e]"
          >
            View All products....
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
