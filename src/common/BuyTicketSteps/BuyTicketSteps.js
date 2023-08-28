import React from "react";
import "./BuyTicketSteps.scss";

function BuyTicketSteps(props) {
  return (
    <div className="ticket_steps">
      <div className="ticket_steps_container">
        <div className="ticket_steps_circle active_circle" />
        <div className="ticket_steps_circle_title">
          <span className="ticket_steps_circle_title_num">1. </span> Tickets
        </div>
      </div>
      <div className="ticket_steps_line" />
      <div className="ticket_steps_container">
        <div className="ticket_steps_circle" />
        <div className="ticket_steps_circle_title">
          <span className="ticket_steps_circle_title_num">2. </span> Seats
        </div>
      </div>
      <div className="ticket_steps_line" />
      <div className="ticket_steps_container">
        <div className="ticket_steps_circle" />
        <div className="ticket_steps_circle_title">
          <span className="ticket_steps_circle_title_num">3. </span> Checkout
        </div>
      </div>
    </div>
  );
}

export default BuyTicketSteps;
