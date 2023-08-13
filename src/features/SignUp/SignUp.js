import React from "react";
import "./SignUp.scss";
import Wrapper from "./../Wrapper/Wrapper";

function SignUp(props) {
  return (
    <section className="sign_up">
      <Wrapper>
        <div className="sign_up_container">
          <form className="sign_up_form">
            <h2 className="sign_up_form_title">SIGN UP</h2>
            <div className="sign_up_form_fileds">Fill in all Fileds</div>
            <div>
              <label
                htmlFor="photo_loader"
                className="sign_up_form_photo_loader"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo_loader"
                style={{ display: "none" }}
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Username"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="City"
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Email"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Country"
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Password"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Adress"
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Repeat Password"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Phone"
              />
            </div>
            <div className="sign_up_form_cart_data">
              <div className="sign_up_form_cart_data_cart">
                <h3 className="sign_up_form_cart_data_cart_title">VISA</h3>
                {/* dotes */}
                <div className="sign_up_form_cart_data_cart_dotes_container">
                  <div className="sign_up_form_cart_data_cart_dotes">
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                  </div>
                  <div className="sign_up_form_cart_data_cart_dotes">
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                  </div>
                  <div className="sign_up_form_cart_data_cart_dotes">
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                  </div>
                  <div className="sign_up_form_cart_data_cart_dotes">
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                    <span className="sign_up_form_cart_data_cart_dote">.</span>
                  </div>
                </div>
                <div className="sign_up_form_cart_data_info">
                  <div className="sign_up_form_cart_data_info_userName">
                    <div className="sign_up_form_cart_data_info_name">Name</div>
                    <div className="sign_up_form_cart_data_info_surname">
                      Surname
                    </div>
                  </div>
                  <div className="sign_up_form_cart_data_info_date">.. /..</div>
                </div>
              </div>
              <div className="sign_up_form_cart_data_info_inp_container">
                <input
                  type="text"
                  className="sign_up_form_cart_data_info_inp_container_inp"
                  placeholder="Name on Card"
                />
                <input
                  type="text"
                  className="sign_up_form_cart_data_info_inp_container_inp"
                  placeholder="Card Number"
                />
                <div className="sign_up_form_cart_data_info_inp_container_date">
                  <input
                    type="text"
                    className="sign_up_form_cart_data_info_inp_container_date_inp"
                    placeholder="mm"
                  />
                  <span className="sign_up_form_cart_data_info_inp_container_date_line">
                    -
                  </span>
                  <input
                    type="text"
                    className="sign_up_form_cart_data_info_inp_container_date_inp"
                    placeholder="dd"
                  />
                  <span className="sign_up_form_cart_data_info_inp_container_date_line">
                    -
                  </span>
                  <input
                    type="text"
                    className="sign_up_form_cart_data_info_inp_container_date_inp"
                    placeholder="yy"
                  />
                </div>
              </div>
            </div>
          </form>
          <button className="btn sign_up_form_btn">Done</button>
        </div>
      </Wrapper>
    </section>
  );
}

export default SignUp;
