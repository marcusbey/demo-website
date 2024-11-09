export function renderNavbar() {
    return `
        <nav class="navbar">
            <div class="nav-content container">
                <div class="logo">TechCorp</div>
                <ul class="nav-links">
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;
}