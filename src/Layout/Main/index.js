import React from "react";
import Product from "../../components/Products";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./../../components/LoginForm";
import SignUpForm from "./../../components/SignUpForm";
import Home from "./../../pages/Home";

// import { Home, AdvanceSearch, AboutUs } from "./../../pages";

function Index() {
  return (
    <div className="bg-dark" style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/advence-search" element={<AdvanceSearch />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
      </Routes>
    </div>
  );
}

export default Index;
