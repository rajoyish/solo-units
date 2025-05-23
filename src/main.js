// src/main.js
import './style.css';
import { renderConversions } from './dom.js';
import { setupClipboard } from './clipboard.js';

const inputEl = document.querySelector('.unit--form-input');
const convertBtn = document.querySelector('.unit--convert-btn');
const form = convertBtn.closest('form');

function handleConvert(e) {
  e.preventDefault();
  const value = parseFloat(inputEl.value);
  if (isNaN(value)) {
    alert('Please enter a valid number.');
    return;
  }
  renderConversions(value);
}

// Initial render on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const defaultValue = parseFloat(inputEl.value);
  if (!isNaN(defaultValue)) {
    renderConversions(defaultValue);
  }
});

// Use form submit event (better UX)
form.addEventListener('submit', handleConvert);

// Setup one-time clipboard event delegation
setupClipboard(document.querySelector('.unit--conversion-wrapper'));
