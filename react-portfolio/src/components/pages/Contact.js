import React, { useState } from 'react';

import '../styles/contact.css'
import { checkPassword, validateEmail } from '../utils/helpers';
export default function Contact() {


  const [companyName, setCompanyName]= useState('');
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [inquiry, setInquiry]= useState('');
  
  const handleInputChange = (e)=>{
    const target = e.target;

    console.log(target);
  }













  return (
    <div className=''>

      <h1 className='text-center  my-5'>Contact Page</h1>
      <div className='bg-light container rounded-xl p-5 form-container'>

        <form className='d-flex flex-column gap-5' id='contact-form'>
          <label>Company name </label>
          <input></input>

          <label>Name <span>Required</span></label>
          <input></input>

          <label>Email <span>Required</span></label>
          <input></input>

          <label>Inquiry <span>Required</span></label>
          <textArea></textArea>

          <div className='d-flex justify-content-center'>
            <button className='submit'>send</button>
          </div>

        </form>


      </div>
    </div>
  );
}
