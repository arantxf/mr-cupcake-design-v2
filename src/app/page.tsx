// "use client";

import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Novedades</h1>
        <Suspense fallback={<Skeleton />}>
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Camisetas
        </h1>
        <Suspense fallback={<Skeleton />}>
        </Suspense>
      </div>
      {/*
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Novedades</h1>
        <Suspense fallback={<Skeleton />}>
        </Suspense>
      </div> */}
    </div>
  );
};

export default HomePage;
