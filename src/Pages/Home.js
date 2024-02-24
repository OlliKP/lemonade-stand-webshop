import React, { Fragment } from "react";

import TopNavbar from "../Components/Header/TopNavbar";
import Footer from "../Components/Footer/Footer";
import HeaderSlider from "../Components/Slider/HeaderSlider";
import AllCategories from "../Components/Categories/AllCategories";
import LatestProdcuts from "../Components/Product/LatestProdcuts";

const Home = () => {
  return (
    <Fragment>
      <TopNavbar />
      <HeaderSlider />
      <AllCategories />
      <LatestProdcuts />
      <div className="mb-5 pb-5"></div>
      <div className="mb-5 pb-5"></div>
      <Footer />
    </Fragment>
  );
};

export default Home;
