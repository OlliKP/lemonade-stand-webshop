import React, { Fragment } from "react";

import TopNavbar from "../Components/Header/TopNavbar";
import Footer from "../Components/Footer/Footer";

const Error = () => {
  return (
    <Fragment>
      <TopNavbar />
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: '85dvh'}}>
        <div className="row text-danger display-6">
                Error 404 - This page does not exist!
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Error;
