import { Server, Layout, Database, Terminal, Check } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Logic',
      icon: <Server size={20} />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Problem Solving & OOP', level: 80 }
      ]
    },
    {
      title: 'Web & Frameworks',
      icon: <Layout size={20} />,
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'HTML5 & CSS3 Styling', level: 85 },
        { name: 'JavaScript & React Basics', level: 72 }
      ]
    },
    {
      title: 'Databases & Integration',
      icon: <Database size={20} />,
      skills: [
        { name: 'MySQL', level: 82 },
        { name: 'MongoDB', level: 70 },
        { name: 'SQLite / Django ORM', level: 72 }
      ]
    },
    {
      title: 'Tools & Build Systems',
      icon: <Terminal size={20} />,
      skills: [
        { name: 'Postman API Client', level: 85 },
        { name: 'Selenium WebDriver & TestNG', level: 72 },
        { name: 'Git, GitHub & VS Code', level: 78 }
      ]
    }
  ];

  const tools = [
    'Java', 'Python', 'Spring Boot', 'Spring Security', 'JWT',
    'Django', 'HTML', 'CSS', 'JavaScript', 'React Basics',
    'MySQL', 'MongoDB', 'SQLite', 'Postman', 'Selenium WebDriver',
    'TestNG', 'Git', 'GitHub', 'VS Code', 'Brevo Email API',
    'Razorpay Payment Gateway'
  ];

  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Competence</span>
          <h2 className="section-title">My <span>Technical Stack</span></h2>
          <p className="section-desc">
            A focused overview of the technologies listed in my resume and used across my academic and personal projects.
          </p>
        </div>

        <div className="skills-container">
          <div className="grid-2">
            {skillCategories.slice(0, 2).map((category, idx) => (
              <div className="glass-card skills-category-card" key={idx}>
                <h3>
                  <span>{category.icon}</span> {category.title}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <div className="skill-item" key={sIdx}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div
                          className="skill-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid-2">
            {skillCategories.slice(2, 4).map((category, idx) => (
              <div className="glass-card skills-category-card" key={idx}>
                <h3>
                  <span>{category.icon}</span> {category.title}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <div className="skill-item" key={sIdx}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div
                          className="skill-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools and utilities */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: 'var(--primary)' }}><Terminal size={20} /></span>
              Developer Tools & Workflows
            </h3>
            <div className="tools-cloud">
              {tools.map((tool, idx) => (
                <div className="tool-tag" key={idx}>
                  <Check size={14} style={{ color: 'var(--accent)' }} />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
