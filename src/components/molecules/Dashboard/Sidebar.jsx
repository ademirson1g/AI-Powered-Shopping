import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FaMoneyBill } from "react-icons/fa";
import { MdAnalytics, MdDiscount } from 'react-icons/md'
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import { auth } from "../../firebaseConfig/firebaseConfig";
import { FiLogOut } from "react-icons/fi";
import SidebarMobile from "./DashboardMobile/SidebarMobile";
import { TiMessages } from "react-icons/ti";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);

  const location = useLocation();

  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const handleLogout = () => {
    auth.signOut();
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setCurrentLink(1);
        break;
      case "/markets":
        setCurrentLink(2);
        break;
      case "/shopping_list":
        setCurrentLink(3);
        break;
      case "/budget_analytics":
        setCurrentLink(4);
        break;
      case "/deals":
        setCurrentLink(5);
        break;
      case "/messages":
        setCurrentLink(6);
        break;
      case "/settings":
        setCurrentLink(7);
        break;
      default:
        setCurrentLink(null);
    }
  }, [location.pathname]);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaMoneyBill />
            <span>Budget Wizzard</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to="/dashboard">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to="/markets">
                  <SiCoinmarketcap />
                  <span> Markets</span>
                </Link>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <Link to="/shopping_list">
                  <AiOutlineUnorderedList />
                  <span> Shopping Lists</span>
                </Link>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to="/budget_analytics">
                  <MdAnalytics color="white" />
                  <span> Budget Tracker</span>
                </Link>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to="/deals">
                  <MdDiscount />
                  <span> Deals</span>
                </Link>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <Link to="/messages">
                  <TiMessages />
                  <span>Messages</span>
                </Link>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}
              >
                <Link to="/settings">
                  <IoSettings />
                  <span>Settings</span>
                </Link>

              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <Link to="/">
            <FiLogOut />
            <span className="logout" onClick={handleLogout}>
              Logout
            </span>
          </Link>
        </div>
      </Section>
      <SidebarMobile
        Section={Section}
        ResponsiveNav={ResponsiveNav}
        navbarState={navbarState}
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
        handleLogout={handleLogout}
      />
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: white;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: white;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`
