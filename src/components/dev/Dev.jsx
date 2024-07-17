import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import "./dev.css";

const Dev = () => {
  return (
    <div className="">
    <div className="dev">
      <h1>Amangeldi <span>dev</span></h1>
      <div className="dev-i">
        <a href="https://www.instagram.com/_.amangeldi_._/">
          <FaInstagram className="icon-dev" />
        </a>
        <a href="https://github.com/Amange1di">
          <FiGithub className="icon-dev" />
        </a>
        <a href="https://web.telegram.org/k/#6528750190">
          <RiTelegramLine className="icon-dev" />
        </a>
      </div>
    </div></div>
  );
};

export default Dev;
