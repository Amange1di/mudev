import React from 'react';
import Slider from 'react-slick';
import foodImage from '../../assets/food.png';
import weatgerImage from '../../assets/weather.png';
import musicImage from '../../assets/music.png';
import skycityImage from '../../assets/skycity.png';
import exlusiveImage from '../../assets/exclusive.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './project.css'; // Импортируем файл стилей CSS для компонента Project

const projects = [
  {
    title: "Food",
    image: foodImage,
    description: "bir nerse bir nerse bir nerse bir nerse  ",
    link: "https://food-ro9g.vercel.app/"
  },
  {
    title: "Weather",
    image: weatgerImage,
    description: "bir nerse bir nerse bir nerse bir nerse  ",
    link: "https://weather111.vercel.app/"
  },
  {
    title: "Music",
    image: musicImage,
    description: "bir nerse bir nerse bir nerse bir nerse  ",
    link: "https://food-ro9g.vercel.app/"
  },
  {
    title: "Skycity",
    image: skycityImage,
    description: "bir nerse bir nerse bir nerse bir nerse  ",
    link: "https://skycity-gnoxj0if9-aman-mairambek-uulus-projects.vercel.app/"
  },
  {
    title: "Exlusive",
    image: exlusiveImage,
    description: "bir nerse bir nerse bir nerse bir nerse  ",
    link: "https://ex-store-tau.vercel.app/"
  },

];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Убираем кнопки "влево" и "вправо"
    autoplay: true, // Включаем автоплей
    autoplaySpeed: 10000, // Устанавливаем скорость автоплея в миллисекундах (10 секунд)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850, // Изменяем breakpoint с 600 на 850
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className='project-text'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;