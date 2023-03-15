import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiFillDownCircle } from "react-icons/ai"
import { FiSettings, FiUser } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"

import { auth } from "../firebaseConfig/firebaseConfig"
import JoinUsButton from "../atoms/JoinUsButton"

const UserProvider = () => {
  const [user, setUser] = useState(null)
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // add loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  const handleLogout = () => {
    auth.signOut()
  }

  const toggleLogoutDropdown = () => {
    setShowLogoutDropdown(!showLogoutDropdown)
  }

  return (
    <div className="relative">
      {isLoading ? ( 
        <div className="text-white">Loading...</div>
      ) : user ? (
        <div className="flex items-center">
          <button className="flex items-center" onClick={toggleLogoutDropdown}>
            <img
              src={user.photoUrl}
              alt="User Profile"
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-white mr-2">{user.name}</span>
            <AiFillDownCircle color="white" />
          </button>
          {showLogoutDropdown && (
            <div className="absolute right-0 top-10 bg-white rounded-lg shadow-md py-2">
              <Link
                to="/dashboard"
                className="block text-black text-left px-4 py-2 bg-white"
              >
                <div className="flex bg-white">
                  <FiUser className="inline-block mr-2 bg-white mt-1" />
                  Dashboard
                </div>
              </Link>
              <Link
                to="/settings"
                className="block text-black text-left px-4 py-2 bg-white"
              >
                <div className="bg-white">
                  <FiSettings className="inline-block mr-2 bg-white" />
                  Settings
                </div>
              </Link>
              <Link to="/">
                <button
                  onClick={handleLogout}
                  className="block text-black text-left px-4 py-2"
                >
                  <div className="bg-white">
                    <BiLogOut className="inline-block mr-2 bg-white mb-1" />
                    Logout
                  </div>
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Link to="/register">
          <JoinUsButton />
        </Link>
      )}
    </div>
  )
}

export default UserProvider
