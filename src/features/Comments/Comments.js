import React from "react";
import "./Comments.scss";

function Comments(props) {
  return (
    <>
      <div className="blur"></div>
      <div className="comments">
        <div className="comments__container">
          <h1 className="comments__title">What people say</h1>
        </div>
      </div>
    </>
  );
}

export default Comments;
