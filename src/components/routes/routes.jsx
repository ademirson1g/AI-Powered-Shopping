import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderText from "../atoms/HeaderText";

import Homepage from "../molecules/Homepage";
import Login from "../molecules/Login";
import Navigation from "../molecules/Navigation";
import Registration from "../molecules/Registration";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Navigation />
              <HeaderText />
            </Fragment>
          }
        />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div class="h-screen w-screen bg-gray-100 flex items-center">
              <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div class="max-w-md">
                  <div class="text-5xl font-dark font-bold">404</div>
                  <p class="text-2xl md:text-3xl font-light leading-normal">
                    Sorry we couldn't find this page.{" "}
                  </p>
                  <p class="mb-8">
                    But dont worry, you can find plenty of other things on our
                    homepage.
                  </p>
                  <a href="/">
                    <button className="border-[2px] rounded-[10px] text-white bg-[#2E97A9] px-[25px] py-[7px] hover:cursor-pointer font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Back to Homepage
                    </button>
                  </a>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
