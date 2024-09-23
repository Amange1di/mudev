import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import "./dev.css";
import { useTranslation } from "react-i18next";
const Dev = () => {
  const {  i18n } = useTranslation();

  const handleChangeLang = ({ target: { value } }) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className="">
    <div className="dev">
      <h1>Eldar <span>dev</span></h1>
      <div className="dev-i">
      <select
            onChange={handleChangeLang}
            style={{
              color: "#fff",
              border: "none",
              outline:"none"
            }}
          >
            <option value="en">En</option>
            <option value="ru">Ru</option>
          
          </select>
        <a href="https://www.instagram.com/eldar_nurdinov/">
          <FaInstagram className="icon-dev" />
        </a>
        <a href="https://github.com/Eldarnurdinov">
          <FiGithub className="icon-dev" />
        </a>
        {/* <a href="https://web.telegram.org/k/#6528750190">
          <RiTelegramLine className="icon-dev" />
        </a> */}
      </div>
    </div></div>
  );
};

export default Dev;
