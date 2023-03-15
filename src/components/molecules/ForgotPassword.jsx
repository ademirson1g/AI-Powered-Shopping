import React, { useState } from "react"
import { Link } from "react-router-dom"

import InputField from "../atoms/InputField"
import TransparentButton from "../atoms/TransparentButton"
import Navigation from "./Navigation"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Send a request to your server to reset the password for the given email
    console.log("Email submitted: ", email)
  }

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Forgot your password?
          </h2>
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <p className="mt-2 text-center text-white">
              No problem! Just enter your email below and we'll send you a reset
              link.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <InputField
                label="Email address"
                name="email"
                type="email"
                required={true}
                value={email}
                onChange={handleEmailChange}
              />
              <div className="text-center">
                <TransparentButton>Reset Password</TransparentButton>
              </div>
                <div className="text-sm text-center">
                  <Link
                    to="/login"
                    className="font-medium text-white"
                  >
                    Back to login page
                  </Link>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
