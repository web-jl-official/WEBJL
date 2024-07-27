import React, {lazy, Suspense, Fragment, useContext, use, useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
const HeroSection = lazy(() =>
  import("../../components/heroSection/HeroSection")
);
//import HeroSection from "../../components/heroSection/HeroSection";
import ProductCard2 from "../../components/productCard/ProductCard2"


function Home() {

  
  return (
    <Layout>
      <div className="w-full h-full bg-center bg-fixed bg-no-repeat bg-cover bg-gray-900">
        <div>
          <Suspense fallback={<p className="text-white">Loading...</p>}>
            <HeroSection />
          </Suspense>
        </div>

        <div>
          <ProductCard2 />
        </div>

        <div className=" w-full flex justify-center text-center items-center text-2xl">
          <Link
            to={"/allproducts"}
            className="text-2xl font-medium    text-white ml-1  hover:text-cyan-400 bg-cyan-400 hover:bg-gray-900 p-4 m-4 border-4 border-white rounded-full transform-gpu action:animate-ping"
          >
            Explore More Courses
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
