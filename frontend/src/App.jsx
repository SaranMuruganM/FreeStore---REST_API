import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/about";
import Routes from "./components/Routes";
import Footer from "./components/Footer";


const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Hero />
        <About />
        <Routes/>
        <Footer/>
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
