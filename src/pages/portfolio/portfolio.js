import React, { useState } from 'react';
import './portfolio.css';

const projectsData = [
  {
    id: 1,
    images: ['1.png', '2.png', '3.png'],
    figmaLink: 'https://www.figma.com/file/pOTRoLEe6xi3eivQGumZwm/Untitled?type=design&node-id=0%3A1&mode=design&t=cIrW35bSKqHEXRsU-1',
    title: 'Прототип сайта с тремя страницами',
    description: 'Содержание формы регистрации и обратной связи. Основные инструменты работы c UI/UX аналитикой.',
  },
  {
    id: 1,
    images: ['4.png', '5.png', '6.png'],
    figmaLink: 'https://www.figma.com/file/29pRfrzildwmgqr3Xm7mFs/Simple-Starter-Template-v0.1-(Community)?type=design&mode=design',
    title: 'Создание проекта используя дизайн Figma в качестве макета.',
    description: 'Верстка сайтов (HTML5+CSS3)',
  },
  {
    id: 1,
    images: ['7.png', '10.png', '11.png'],
    figmaLink: 'https://github.com/gurenko30/calculator.git',
    title: 'Многостраничный сайт в Wordpress',
    description: 'Разработка сайтов на основе CMS',
  },
  {
    id: 1,
    images: ['15.png', '16.png', '17.png'],
    figmaLink: 'https://kgurenko.ru/',
    title: 'Программирование на языке JavaScript',
    description: 'Создан калькулятор с использованием HTML, CSS и JavaScript',
  },
  {
    id: 1,
    images: ['19.png', '20.png', '21.png'],
    figmaLink: 'https://www.odin.study/ru/ActivitySolution/Index/1233046?userName=%25D0%2593%25D1%2583%25D1%2580%25D0%25B5%25D0%25BD%25D0%25BA%25D0%25BE%2520%25D0%2592%25D0%25B8%25D0%25BA%25D1%2582%25D0%25BE%25D1%2580%25D0%25BE%25D0%25B2%25D0%25BD%25D0%25B0%2520%25D0%259A%25D1%2580%25D0%25B8%25D1%2581%25D1%2582%25D0%25B8%25D0%25BD%25D0%25B0',
    title: ' Описано в текстовом виде база данных сайта онлайн-магазина',
    description: 'Базы данных и SQL',
  },
  {
    id: 1,
    images: ['22.png', '23.png', '24.png'],
    figmaLink: 'https://www.odin.study/ru/ActivitySolution/Index/1233046?userName=%25D0%2593%25D1%2583%25D1%2580%25D0%25B5%25D0%25BD%25D0%25BA%25D0%25BE%2520%25D0%2592%25D0%25B8%25D0%25BA%25D1%2582%25D0%25BE%25D1%2580%25D0%25BE%25D0%25B2%25D0%25BD%25D0%25B0%2520%25D0%259A%25D1%2580%25D0%25B8%25D1%2581%25D1%2582%25D0%25B8%25D0%25BD%25D0%25B0',
    title: ' Создан сайт-портфолио, демонстрирующий мои навыки, проекты и опыт работы в качестве фронтенд-разработчика',
    description: 'Создание портфолио',
  },

];

function Portfolio() {
  const [activeImage, setActiveImage] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = (imageSrc) => {
    setActiveImage(imageSrc);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setActiveImage('');
    setIsOverlayOpen(false);
  };

  const openFigma = (figmaLink) => {
    window.open(figmaLink, '_blank');
  };

  return (
    <div className="portfolio-container">
      {projectsData.map((project) => (
        <div key={project.id} className="project">
          <div className="carousel">
            {project.images.map((image, index) => (
              <div key={index} className="slide" onClick={() => openOverlay(image)}>
                <img src={image} alt={`Фотография ${index + 1}`} />
              </div>
            ))}

          </div>
          <div className="project-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <button className="view-project-button" onClick={() => openFigma(project.figmaLink)}>
            Посмотреть проект
          </button>
        </div>
      ))}

      {isOverlayOpen && (
        <div className="overlay" onClick={closeOverlay}>
          <img src={activeImage} alt="Увеличенное изображение" id="overlay-image" />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
