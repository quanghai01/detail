import React from "react";
import Search from "../../assets/icons/Search";
import Heart from "../../assets/icons/Heart";
import CartIcon from "../../assets/icons/CartIcon";

const Header = () => {
  return (
    <div className="flex flex-row main-header py-[2vw] px-[3vw] justify-between">
      <div className="logo-header w-[12vw]">
        <a href="#">
          <img src="logo.png" alt="" className="w-[100%]" />
        </a>
      </div>
      <div className="search-header flex flex-row items-center">
        <div class="fui-input-label-animation">
          <input type="text" className="form-input" placeholder=" " />
          <label for="name" className="form-label">
            Tìm kiếm
          </label>
        </div>

        <div className="search-icon">
          <Search></Search>
        </div>
      </div>

      <div className="login-cart flex flex-row items-center">
        <a href="#" className="font-bold">
          Đăng nhập
        </a>
        <a href="#" className="icon-heart mx-[2vw]">
          <Heart></Heart>
        </a>
        <a href="#" className="cart-icon">
          <CartIcon></CartIcon>
        </a>
      </div>
    </div>
  );
};

export default Header;
