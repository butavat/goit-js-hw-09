'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';


form.addEventListener('input', (event) => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(storageKey, JSON.stringify(formData));
});


document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem(storageKey);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  
  if (formData.email && formData.message) {
    console.log(formData); 
    localStorage.removeItem(storageKey); 
    emailInput.value = ''; 
    messageInput.value = ''; 
  }
});