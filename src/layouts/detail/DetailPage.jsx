import React from "react";
import Detail from "./Detail";
import SliderDetail from "./SliderDetail";

const DetailPage = () => {
  const product = {
    id: "P006",
    name: "Classico 4",
    price: "500,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  };

  return (
    <div className="flex flex-row">
        <SliderDetail></SliderDetail>
      <Detail product={product}></Detail>
    </div>
  );
};

export default DetailPage;
