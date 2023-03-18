import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { IoSettings } from 'react-icons/io5'
import { MdAnalytics, MdDiscount, MdSpaceDashboard } from 'react-icons/md'
import { SiCoinmarketcap } from 'react-icons/si'
import { Link } from 'react-router-dom'

const SidebarMobile = ({ResponsiveNav, navbarState, currentLink, setCurrentLink, handleLogout }) => {
  return (
    <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
    <div className="responsive__links">
      <ul>
        <li
          className={currentLink === 1 ? "active" : "none"}
          onClick={() => setCurrentLink(1)}
        >
          <a href="#">
            <MdSpaceDashboard />
            <span> Dashboard</span>
          </a>
        </li>
        <li
          className={currentLink === 2 ? "active" : "none"}
          onClick={() => setCurrentLink(2)}
        >
          <a href="#">
            <SiCoinmarketcap />
            <span> Markets</span>
          </a>
        </li>
        <li
          className={currentLink === 3 ? "active" : "none"}
          onClick={() => setCurrentLink(3)}
        >
          <a href="#">
            <AiOutlineUnorderedList />
            <span> Shopping Lists</span>
          </a>
        </li>
        <li
          className={currentLink === 4 ? "active" : "none"}
          onClick={() => setCurrentLink(4)}
        >
          <a href="#">
            <MdAnalytics color="white"  />
            <span>Budget Analytics</span>
          </a>
        </li>
        <li
          className={currentLink === 5 ? "active" : "none"}
          onClick={() => setCurrentLink(5)}
        >
          <a href="#">
            <MdDiscount />
            <span>Deals</span>
          </a>
        </li>
        <li
          className={currentLink === 6 ? "active" : "none"}
          onClick={() => setCurrentLink(6)}
        >
          <a href="#">
            <IoSettings />
            <span>Settings</span>
          </a>
        </li>
        <div className="text-white flex items-center justify-center">
          <Link to="/">
            <span onClick={handleLogout}>Logout</span>
          </Link>
        </div>
      </ul>
    </div>
  </ResponsiveNav>
  )
}

export default SidebarMobile