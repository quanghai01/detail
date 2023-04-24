import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import AOS from 'aos';
import 'aos/dist/aos.css';
const products1 = [
  {
    id: 1,
    name: "Simple 1",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-01.png",
  },
  {
    id: 2,
    name: "Simple 1",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-01.png",
  },
  {
    id: 3,
    name: "Simple 1",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-01.png",
  },
  {
    id: 4,
    name: "Simple 1",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-01.png",
  },
  {
    id: 5,
    name: "Simple 1",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-01.png",
  },
];
const products2 = [
  {
    id: 1,
    name: "Simple 2",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-02.png",
  },
  {
    id: 2,
    name: "Simple 2",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-02.png",
  },
  {
    id: 3,
    name: "Simple 2",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-02.png",
  },
  {
    id: 4,
    name: "Simple 2",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-02.png",
  },
  {
    id: 5,
    name: "Simple 2",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-02.png",
  },
];
const products3 = [
  {
    id: 1,
    name: "Simple 3",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-03.png",
  },
  {
    id: 2,
    name: "Simple 3",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-03.png",
  },
  {
    id: 3,
    name: "Simple 3",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-03.png",
  },
  {
    id: 4,
    name: "Simple 3",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-03.png",
  },
  {
    id: 5,
    name: "Simple 3",
    price: 200000,
    description: "Áo phông nam trắng, chất liệu cotton 100%",
    image: "product-03.png",
  },
];
const cates = [
  {
    id: 1,
    title: "Sản phẩm phổ biến",
  },
  {
    id: 2,
    title: "Sản phẩm khuyến mãi",
  },
  {
    id: 3,
    title: "Sản phẩm mới",
  },
];
const ListProduct = () => {
  useEffect(() => {
    AOS.init({
      // Cấu hình AOS ở đây
    });
  }, []);
  const [cateId, setCateId] = useState(1);
  const [products,setProducts] = useState(products1)
  const handleClick = (id) => {
    
    setCateId(id);
  };
  useEffect(() => {
    if (cateId === 1) setProducts(products1);
    else if (cateId === 2) setProducts(products2);
    else setProducts(products3);
  }, [cateId]);
  console.log("mount",cateId)
  return (
    <div className="flex flex-col flex-wrap wrapper">
      <ul data-aos="fade-right" data-aos-duration="1000" className="list-cate flex flex-row font-bold py-[1vw] px-[1%]">
        {cates.map((cate) => (
          <li key={cate.id} className={`tab mr-[1.5vw] ${cate.id == cateId ? "active" : ""} cursor-pointer`}>
            <a onClick={() => handleClick(cate.id)}>
              <span className="cate-text">{cate.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="all-product flex flex-row flex-wrap  wrapper "  data-aos="fade-left" data-aos-duration="1000">
        <div className="all-product-1 flex flex-row flex-wrap ">
          {products.map((product,index) => (
            <Product key={index} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
