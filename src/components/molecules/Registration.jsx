import React, { useState } from "react"
import { Link } from "react-router-dom"

import { auth } from "../firebaseConfig/firebaseConfig"
import Navigation from "./Navigation"
import TransparentButton from "../atoms/TransparentButton"
import RegisterIcons from "../atoms/RegisterIcons"
import InputField from "../atoms/InputField"

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { firstName, lastName, email, password, confirmPassword } = formData
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      })
      await user.sendEmailVerification()
      alert(
        "Registration successful. Please check your email for a verification link."
      )
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      window.location.href = '/login' // redirect to login page
    } catch (error) {
      alert("Error registering")
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#5F4B8BFF]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-white ">
            Register an account
          </h1>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                label="First Name"
                name="firstName"
                type="text"
                required={true}
                value={formData.firstName}
                onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                type="text"
                required={true}
                value={formData.lastName}
                onChange={handleChange}
              />
              <InputField
                label="Email address"
                name="email"
                type="text"
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
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                required={true}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className="text-center text-white">
                <TransparentButton> Register Now </TransparentButton>
              </div>
              <div className="text-white flex justify-between ">
                <h1>
                  Already a user?
                  <Link to="/login">
                    <strong className="cursor-pointer ml-1 hover:text-white">
                      Log In
                    </strong>
                  </Link>
                </h1>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div
                  className="absolute inset-0 mt-8 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className=" flex justify-center text-base font-bold">
                  <span className="text-white">Or register with</span>
                </div>
              </div>
              <RegisterIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationPage
