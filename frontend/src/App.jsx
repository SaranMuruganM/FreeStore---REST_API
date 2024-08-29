import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Routes from "./components/Routes";
import Footer from "./components/Footer";


const Layout = ({ children }) => (
  <>
   
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <div className="md:px-52 px-4">
          <NavBar />
          <Hero />
          <About />
          <Routes />
        </div>
        <Footer />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
