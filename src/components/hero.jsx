import { useState, useEffect } from 'react';
import { ArrowRight, Download, Server, Database, Globe, Code2 } from 'lucide-react';

const roleWords = [
  'Java Full Stack Developer',
  'Spring Boot Developer',
  'MCA Graduate',
  'Python Django Developer'
];

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = roleWords[wordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roleWords.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  const handleScrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 70; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <div className="container grid-2" style={{ zIndex: 2 }}>
        <div className="hero-content animate-fade-in">
          <div className="hero-tag">
            <span className="badge">Available for Hire</span>
            <span>Open to Remote & Onsite Roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm Dhreeti.<br />
            Building <span>Full Stack Web Apps</span> & APIs.
          </h1>

          <div className="hero-subtitle">
            <span>{currentText}</span>
            <span className="typed-cursor"></span>
          </div>

          <p className="hero-desc">
            Motivated MCA graduate with hands-on project experience in Java, Spring Boot, Spring Security, JWT, MySQL, Python, Django, and responsive web development. Seeking an entry-level Java Full Stack Developer or Software Developer role.
          </p>

          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => handleScrollToSection('projects')}
            >
              Explore Projects <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScrollToSection('contact')}
            >
              Get In Touch
            </button>
            <a
              href={assetUrl('resume.pdf')}
              download="Dhreeti_Kumar_Sahoo_Resume.pdf"
              className="btn btn-secondary btn-icon"
              title="Download Resume"
            >
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-img-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-img-bg"></div>
          <div className="hero-img-container">
            <img
              src={assetUrl('avatar.png')}
              alt="Dhreeti K S - Developer Portrait"
              className="hero-img"
              onError={(e) => {
                // Fallback for visual testing if avatar.png fails to load
                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=320&h=320";
              }}
            />
          </div>

          {/* Floating badge items surrounding the avatar */}
          <div className="tech-icon-badge tb-1" title="Java Enterprise Platform">
            <Server size={22} />
          </div>
          <div className="tech-icon-badge tb-2" title="Spring Boot APIs">
            <Database size={22} />
          </div>
          <div className="tech-icon-badge tb-3" title="React Web Apps">
            <Globe size={22} />
          </div>
          <div className="tech-icon-badge tb-4" title="Python and Django">
            <Code2 size={22} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
