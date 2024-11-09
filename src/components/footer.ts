export function createFooter(): string {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>TechCorp</h3>
            <p>Transforming businesses through technology</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: info@techcorp.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}