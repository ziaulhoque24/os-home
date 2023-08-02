"use client";

import Navbar from "../Navbar/Navbar";
import ClientCountry from "./ClientCountry/ClientCountry";
import FeatureProducts from "./FeatureProducts/FeatureProducts";
import Feedback from "./Feedback/Feedback";
import Hero1 from "./Hero1/Hero1";
import Products from "./Products/Products";
import Service from "./Service/Service";

export default function LandingPage() {
  return (
    <>
    
      <Hero1 />
      <FeatureProducts />
      <Service />
      <Products />
      <Feedback />
      <ClientCountry />
    </>
  );
}
