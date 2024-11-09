import { createHeader } from './components/Header';
import { createHero } from './components/Hero';
import { createFeatures } from './components/Features';
import { createCTA } from './components/CTA';
import { createFooter } from './components/Footer';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `
      ${createHeader()}
      <main>
        ${createHero()}
        ${createFeatures()}
        ${createCTA()}
      </main>
      ${createFooter()}
    `;
  }
});