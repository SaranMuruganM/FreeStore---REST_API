import React from 'react'

const Routes = () => {
  return (
    <div className="mt-[10vh] space-y-4 text-sm">
      <div className="text-xl font-semibold text-[#0A2E36] tracking-wide">
        Routes
      </div>
      <div className="opacity-55">All HTTP methods are supported</div>
      <div className="space-y-6 *:text-[#0A2E36] *:font-semibold *:justify-between *:flex-wrap">
        <div className="flex items-center">
          <a href="http://localhost:5100/api/products">GET</a>
          <a href="http://localhost:5100/api/products">/products</a>
        </div>
        <div className="flex items-center">
          <a href="http://localhost:5100/api/products">GET</a>
          <a href="http://localhost:5100/api/products/66cc3c5f3b9d635c2af94334">
            /products/66cc3c5f3b9d635c2af94334
          </a>
        </div>
        <div className="flex items-center ">
          <a href="http://localhost:5100/api/products">GET</a>
          <a href="http://localhost:5100/api/products/category">
            /products/category
          </a>
        </div>
        <div className="flex items-center ">
          <a href="http://localhost:5100/api/products">GET</a>
          <a href="http://localhost:5100/api/products/category/mobiles">
            /products/category/mobiles
          </a>
        </div>
        <p>POST</p>
        <p>PUT</p>
        <p>DELETE</p>
      </div>
    </div>
  );
}

export default Routes