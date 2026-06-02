import { useState } from 'react';
import { Award, Calendar, CheckCircle, Clipboard, Download, GraduationCap } from 'lucide-react';

function Resume() {
  const [copied, setCopied] = useState(false);

  const educationData = [
    {
      title: 'Master of Computer Applications (MCA)',
      company: 'Capital Engineering College, Khordha',
      date: 'Class of 2024',
      bullets: [
        'University: BPUT.',
        'Academic Performance: CGPA 7.46.',
        'Relevant Focus: Java, Spring Boot, database design, software development, and full stack project implementation.'
      ]
    },
    {
      title: 'B.Sc. (Hons.) Computer Science',
      company: 'R P Degree Residential College',
      date: 'Class of 2021',
      bullets: [
        'University: Utkal University.',
        'Academic Performance: CGPA 8.68.',
        'Built a foundation in programming, database concepts, web technologies, and computer science fundamentals.'
      ]
    }
  ];

  const trainingData = [
    {
      title: 'Project-Based Full Stack Practice',
      company: 'Academic and personal portfolio work',
      date: 'Resume-backed',
      bullets: [
        'Applied Java, Spring Boot, Spring Security, JWT, MySQL, Python, Django, HTML, CSS, and JavaScript in practical web projects.',
        'Used Postman for API testing and listed Selenium WebDriver with TestNG as testing tools.',
        'No formal certifications are listed in the current resume.'
      ]
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sahoodhreetikumar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Credentials</span>
          <h2 className="section-title">My <span>Education & Training</span></h2>
          <p className="section-desc">
            A chronological outline of my academic degrees, university performance, training focus, and resume-backed technical competence.
          </p>
        </div>

        <div className="resume-layout">
          {/* Timeline column */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <GraduationCap size={22} style={{ color: 'var(--primary)' }} />
              Education History
            </h3>

            <div className="timeline">
              {educationData.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <span className="timeline-company">{item.company}</span>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.5rem', margin: '3rem 0 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Award size={22} style={{ color: 'var(--primary)' }} />
              Training & Certifications
            </h3>

            <div className="timeline">
              {trainingData.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <span className="timeline-company">{item.company}</span>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter sidebar panel */}
          <div className="recruiter-panel">
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3>Recruiter Desk</h3>
              <p>
                Download my CV or get in touch directly to discuss entry-level Java Developer or Software Engineer opportunities.
              </p>

              <div className="recruiter-actions">
                <a
                  href="resume.pdf"
                  download="Dhreeti_Kumar_Sahoo_Resume.pdf"
                  className="btn btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  <Download size={18} /> Download CV (PDF)
                </a>

                <button
                  className="btn btn-secondary"
                  onClick={handleCopyEmail}
                  style={{ justifyContent: 'center' }}
                >
                  {copied ? (
                    <>
                      <CheckCircle size={18} style={{ color: 'var(--accent)' }} /> Copied!
                    </>
                  ) : (
                    <>
                      <Clipboard size={18} /> Copy Email Address
                    </>
                  )}
                </button>

                <a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center', gap: '0.5rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Calendar size={18} /> Book Interview Screen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
