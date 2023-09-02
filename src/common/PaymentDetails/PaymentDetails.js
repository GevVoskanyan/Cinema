import React from "react";
import "./PaymentDetails.scss";
import Cart from "./../Cart/Cart";
import CartForm from "./../CartForm/CartForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function PaymentDetails(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="payment">
      <h2 className="payment__title">Payment Details</h2>
      <div className="payment__content">
        <Cart />
        {!isFormOpen && (
          <div className="payment_new_cart">
            Add new cart
            <button
              className="payment_new_cart_btn"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              +
            </button>
          </div>
        )}
        {isFormOpen && <CartForm />}
      </div>
      <Link to="" className="btn btn_orange">
        Next
      </Link>
    </div>
  );
}

export default PaymentDetails;
