import React from "react";
import styled from "styled-components";

import { cardStyles } from "../../../styles/CardStyle";
import withAuth from "../../hoc/withAuth";
import TransparentButton from "../../atoms/TransparentButton";

function Profile({ user }) {
  const { name, photoUrl } = user;

  return (
    <Section>
      <div className="image cursor-pointer">
        <img src={photoUrl} alt="" />
      </div>
      <div className="title mt-2">
        <h2>{name}</h2>
      </div>
      <div className="info">
        <div className="container">
          <h5 className="italic">Deals catched</h5>
          <h3 className="mt-2 font-bold">28</h3>
        </div>
        <div className="container">
          <h5 className="italic">Shopping Lists made</h5>
          <h3 className="mt-2 font-bold">427</h3>
        </div>
        <div className="container">
          <h5 className="italic">Markets </h5>
          <h3 className="mt-2 font-bold">76</h3>
        </div>
      </div>
      <TransparentButton>
        <h2 className="text-black"> Check out Todays Deals</h2>
      </TransparentButton>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
export default withAuth(Profile);
