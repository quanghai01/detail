import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Product from './Product';


const products = [
    {
      id: 1,
      name: "Áo phông trắng",
      price: 200000,
      description: "Áo phông nam trắng, chất liệu cotton 100%",
      image: "product-01.png"
    },
    {
      id: 2,
      name: "Áo khoác đen",
      price: 500000,
      description: "Áo khoác nam đen, chất liệu da bò",
      image: "product-02.png"
    },
    {
      id: 3,
      name: "Quần jean xanh",
      price: 300000,
      description: "Quần jean nam xanh, chất liệu denim",
      image: "product-03.png"
    },
    
  ];
const ListProduct = () => {
    return (
        <div className='flex  wrapper'>
           
        </div>
    );
};

export default ListProduct;