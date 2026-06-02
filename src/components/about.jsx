import { Server, ShieldCheck, Cpu, Layout } from 'lucide-react';

function About() {
  const pillars = [
    {
      icon: <Server className="feature-icon" size={24} />,
      title: 'Java & Spring Boot',
      desc: 'Building RESTful APIs and backend modules with Java, Spring Boot, Spring Security, JWT, and MySQL.'
    },
    {
      icon: <Layout className="feature-icon" size={24} />,
      title: 'Frontend Basics',
      desc: 'Creating responsive user interfaces using HTML, CSS, JavaScript, and React basics.'
    },
    {
      icon: <ShieldCheck className="feature-icon" size={24} />,
      title: 'Auth & Integrations',
      desc: 'Implementing authentication, authorization, email workflows, payment integration, and CRUD features.'
    },
    {
      icon: <Cpu className="feature-icon" size={24} />,
      title: 'Databases & Testing',
      desc: 'Working with MySQL, MongoDB, SQLite/MySQL through Django ORM, Postman, Selenium WebDriver, and TestNG.'
    }
  ];

  const stats = [
    { number: '2024', label: 'MCA Graduate', desc: 'Capital Engineering College | BPUT' },
    { number: '7.46', label: 'MCA CGPA', desc: 'Academic foundation' },
    { number: '8.68', label: 'B.Sc. CS CGPA', desc: 'Utkal University' },
    { number: '2', label: 'Portfolio Projects', desc: 'RetailHub & Eatero' }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic & Skills Overview</span>
          <h2 className="section-title">About <span>My Profile</span></h2>
          <p className="section-desc">
            Motivated MCA graduate with practical experience building full stack web applications, seeking to launch a career as a Java Full Stack Developer.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Bringing computing fundamentals into practical Java full stack and web application development.
            </h3>
            <p>
              I am a Master of Computer Applications graduate with a solid understanding of software engineering principles, Java programming, Python, web technologies, and database design. My strongest project work is RetailHub, a Java Spring Boot e-commerce application with authentication, product management, orders, reviews, email notifications, and payment integration.
            </p>
            <p>
              I have also built Eatero, a Django-based food ordering application with restaurant/menu management and CRUD workflows. I am comfortable learning quickly, collaborating in teams, and using tools such as Git, GitHub, VS Code, Postman, Selenium WebDriver, and TestNG.
            </p>
            
            <div className="about-features">
              {pillars.map((pillar, idx) => (
                <div className="feature-box" key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {pillar.icon}
                    <h4>{pillar.title}</h4>
                  </div>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, idx) => (
              <div className="glass-card stat-card" key={idx}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
