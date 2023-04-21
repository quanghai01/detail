import React, { useState } from "react";
import { Link } from "react-router-dom";
const navbar = [
    {
      id: 1,
      title: "Trang chủ",
      link: "/trangchu",
    },
    {
      id: 2,

      title: "Giới thiệu",
      link: "/gioithieu",
    },
    {
      id: 3,

      title: "Thực phẩm",
      link: "/thucpham",
    },
    {
      id: 4,

      title: "Bánh kẹo",
      link: "/banhkeo",
    },
    {
      id: 5,

      title: "Đồ uống",
      link: "/douong",
    },
    {
      id: 6,

      title: "Đồ gia dụng",
      link: "/dogiadung",
    },
  ];
const Navbar = () => {
  const [active,setActive] = useState(1)

  const handleClick = (id) => {
    setActive(id)
  }
  return (
    <div>
      <ul className="flex flex-row justify-center items-center relative w-[100%] bg-bgBlack text-[#fff] uppercase py-[1vw]">
        {navbar.map((item) => (
          <li key={item.id}>
                <Link className={`nav-link  font-bold text-[0.7vw] mx-[1vw] ${item.id === active ? "active" : ""}`}  to={item.link} onClick={() => handleClick(item.id)}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
