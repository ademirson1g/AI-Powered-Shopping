import React, { useState } from "react";
import styled from "styled-components";

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
