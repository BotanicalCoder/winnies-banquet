import React, { Component } from "react";
import styled from "styled-components";

class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      num: "",
      message: " ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: document.getElementById("message").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      num: document.getElementById("num").value,
    });
  }

  handleSubmit(event) {
    const templateId = "template_2d4py0m";
    console.log(this.state);
    this.sendFeedback(templateId, {
      message: this.state.message,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.num,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("Chibueze", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  formPreventDefault(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Myform>
        <h2 id="contact">Contact us</h2>
        <form onSubmit={this.formPreventDefault}>
          <label htmlFor="name">
            name{" "}
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
              id="name"
            />
          </label>
          <br />
          <label htmlFor="email">
            email{" "}
            <input
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              id="email"
            />
          </label>
          <br />
          <label htmlFor="num">
            phone no{" "}
            <input
              type="phone"
              placeholder="phone number"
              value={this.state.num}
              onChange={this.handleChange}
              id="num"
            />
          </label>
          <br />
          <label htmlFor="message">leave a message:</label>
          <textarea
            placeholder="leave a message"
            value={this.state.message}
            onChange={this.handleChange}
            id="message"
          ></textarea>

          <br />
          <input type="submit" value="SUBMIT" onClick={this.handleSubmit} />
        </form>
      </Myform>
    );
  }
}

const Myform = styled.div`
  font-size: xx-large;
  h2 {
    text-align: center;
  }
  background-color: rgb(228, 225, 225);
  form {
    height: 80vh;
    max-width: 50%;
    margin: 1em auto;
  }
  label {
  }
  input {
    padding: 0.5em;
    margin-bottom: 1em;
  }
  #message {
    height: 5em;
    width: 70%;
  }
  color: black;
`;

export default Contactform;
