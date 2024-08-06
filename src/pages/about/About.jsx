import React, { useState } from "react";
// import lampa from "../../assets/image.png"
import lampa2 from "../../assets/image.png"
import okurmen from "../../assets/ser.png"

import { FaDownload } from "react-icons/fa";
import "./about.css"
import { useTranslation } from "react-i18next";
const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const { t } = useTranslation();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDownload = () => {
    // Replace 'ppp.pdf' with the actual URL or path to your PDF file
    const pdfUrl = 'ppp.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'resume.pdf');
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  };

  return (

    <div className="container about">
      {/* <img className="lampa" src={lampa} alt="" /> */}
      <div className="text">
        <h1>
          <span>Simplicity </span>  
             and <span>  functionality </span>  
           in every line of <span>code.</span>
        </h1>
        <br />

        <h4>{t("Hi, my name is Amangeldi")}</h4>
        <button className="Download" onClick={handleDownload}>
          <FaDownload className="Down" />{t("Download CV")}
        </button>
        <div className="namer">
          <div>
            <h3>0</h3>
            <h5>{t("YEARS OF")} <br /> {t("EXPERIENCE")}</h5>
          </div>
          <div>
            <h3>0</h3>
            <h5>{t("SATISFIED")}  <br />{t("CLIENTS")} </h5>
          </div>
          <div>
            <h3>4</h3>
            <h5>{t("FINISHED")} <br />{t("PROJECTS")} </h5>
          </div>
          <div>
            <h3>2</h3>
            <h5> {t("PET")} <br />{t("PROJECTS")} </h5>
          </div>
        </div>
      </div>
      <div className="sk">
        <div className="tabs">
          <button
            className={activeTab === "skills" ? "active" : ""}
            onClick={() => handleTabClick("skills")}
          >
            {t("Skills")}
          </button>
          <button
            className={activeTab === "awards" ? "active" : ""}
            onClick={() => handleTabClick("awards")}
          >
            {t("Experience")}
          </button>
          <button
            className={activeTab === "certifications" ? "active" : ""}
            onClick={() => handleTabClick("certifications")}
          >
           {t("Certifications")} 
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "skills" && (
            <div>
              <ul>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=html,css,js"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react,vite,redux"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=scss,tailwind,bootstrap"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          )}
          {activeTab === "awards" && <div>
            aman
            
            </div>}
          {activeTab === "certifications" && <div className="certificationsGeneral">
            
            <img className="certifications" src={okurmen} alt="" />
            <img className="certifications" src={okurmen} alt="" />
            <img className="certifications" src={okurmen} alt="" />
            <img className="certifications" src={okurmen} alt="" />
            
            </div>}
        </div>
        <img className="lampa2" src={lampa2} alt="" />
      </div>
    </div>
  );
};

export default About;
