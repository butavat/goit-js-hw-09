'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

// Відстеження подій input і збереження даних у локальне сховище
form.addEventListener('input', (event) => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(storageKey, JSON.stringify(formData));
});

// Перевірка стану сховища під час завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem(storageKey);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
});

// Очищення сховища та полів форми при сабміті
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  // Перевірка, що обидва елементи форми заповнені
  if (formData.email && formData.message) {
    console.log(formData); // Виведення у консоль об'єкта з даними
    localStorage.removeItem(storageKey); // Очищення сховища
    emailInput.value = ''; // Очищення поля email
    messageInput.value = ''; // Очищення поля message
  }
});