export function renderAbout() {
    return `
        <section class="about" id="about">
            <div class="container">
                <h2 class="section-title">Who We Are</h2>
                <div class="about-grid">
                    <div class="about-content">
                        <h3>Innovating Since 2010</h3>
                        <p>With over a decade of experience, we've been at the forefront of technological innovation, helping businesses transform and adapt to the digital age.</p>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-number">500+</span>
                                <span class="stat-label">Projects Completed</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">200+</span>
                                <span class="stat-label">Happy Clients</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">50+</span>
                                <span class="stat-label">Team Members</span>
                            </div>
                        </div>
                    </div>
                    <div class="about-image">
                        <img src="https://picsum.photos/600/400" alt="About TechCorp">
                    </div>
                </div>
            </div>
        </section>
    `;
}