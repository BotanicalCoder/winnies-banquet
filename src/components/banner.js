import React from "react";
import styled from "styled-components";
import myimg from "../img/img-6.jpg";

const Banner = () => {
  return (
    <Mydiv id="home">
      <img src={myimg} alt="food on dining table" className="img" />
    </Mydiv>
  );
};
const Mydiv = styled.div`
  margin: 6em 0em 5em 0em;
  padding: 0em;
  width: 100%;
  position: relative;

  .img {
    margin-right: 0em;
    margin-left: 0em;
    padding: 0.5em;
    height: 60vh;
    width: 100%;
  }
`;

export default Banner;
