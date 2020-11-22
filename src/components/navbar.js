import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const navToggle = () => {
    let hlist = document.getElementsByClassName("hlist");
    document.getElementById("icon").style.display = "none";
    for (let i = 0; i < hlist.length; i++) {
      hlist[i].style.display = "inline-block";
    }

    console.log("toggle activated");
  };
  return (
    <MyNav>
      <ul>
        <li>
          <h3 className="logo">
            {" "}
            <a href="#home">Winnies~banquet </a>
          </h3>
        </li>
        <li id="icon" onClick={navToggle}>
          <FaBars />
        </li>
        <li className="hlist  first">
          <a href="#about">ABOUT</a>
        </li>
        <li className="hlist">
          {" "}
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </MyNav>
  );
};

const MyNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  margin-right: -9em;
  z-index:100;
  background-color: rgb(228, 225, 225);
  color: black;
  font-size: large;
  margin-top: -2em;
  margin-left: 0em;
  margin-right: -2em;

  ul {
    list-style-type: none;
    position: relative;
  }
  ul li {
    display: inline-block;
    padding: 0.5em 0.45em 0em 0em;
    font-weight: bolder;
  }
  .logo {
    padding-right: 6.5em;
    font-size: larger;
  }
  #icon {
    font-weight: bolder;
    font-size: larger;
  }
  a {
    text-decoration: none;
  }
  li a:link {
    color: black;
  }
  li a:visited {
    color: black;
  }
  li a:hover {
    color: blue;
  }
  li a:active {
    color: ;
  }
  @media screen and (max-width: 450px) {

    margin-top: -2em;
    margin-left: -0.2em;
    margin-right: -5em;
   
    ul li {
      display: inline-block;
      padding: 0.5em 0.9em 0em 0em;
      font-weight: bolder;
    }

    .hlist {
      display: none;
    }

    .logo {
      padding-right: 4em;
      font-size: larger;
    }
    #icon {
      font-weight: bolder;
      font-size: larger;
    }
  }
  @media screen and (min-width: 450px) {
    ul li {
      padding: 0.5em 1em 0em 1em;
    }
    .hlist {
      display: inline-block;
    }
    .first {
      margin-left: 19em;
    }
    #icon {
      display: none;
    }
  }
`;

export default Navbar;
