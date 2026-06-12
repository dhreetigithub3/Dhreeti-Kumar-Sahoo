import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code } from 'lucide-react';

function Navbar({ theme, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Check active section
            const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const el = document.getElementById(targetId);
        if (el) {
            const offset = 70; // Header height offset
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

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Resume', id: 'resume' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-brand" onClick={(e) => handleNavLinkClick(e, 'home')} style={{ cursor: 'pointer' }}>
                    <span className="nav-logo">
                        <Code size={22} style={{ color: 'var(--primary)' }} />
                        Dhreeti
                    </span>
                    <span className="nav-subtitle">Full Stack Developer</span>
                </div>

                <div className="nav-links-container">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => handleNavLinkClick(e, link.id)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle dark/light theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile nav drawer */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={(e) => handleNavLinkClick(e, link.id)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="btn btn-secondary"
                    onClick={toggleTheme}
                    style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
                >
                    {theme === 'dark' ? (
                        <>
                            <Sun size={20} /> Light Mode
                        </>
                    ) : (
                        <>
                            <Moon size={20} /> Dark Mode
                        </>
                    )}
                </button>
            </div>
        </>
    );
}

export default Navbar;