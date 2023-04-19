import React from "react";

const DetailCart = () => {
  return (
    <div className="p-[2vw] w-[50%]">
      <h2 className="total-quantity font-bold ">Tổng Số Lượng</h2>
      <div className="total1 flex flex-row justify-between my-[1vw]">
        <h3 className="">Tổng phụ</h3>
        <h3>500,000 ₫</h3>
      </div>
      <div className="ship flex flex-row justify-between">
        <h3>Giao hàng</h3>
        <h3>Giao hàng miễn phí</h3>
      </div>
      <div className="total-money flex flex-row justify-between my-[1vw]">
        <h3>Tổng</h3>
        <h3>500,000 ₫</h3>
      </div>

      <div className="bt-button-1">Tiến hành thanh toán</div>

      <div class="fui-basic-input">
        <input
          type="text"
          name="name"
          placeholder="Mã Giảm Giá"
          className="input-cart my-[1vw]"
          autocomplete="off"
        />
      </div>
      <button className="bt-button-2">Áp dụng</button>
    </div>
  );
};

export default DetailCart;
