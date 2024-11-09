import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderFeatures } from './components/features.js';
import { renderTestimonials } from './components/testimonials.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';

function initApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${renderNavbar()}
        <main>
            ${renderHero()}
            ${renderAbout()}
            ${renderFeatures()}
            ${renderTestimonials()}
            ${renderContact()}
        </main>
        ${renderFooter()}
    `;
}

document.addEventListener('DOMContentLoaded', initApp);