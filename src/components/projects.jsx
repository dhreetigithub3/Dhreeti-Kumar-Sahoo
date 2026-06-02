import { useState } from 'react';
import { Cpu, ExternalLink, Layers, ShieldCheck, X, Zap } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'retailhub',
      title: 'RetailHub E-Commerce Platform',
      category: 'java',
      categoryLabel: 'Java Full Stack',
      shortDesc:
        'Full stack e-commerce application with customer and admin modules, secure authentication, product management, cart, orders, reviews, email notifications, and payment integration.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      repoUrl: 'https://github.com/dhreetigithub3/RetailHub',
      art: 'RH',
      architecture: ['HTML/CSS/JavaScript UI', 'Spring Boot Controllers', 'Spring Security + JWT', 'MySQL Database'],
      features: [
        'Developed customer and admin modules for browsing products, managing catalog data, shopping cart, order processing, and reviews.',
        'Implemented secure authentication and authorization using Spring Security and JWT.',
        'Designed RESTful APIs and connected them with MySQL-backed data workflows.',
        'Integrated Brevo Email API for notifications and password reset flows.',
        'Integrated Razorpay payment gateway for secure online transactions.'
      ],
      challenge:
        'The project needed separate customer and admin workflows while keeping authentication, product data, orders, reviews, email, and payment flows organized.',
      solution:
        'Structured the application around clear modules, secured access with Spring Security and JWT, used RESTful endpoints for core operations, and integrated Brevo and Razorpay to support practical e-commerce workflows.',
      backend: 'Java, Spring Boot, Spring Security, JWT',
      database: 'MySQL'
    },
    {
      id: 'eatero',
      title: 'Eatero Food Delivery Platform',
      category: 'python',
      categoryLabel: 'Python Django',
      shortDesc:
        'Food ordering web application built with Django, including restaurant/menu management, CRUD workflows, responsive pages, and ORM-based database operations.',
      tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite/MySQL'],
      repoUrl: 'https://github.com/dhreetigithub3/Eatero',
      art: 'EA',
      architecture: ['HTML/CSS/JavaScript UI', 'Django Views', 'Django Models', 'SQLite/MySQL Database'],
      features: [
        'Developed a food ordering web application using Python and Django.',
        'Implemented restaurant and menu management with Django models and views.',
        'Built CRUD operations for restaurants and food items.',
        'Designed responsive pages using HTML, CSS, and JavaScript.',
        'Used Django ORM for efficient database operations.'
      ],
      challenge:
        'The main goal was to convert food ordering requirements into maintainable Django models, views, templates, and CRUD operations.',
      solution:
        'Used Django ORM and model-view-template patterns to keep restaurant/menu data manageable while delivering responsive user-facing pages.',
      backend: 'Python, Django, Django ORM',
      database: 'SQLite / MySQL'
    }
  ];

  const filteredProjects =
    filter === 'all' ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Developer Portfolio</span>
          <h2 className="section-title">
            Project <span>Case Studies</span>
          </h2>
          <p className="section-desc">
            Resume-aligned project summaries focused on practical full stack development, authentication,
            CRUD workflows, APIs, databases, and integrations.
          </p>
        </div>

        <div className="projects-filter">
          {[
            { id: 'all', name: 'All Work' },
            { id: 'java', name: 'Java Spring Boot' },
            { id: 'python', name: 'Python Django' }
          ].map((button) => (
            <button
              key={button.id}
              className={`filter-btn ${filter === button.id ? 'active' : ''}`}
              onClick={() => setFilter(button.id)}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div className="grid-2">
          {filteredProjects.map((project) => (
            <div className="glass-card project-card" key={project.id}>
              <div className="project-thumbnail-wrapper">
                <div className="project-avatar-art">{project.art}</div>
                <span className="badge badge-accent project-category-badge">{project.categoryLabel}</span>
              </div>
              <div className="project-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span className="badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="badge badge-orange">+{project.tags.length - 4} More</span>
                  )}
                </div>
                <div className="project-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedProject(project)}
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    View Details
                  </button>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    title="View GitHub Repository"
                    style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)' }}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`modal-overlay ${selectedProject ? 'open' : ''}`} onClick={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <div className="modal-header">
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>
                {selectedProject.categoryLabel}
              </span>
              <h3 className="modal-project-title">{selectedProject.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.5' }}>
                {selectedProject.shortDesc}
              </p>
            </div>

            <div className="modal-body">
              <div>
                <h4 className="modal-section-title">
                  <Layers size={18} style={{ color: 'var(--primary)' }} />
                  Technical Structure
                </h4>
                <div className="modal-architecture-box">
                  <div className="arch-row">
                    {selectedProject.architecture.map((item, index) => (
                      <span className="arch-node" key={item}>
                        {item}
                        {index < selectedProject.architecture.length - 1 ? ' ->' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="modal-section-title">
                  <Zap size={18} style={{ color: 'var(--accent-orange)' }} />
                  Key Technical Highlights
                </h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(var(--primary-rgb), 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ef4444',
                    marginBottom: '0.5rem'
                  }}
                >
                  <Cpu size={18} />
                  Development Challenge
                </h4>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}
                >
                  {selectedProject.challenge}
                </p>

                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent)',
                    marginBottom: '0.5rem'
                  }}
                >
                  <ShieldCheck size={18} />
                  Implemented Approach
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {selectedProject.solution}
                </p>
              </div>

              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'center' }}
              >
                View Project Repository <ExternalLink size={16} />
              </a>

              <div className="modal-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Backend</span>
                  <span className="meta-val">{selectedProject.backend}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Frontend</span>
                  <span className="meta-val">HTML, CSS, JavaScript</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Database</span>
                  <span className="meta-val">{selectedProject.database}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Repository</span>
                  <span className="meta-val">{selectedProject.repoUrl}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
