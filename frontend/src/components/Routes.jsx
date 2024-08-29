import React from "react";

const Routes = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  return (
    <div className="mt-[10vh] space-y-4 text-sm">
      <div className="text-xl font-semibold text-[#0A2E36] tracking-wide">
        Routes
      </div>
      <div className="opacity-55">All HTTP methods are supported</div>
      <div className="space-y-6 *:text-[#0A2E36] *:font-semibold *:justify-between *:flex-wrap">
        <div className="flex items-center">
          <a href={`${baseUrl}/api/products`}>GET</a>
          <a href={`${baseUrl}/api/products`}>/products</a>
        </div>
        <div className="flex items-center">
          <a href={`${baseUrl}/api/products/66cc3c5f3b9d635c2af94334`}>GET</a>
          <a href={`${baseUrl}/api/products/66cc3c5f3b9d635c2af94334`}>
            /products/66cc3c5f3b9d635c2af94334
          </a>
        </div>
        <div className="flex items-center">
          <a href={`${baseUrl}/api/products/category`}>GET</a>
          <a href={`${baseUrl}/api/products/category`}>/products/category</a>
        </div>
        <div className="flex items-center">
          <a href={`${baseUrl}/api/products/category/mobiles`}>GET</a>
          <a href={`${baseUrl}/api/products/category/mobiles`}>
            /products/category/mobiles
          </a>
        </div>
        <p>POST</p>
        <p>PUT</p>
        <p>DELETE</p>
      </div>
    </div>
  );
};

export default Routes;
