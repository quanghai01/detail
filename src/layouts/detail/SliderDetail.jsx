import React, { useEffect, useRef, useState } from "react";
import Back from "../../assets/icons/Back";
import Next from "../../assets/icons/Next";

const productImgs = [
  {
    id: 1,
    title: "product-01",
    src: "product-01.png",
  },
  {
    id: 2,
    title: "product-02",
    src: "product-02.png",
  },
  {
    id: 3,
    title: "product-03",
    src: "product-03.png",
  },
  {
    id: 4,
    title: "product-04",
    src: "product-04.png",
  },
];

const SliderDetail = () => {
  const imgRef = useRef();
  const [image, setImage] = useState("product-01.png");
  const [id, setId] = useState(1);

  const handleClick = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className="flex flex-col w-[50%]">
      <div className="main_product flex flex-row justify-center">
        <div className="back flex items-center">
          <Back></Back>
        </div>
        <div className="main_img">
          <img src={image} alt="" className="w-[20vw]" />
        </div>
        <div className="next flex items-center">
          <Next></Next>
        </div>
      </div>
      <ul className="list-img flex flex-row">
        {productImgs.map((product, index) => (
          <li
            className={`w-[14vw] h-[12vw] cursor-pointer item-img flex items-center justify-center ${product.id === id ? "active" : ""}`}
            key={product.id} onClick={() => {setId(product.id)}}
          >
            <img src={product.src} alt="" onClick={handleClick} ref={imgRef} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderDetail;