import React from "react";
import "./Tickets.scss";
import Wrapper from "./../Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import BuyTicketSteps from "./../../common/BuyTicketSteps/BuyTicketSteps";

function Tickets(props) {
  return (
    <section className="tickets">
      <Wrapper>
        <div className="tickets__container">
          <div className="orange__line" />
          <BuyTicketSteps />
          <section className="tickets_film_content"></section>
        </div>
      </Wrapper>
    </section>
  );
}

export default Tickets;
