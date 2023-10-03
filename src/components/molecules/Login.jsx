import React, { useState } from "react"
import { Link } from "react-router-dom"


import { auth } from "../firebaseConfig/firebaseConfig"
import Navigation from "./Navigation"
import TransparentButton from "../atoms/TransparentButton"
import InputField from "../atoms/InputField"
import RegisterIcons from "../atoms/RegisterIcons"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formData
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      if (!user.emailVerified) {
        throw new Error("Please verify your email to log in.")
      }
      alert("Login successful")
      setFormData({
        email: "",
        password: "",
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#5F4B8BFF]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Log In
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                label="Email address"
                name="email"
                type="email"
                required={true}
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                required={true}
                value={formData.password}
                onChange={handleChange}
              />
              <div className="text-center text-white">
                <TransparentButton>Log In</TransparentButton>
              </div>
              <div className="text-white text-center font-bold">
                <h1>Or Login with</h1>
                <RegisterIcons />
              </div>
              <div className="text-white text-center mb-4">
                <h1>
                  Don't have an account?
                  <Link to="/register">
                    <strong className="cursor-pointer ml-1 hover:text-white">
                      Sign Up
                    </strong>
                  </Link>
                </h1>
              </div>
              <div className="text-center text-white ">
                <Link to="/forgot_password">
                  <h1 className="hover:text-white">Forgot your password?</h1>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
