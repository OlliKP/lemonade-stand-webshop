import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  );
}

export default App;
