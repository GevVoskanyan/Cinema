import React, { useCallback, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import BuyTicketSteps from "../../common/BuyTicketSteps/BuyTicketSteps";
import AboutSeats from "../../common/AboutSeats/AboutSeats";
import "./Hall.scss";
import Seats from "../../common/Seats/Seats";
import { Link } from "react-router-dom";

function Hall(props) {
  return (
    <section className="seats">
      <Wrapper>
        <div className="seats__container">
          <div className="orange__line" />
          <BuyTicketSteps />
          <div className="hall">
            <AboutSeats />
            <Seats />
          </div>
          <div className="hall_btns">
            <button type="button" className="btn hall_btn_cancel">
              Cancel
            </button>
            <Link to={"ticket/checkout"} className="btn btn_orange">
              Next
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hall;
