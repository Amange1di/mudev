import React from 'react'
import "./home.css"
import user from "../../assets/user.png"
const Home = () => {
  return (
    <div className="home">
    <div className="container">

      <div id="text">
        <h1>
          I am a Front-End Developer <br />
          <span>based in Bishkek, Kyrgyzstan.</span>
        </h1>

      
      </div>  <img src={user} alt="user" />
    </div>
    </div>
  )
}

export default Home