"use client";

import customSoft from "../../../assets/images/custom-software.svg";
import rtg from "../../../assets/images/rtg-soft.svg";
import webDev from "../../../assets/images/web-dev.svg";

import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <>
      <div className='serviceBg mt-16' id="services">
        <div className='container'>
          <div className='flex flex-col items-center gap-10 py-16'>
            <h1 className='text-3xl text-center font-bold'>
              We are an <span className='animate-text'>AI-Based</span> software
              company <br /> from Bangladesh
            </h1>
            <h1 className='text-3xl text-center font-bold animate-text'>
              Our services
            </h1>
          </div>
          <div className='flex flex-col md:flex-row gap-20 mt-10'>
            <ServiceCard
              svgImg={customSoft}
              title={"Custom software solution"}
              description={
                "Every business has its strategy to run their business. And so they need their functionalities. We develop software according to the business needs so they can stand out."
              }
            />
            <ServiceCard
              svgImg={webDev}
              title={"Website development"}
              description={
                "In this era of the internet, everyone wants to have their presence online. There is no better medium than having a website. Presence online means more revenue."
              }
            />
            <ServiceCard
              svgImg={rtg}
              title={"Our ready-to-go software"}
              description={
                "We have built several software solutions which are ready to use. We do the customization according to the business needs and make it perfect so they can start immediately."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
