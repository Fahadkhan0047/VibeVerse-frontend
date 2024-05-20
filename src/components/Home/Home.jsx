import "./Home.scss";
import { useEffect, useContext } from "react";
import Category from "./Category/Category";

import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utlils/api";
import { Context } from "../../utlils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  return (
    <div className="home">
      <Banner />
      <div>
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
