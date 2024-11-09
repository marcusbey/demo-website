export function renderNavbar(currentPage: string): string {
  return `
    <nav class="navbar">
      <div class="nav-content container">
        <div class="logo">TechCorp</div>
        <ul class="nav-links">
          <li><a href="./index.html" class="${currentPage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="./about.html" class="${currentPage === 'about' ? 'active' : ''}">About</a></li>
          <li><a href="./services.html" class="${currentPage === 'services' ? 'active' : ''}">Services</a></li>
          <li><a href="./blog.html" class="${currentPage === 'blog' ? 'active' : ''}">Blog</a></li>
          <li><a href="./contact.html" class="${currentPage === 'contact' ? 'active' : ''}">Contact</a></li>
        </ul>
      </div>
    </nav>`;
}