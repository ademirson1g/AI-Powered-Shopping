import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "../../../styles/CardStyle";
import { Link } from "react-router-dom";
export default function DealsOfToday() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "Check out this deal at Robot. Cheap chicken 20% off",
    },
    {
      icon: <MdTimelapse />,
      text: "Check out this deal at Mercator. Cheap drinks 10% off",
    },
    {
      icon: <IoMdCash />,
      text: "Check out this deal at Konzum. Everything 30% off",
    },
  ];
  return (
    <div style={{width:"1500px"}}>
    <Section>
      <div className="title text-center">
        <h2>Top Deals of Today</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq, indexFaq) => {
          return (
            <Link to="/deals">
            <div className="faq" key={indexFaq}>
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
            </Link>
          );
        })}
      </div>
    </Section>
    </div>
  );
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
