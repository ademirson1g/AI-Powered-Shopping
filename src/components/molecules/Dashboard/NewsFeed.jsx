import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { cardStyles } from "../../../styles/CardStyle";
import { Link } from "react-router-dom";

export default function NewsFeed() {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/deals')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => alert('Error fetching data:', error));
}, []);
  
  return (
    <Section>
      <div className="title">
        <h2>News feed</h2>
      </div>
      <div className="transactions">
      {items.slice(0, visibleItems).map(item => (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={item.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>Marketplace Name : {item.market_name}</h3>
                  <h5 className="italic">Item : {item.lowest_item}</h5>
                  <h5 className="italic">Price of Today : {item.lowest_price}€</h5>
                </div>
              </div>
            </div>
       ))}
      </div>
      <a className="view" href="#">
        <Link to="/deals">View all </Link>
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
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
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
