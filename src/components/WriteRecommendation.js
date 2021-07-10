import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";
import "easymde/dist/easymde.min.css";

class WriteRecommendation extends Component {
  state = {
    name: "",
    Company: "",
    Designation: "",
    message: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (handler, event) => {
    event.preventDefault();

    let isSuccessful = true;
    let { name, Company, Designation, message } = this.state;

    if (
      isSuccessful &&
      name.length &&
      Company.length &&
      Designation.length &&
      message.length > 0
    ) {
      this.setState({
        submitMessage: "Thank you so much!! I appreciate it.",
        submitMessageTextColor: "text-info",
      });
    } else if (name || Company || Designation || message < 1) {
      this.setState({
        submitMessage: "Please fill the box :( .",
        submitMessageTextColor: "text-danger",
      });
    } else {
      this.setState({
        submitMessage: "Oops. Something went wrong. Please try again later",
        submitMessageTextColor: "text-danger",
      });
    }
    const newRecommendation = {
      id: uuid(),
      name: this.state.name,
      Company: this.state.Company,
      Designation: this.state.Designation,
      message: this.state.message,
    };

    handler("ADD-RECOMMENDATION", newRecommendation);
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { submitMessageTextColor, submitMessage } = this.state;
          const { handler } = value;
          return (
            <div className="container my-5 py-5 ">
              <h1 className="text-center">
                <span className="text-info">Thank you!</span> for kindly taking
                your time
              </h1>
              <div className="row justify-content-center py-5 ">
                <div className="col col-12 col-md-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group ">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="Company">Company/Institution*</label>
                      <input
                        type="text"
                        name="Company"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="Designation">Designation *</label>
                      <input
                        type="text"
                        name="Designation"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Recommendation *</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-dark   my-3 "
                      type="submit"
                      style={{ backgroundColor: "red" }}
                    >
                      Lots of love!
                    </button>
                  </form>
                </div>
              </div>
              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WriteRecommendation;
