import React, { useState } from 'react';

import './header.css'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header>
        <h1>Портфолио</h1>


      </header>


      <nav>


        <a href="/" className="glow-on-hover">


          <button type="button">ГЛАВНАЯ</button>


        </a>
        <a href="/projects" className="glow-on-hover">


          <button type="button">ПРОЕКТЫ</button>


        </a>
        <a href="/gallery" className="glow-on-hover">


          <button type="button">ГАЛЕРЕЯ</button>


        </a>
        <a href="/contacts" className="glow-on-hover">


          <button type="button">КОНТАКТЫ</button>
        </a>
        <a href="/services" className="glow-on-hover">


        <button type="button">УСЛУГИ</button>
        </a>
      
        <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="/avatar/2.jpg"
          sx={{ width: 60, height: 60, marginLeft: 'auto' }}
          onClick={handleAvatarClick}
        />

        <Modal open={isModalOpen} onClose={handleCloseModal} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         
          <div className="modal-content">
            <Avatar
              alt="Remy Sharp"
              src="/avatar/2.jpg"
              sx={{ width: '200px', height: '200px' }}
              onClick={handleCloseModal}
            />
             <h1>Гуренко Кристина Викторовна</h1>
            <h1>Специалист веб-дизайн и разработка сайтов</h1>
<p>JavaScript, HTML/CSS, React, Wordpress, Figma, Vue, Node, адаптивность, верстка, дизайн сайта.</p>
<p>Профессиональные навыки:</p>
<p>- опыт работы с HTML5, CSS3, JS;</p>
<p>- знание JavaScript</p>
<p>- опыт адаптивной верстки;</p>
<p>- опыт создания HTML;</p>
<p>-страницы сайта на основе дизайн-макетов (Figma);</p>
<p>- опыт вёрстки сайтов и шаблонов для CMS( Wordpress);</p>
<p>- навыки привязки к пользовательскому интерфейсу скриптов, которые обеспечивают визуализацию и анимацию страниц сайта;</p>
<p>- навыки обеспечения необходимого уровня пользовательского интерфейса (UI - User
Interface) и опыта взаимодействия (UX — Uzer Experience);</p>
<p>- знание CSS-фреймворков;</p>
<p>- знание кросс-браузерной верстки;</p>
<p>- знания PhotoShop;</p>
           
            <h3>выпускник: Московского финансово-промышленный университета «Синергия»</h3>
          
          </div>
        </Modal>
        </Stack>


      </nav >



    </>
  );
};


export default Header;