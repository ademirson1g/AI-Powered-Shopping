import React from "react";
import styled from "styled-components";
import { cardStyles } from "../../../styles/CardStyle";
import TransparentButton from "../../atoms/TransparentButton";
import { Link } from "react-router-dom";

export default function MonthSavingDashboard() {
  return (
    <Section>
      <div className="title">
        <h2>Messages</h2>
        <Link to="/messages">
          <div className="text-center mt-20">
            <TransparentButton>
              Click to Open Messages
            </TransparentButton>
          </div>
        </Link>
      </div>

    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transaction {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__title {
      display: flex;
      gap: 1rem;
      &__image {
        img {
          height: 2.5rem;
          border-radius: 3rem;
        }
      }
      &__details {
      }
    }
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
