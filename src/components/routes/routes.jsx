import { Fragment } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import HeaderText from "../atoms/HeaderText"
import TransparentButton from "../atoms/TransparentButton"
import About from "../molecules/About"
import Dashboard from "../molecules/Dashboard/Dashboard"
import ForgotPassword from "../molecules/ForgotPassword"
import GetStarted from "../molecules/GetStarted"
import Homepage from "../molecules/Homepage"
import Login from "../molecules/Login"
import Navigation from "../molecules/Navigation"
import Registration from "../molecules/Registration"

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
              <About />
              <GetStarted />
            </Fragment>
          }
        />
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <div class="h-screen w-screen flex items-center bg-black">
              <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-white">
                <div class="max-w-md">
                  <div class="text-5xl font-dark font-bold">404</div>
                  <p class="text-2xl md:text-3xl font-light leading-normal">
                    Sorry we couldn't find this page.{" "}
                  </p>
                  <p class="mb-8">
                    But dont worry, you can find plenty of other things on our
                    homepage.
                  </p>
                  <Link to="/">
                    <TransparentButton>Back to the Homepage</TransparentButton>
                  </Link>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
