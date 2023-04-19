import React, { useState } from "react";

const Detail = (props) => {
  const product = props.product;
  console.log(product);

  const [quantity,setQuantity] = useState(1)
  const handleInscrease = () => {
    setQuantity(pre => pre+1)
    
  }
  const handleDescrease = () => {
    if(quantity>0)
    setQuantity(pre => pre-1)
    
  }
  return (
    <div className="flex flex-col w-[50%] p-[3vw]">
      <h2 className="name text-xl font-bold">{product.name || ""}</h2>
      <p className="price text-orange text-base font-bold my-[1.5vw]">{product.price} đ</p>

      <p className="description text-base ">{product.description}</p>

      <h3 className="id text-base font-bold my-[2vw]">
        Mã sản phẩm:
        {product.id}
      </h3>

      <div className="quantity  mb-[2vw]">
        <input className="is-form" type="button" value="-" fdprocessedid="0lzw8b" onClick={handleDescrease}/>
        <input
          type="number"
          step="1"
          min="1"
          max="9999"
          name="quantity"

          size="4"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}

        />
        <input className="is-form" type="button" value="+" fdprocessedid="eyqzvg" onClick={handleInscrease}/>
      </div>
      <button className="add">Thêm vào giỏ hàng</button>
    </div>
  );
};

export default Detail;
