import React, { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Product = (props) => {

  const [active,setActive] = useState(false)
  const [href,setHref] = useState("")
  const handleActive = () => {
    setActive(!active)
    setHref("#")
  }
  
  return (
    <div className="flex flex-col items-center product-item">
      <div className="img-product">
        <a href="#">
          <img src={props.product.image} alt="" />
        </a>
      </div>
      <div className="footer-product flex flex-col items-center py-[1vw]">
        <h2 className="name-product font-bold">
           {props.product.name}
        </h2>
        <h3 className="price-product text-orange font-bold py-[0.5vw]">
            {props.product.price} d
        </h3>
        <Button href={href} className={`${active?"btn-act":""}`} onClick={handleActive}>{active?"Xem giỏ hàng":"Thêm vào giỏ"}</Button>
      </div>
    </div>
  );
};

export default Product;
