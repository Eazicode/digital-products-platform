import { products } from "../data/products";
import Product from "../components/Product";

const ProductList = () => {
  return (
    <>
      <div className="min-h-screen">
        <div>
          <h1 className="text-[45px] text-center font-bold mt-[40px] mb-[12px]">
            Digital Products
          </h1>

          <p className="text-center text-[18px] mb-[20px]">
            Explore our collection of premium templates, UI kits, and resources
          </p>
        </div>
        <div className="grid gap-[25px] [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] px-[15px] my-[20px]">
          {products.map((products) => (
            <Product key={products.id} product={products} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
