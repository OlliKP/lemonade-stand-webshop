import React, { Fragment } from "react";
import { Carousel, Button } from "react-bootstrap";

const HeaderSlider = () => {
  return (
    <Fragment>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "calc(100dvh - 90px)", objectFit: "cover" }}
            src="media/img/lemonade-header.jpg"
            alt="Juicy Lemonade Art"
          />
          <Carousel.Caption className="bg-white">
            <h5>Delicously fruity and tasty drinks</h5>
            <p>Wow! i can't believe it actully tastes that good</p>
            <div className="mb-3">
              <Button variant="dark">Buy Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "calc(100dvh - 90px)", objectFit: "cover" }}
            src="media/img/organic-smoothie.jpg"
            alt="Juicy Lemonade Art"
          />
          <Carousel.Caption className="bg-white">
            <h5>Organic smoothies with healthy ingredients</h5>
            <p>Lets protect the environment, and eat organic</p>
            <div className="mb-3">
              <Button variant="dark">Buy Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default HeaderSlider;
