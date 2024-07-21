import React from 'react'
import "./home.css"
import user from "../../assets/user.png"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
    <div className="container">

      <div id="text">
        <h1>
         {t("I am a Front-End Developer")}  <br />
          <span>{t("I live in Bishkek, Kyrgyzstan.")}</span>
        </h1>

      
      </div>  <img src={user} alt="user" />
    </div>
    </div>
  )
}

export default Home