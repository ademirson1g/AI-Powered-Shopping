import React from "react"
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

import { signInWithGithub, signInWithGoogle } from "../firebaseConfig/firebaseConfig"

const RegisterIcons = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-3 ">
      <div>
        <a
          onClick={signInWithGoogle}
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 cursor-pointer"
        >
          <span className="sr-only">Register with Gmail</span>
          <SiGmail size={20} color="#c71610" />
        </a>
      </div>
      <div>
        <a
          href="#"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium "
        >
          <span className="sr-only">Register with Twitter</span>
          <AiFillTwitterCircle size={20} color="#1DA1F2" />
        </a>
      </div>
      <div>
        <a
          onClick={signInWithGithub}
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium cursor-pointer"
        >
          <span className="sr-only">Register with GitHub</span>
          <AiFillGithub size={20} color="black" />
        </a>
      </div>
    </div>
  )
}

export default RegisterIcons
