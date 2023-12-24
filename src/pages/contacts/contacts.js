import './contacts.css';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { FaVk, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
function Contacts() {
    return (
        
        <div className='contact-container'>
            <form className="form">
            <TextField classes={{ root: "custom-input" }} id="outlined-basic" label="ФИО" variant="outlined" />
            <TextField classes={{ root: "custom-input" }} id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField classes={{ root: "custom-input" }} id="outlined-basic" label="Сообщение" variant="outlined" />
                <Button className='button-form' variant="contained">ОТПРАВИТЬ</Button> 
                <div className="social-links">
      <a href="https://vk.com/gurenko_kristina" target="_blank" rel="noopener noreferrer">
      <FaVk />
      </a>
      <a href="https://t.me/gurenko_kristina" target="_blank" rel="noopener noreferrer">
      <FaTelegramPlane />
      </a>
      <a href="https://www.instagram.com/gurenko_kristina" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
            </form>
       
   

        </div>
    )
}

export default Contacts;