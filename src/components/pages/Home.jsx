import React from "react";
import Headerinfo from "../HeaderInfo/Headerinfo";
import Carousel from "../Carousel/Carousel";
import VorkInfo from "../Vorkinfo/VorkInfo";
import ContactBtn from "../ContactBtn/ContactBtn";
import Footer from "../Footer/Footer";

export const Home = () => {
  return (
  <div>
    <Headerinfo/>
    <Carousel/>
    <VorkInfo/>
    <ContactBtn/>
    <Footer/>
  </div>
  )
};
