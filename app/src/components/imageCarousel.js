import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageCarousel = props => {
  return (
    <div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        stopOnHover={true}
        interval={3000}
        swipeable={true}
        dynamicHeight={true}
        emulateTouch={true}
        // centerMode={true}
        selectedItem={0}
      >
        <div>
          <img src="https://placehold.it/600x400" />
        </div>
        <div>
          <img src="https://placehold.it/600x400" />
        </div>
      </Carousel>
    </div>
  );
};

export default imageCarousel;
