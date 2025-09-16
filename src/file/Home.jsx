// src/Home.jsx
import React from "react";
import Header from "./Header";
import Doctor from "./Doctor";
import Services from "./Services";
import Manage from "./Manage";
import Technology from "./Technology";
import Grediant from "./Grediant";
import Medical from "./Medical";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Consultation from "../Consultation"; // ye file src/ ke andar hai, isliye ek level upar jana hoga
import Sign from "../Sign";                 // same here





export default function Home() {
  return (
    <>
      <Header />
      <Doctor />
      <Services />
      <Manage />
      <Technology />
      <Grediant />
      <Medical />
      <Testimonial />
      <Blog />
      <Consultation />
      <Sign />
      
      
      
    </>
  );
}
