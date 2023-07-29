"use client";

import FeatureProducts from "./FeatureProducts/FeatureProducts";
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
    </>
  );
}
