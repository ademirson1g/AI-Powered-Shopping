import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

import withAuth from "../../hoc/withAuth";

function Navbar({ user }) {
  const { name } = user;
  const [location, setLocation] = useState("");
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <Nav className="p-2 sm:flex-row sm:justify-between">
    <div className="title">
      <h4 className="text-white ml-2">
        Greetings <b className="italic">{name}</b>
      </h4>
      <h1>
        <span className="italic">Budget Wizzard Dashboard</span>
      </h1>
    </div>
    <div className="location flex-col sm:flex-row items-center mt-2 sm:mt-0">
      <span className="text-white mr-2 mb-4">Please choose your location:</span>
      <select
        value={location}
        onChange={handleLocationChange}
        className="rounded text-black mb-4"
      >
        <option value="">Select location</option>
        <option value="New York">Bosnia and Herzegovina</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Houston">Houston</option>
        <option value="Philadelphia">Philadelphia</option>
        <option value="Phoenix">Phoenix</option>
        <option value="San Antonio">San Antonio</option>
        <option value="San Diego">San Diego</option>
        <option value="Dallas">Dallas</option>
        <option value="San Jose">San Jose</option>
      </select>
    </div>
    <div className="search">
      <BiSearch className="text-white mr-2" />
      <input
        type="text"
        placeholder="Search"
      />
    </div>
  </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .location {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;

export default withAuth(Navbar);
