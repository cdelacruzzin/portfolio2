import React, { useState } from 'react';

import '../styles/contact.css'
import { validateEmail } from '../utils/helpers';
export default function Contact() {


  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target)

    if (inputType === 'company name') {
      setCompanyName(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setInquiry(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();


    setErrorMessage('');
    if (!name || !validateEmail(email)) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    if(!inquiry) {
      setErrorMessage('Inquiry field cannot be empty.')
      return;
    }

    setCompanyName('');
    setName('');
    setEmail('');
    setInquiry('');

    











  }

  return (
    <div className=''>

      <h1 className='text-center  my-5'>Contact Page</h1>
      <div className='bg-light container rounded-xl p-5 form-container'>

        <form className='d-flex flex-column gap-5' id='contact-form'>
          <label>Company name </label>
          <input
            value={companyName}
            name="company name"
            onChange={handleInputChange}
            type="company name"
            placeholder="company name"
          />

          <label>Name <span>Required</span></label>
          <input
            value={name}
            name='name'
            onChange={handleInputChange}
            type='name'
            placeholder='name'
          ></input>

          <label>Email <span>Required</span></label>
          <input
            value={email}
            name='email'
            type='email'
            onChange={handleInputChange}
            placeholder='email'
          ></input>

          <label>Inquiry <span>Required</span></label>
          <textarea
            value={inquiry}
            name='inquiry'
            type='inquiry'
            onChange={handleInputChange}
            placeholder='Type here'
          ></textarea>

          <div className='d-flex flex-column align-items-center'>
            <button className='submit' type='button' onClick={handleFormSubmit}>send</button>

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>


        </form>


      </div>
    </div>
  );
}
