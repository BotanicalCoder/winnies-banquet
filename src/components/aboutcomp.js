import React from "react";
import styled from "styled-components";
import myimg from "../img/img-8.jpg";

const Aboutcomp = () => {
  return (
    <>
      <Abtdiv id="about">
        <h2>ABOUT US</h2>
        <hr />
        <div className="abtcontainer">
          <img src={myimg} alt="food" className="myimg" />
          <p className="txt">
            Since the inception of this idea Wnnies banquet our goal has been to
            make people happy by providing them with nuticious food thaat is
            satisfactory and appealing to the soul.{" "}
          </p>
        </div>
      </Abtdiv>
    </>
  );
};
const Abtdiv = styled.div`
  margin-top: 2em;
  word-spacing: 1.6;
  h2 {
    text-align: center;
    font-size: xx-large;
  }
  hr {
    border: 1px solid black;
    margin: -1em 1em 0em 1em;
  }
  .abtcontainer {
    display: flex;
    flex-direction: column;
    margin: 1em 1em;
  }

  .myimg {
    flex: 100%;
    height: 50vh;
    width: 100%;
  }
  .txt {
    flex: 100%;
    font-size: larger;
  }
  @media screen and (min-width: 450px) {
    .abtcontainer {
      display: flex;
      flex-direction: row;
      margin: 1em 1em;
    }
    .myimg {
      height: 50vh;
      width: 60%;
      flex: 60%;
      margin-right: 3em;
    }
    .txt {
      flex: 40%;
      font-size: xx-large;
    }
  }
`;
export default Aboutcomp;
