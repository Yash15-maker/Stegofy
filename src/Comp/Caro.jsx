import React from "react";

import { Carousel } from "3d-react-carousal";

function Caro() {
  let slides = [
    <img src="Flex-1.png" alt="1" />,
    <img src="Flex-2.png" alt="2" />,
    <img src="Flex-3.png" alt="3" />,
    <img src="Flex-4.png" alt="4" />,
    <img src="Cut.png" alt="5" />,
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <h1>Product Features</h1>

      <Carousel
        slides={slides}
        autoplay={false}
        interval={1000}
        color={"black"}
      />
    </div>
  );
}

export default Caro;
