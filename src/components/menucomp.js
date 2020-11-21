import React from "react";
import styled from "styled-components";

import myimg from "../img/img-1.jpg";
import myimg2 from "../img/img-2.jpg";
import myimg3 from "../img/img-3.jpg";
import myimg4 from "../img/img-4.jpg";
import myimg5 from "../img/img-5.jpg";
import myimg6 from "../img/img-6.jpg";
import myimg7 from "../img/img-7.jpg";
import myimg8 from "../img/img-8.jpg";

const Menucomp = () => {
  return (
    <>
      <Myarticle>
        <h2>OUR MENU</h2>
        <hr />
        <div className="container">
          <div className="part">
            <img src={myimg} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg2} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg3} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg4} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg5} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg6} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg7} alt="cake" />
            <h4>wonderful cake</h4>
          </div>

          <div className="part">
            <img src={myimg8} alt="cake" />
            <h4>wonderful cake</h4>
          </div>
        </div>
      </Myarticle>
    </>
  );
};

const Myarticle = styled.article`
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 1em 1em;
  }

  hr {
    border: 1px solid black;
    margin: -1em 1em 1em 1em;
  }

  h2,
  h4 {
    text-align: center;
    font-size: xx-large;
  }

  .part {
    flex: 100%;
  }

  .part img {
    height: 30vh;
    width: 100%;
  }
  @media screen and (min-width: 450px) {
    .container {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .part {
      flex: 25%;
      margin-left: 0.5em;
    }

    .part img {
      height: 30vh;
      width: 100%;
    }
  }
`;
export default Menucomp;
