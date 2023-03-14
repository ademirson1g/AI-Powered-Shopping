import React, { useState } from "react"
import axios from "axios"
import Navigation from "./Navigation"
import TransparentButton from "../atoms/TransparentButton"

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
      await axios.post("/api/login", {
        email,
        password,
      })
      alert("Login successful")
    } catch (error) {
      alert("Error logging in")
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Log In
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-center text-white">
                <TransparentButton>Log In</TransparentButton>
              </div>
              <div className="text-white mb-4">
                <h1>
                  Don't have an account?
                  <a href="/register">
                    <strong className="cursor-pointer ml-1 hover:text-white">
                      Sign Up
                    </strong>
                  </a>
                </h1>
              </div>
              <div className="text-center text-white">
                <h1>Forgot your password?</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
