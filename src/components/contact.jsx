import { useState } from 'react';
import { AlertCircle, CheckCircle, Mail, MapPin, Send, Smartphone } from 'lucide-react';

const EMAIL = 'sahoodhreetikumar@gmail.com';
const GITHUB_URL = 'https://github.com/dhreetigithub3';
const LINKEDIN_URL = 'http://www.linkedin.com/in/dhreeti-kumar-sahoo';
const PORTFOLIO_URL = 'https://dhreetigithub3.github.io/Dhreeti-Kumar-Sahoo/';

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

const Linkedin = ({ size = 20, ...props }) => (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple verification
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        const subject = encodeURIComponent(formData.subject || 'Java Full Stack Developer Opportunity');
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setStatus('success');
    };

    return (
        <section id="contact" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="bg-glow-1" style={{ top: 'auto', bottom: '-100px' }}></div>

            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="section-title">Let's <span>Connect</span></h2>
                    <p className="section-desc">
                        Are you a recruiter or hiring manager looking for a fresher Java Full Stack Developer? Reach out through direct channels or send a quick email.
                    </p>
                </div>

                <div className="contact-layout">
                    {/* Contact Details */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Direct Channels</h3>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-info-details">
                                    <h4>Email Address</h4>
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Replies within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <MapPin size={20} />
                                </div>
                                <div className="contact-info-details">
                                    <h4>Location</h4>
                                    <p>Bengaluru, India</p>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Available for Remote & Onsite roles</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <Smartphone size={20} />
                                </div>
                                <div className="contact-info-details">
                                    <h4>Phone / WhatsApp</h4>
                                    <a href="tel:+919337636068">+91 9337636068</a>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Active for calls & chat</p>
                                </div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Professional Profiles</h3>
                        <div className="social-links">
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="social-btn"
                                title="View LinkedIn Profile"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="social-btn"
                                title="View GitHub Profile"
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        <div className="glass-card" style={{ marginTop: '2.5rem', padding: '1.5rem', borderStyle: 'dashed' }}>
                            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Hiring Managers
                            </h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                                GitHub: <a href={GITHUB_URL} target="_blank" rel="noreferrer">{GITHUB_URL}</a><br />
                                Portfolio: <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer">{PORTFOLIO_URL}</a>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send A Message</h3>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Full Name *</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email Address *</label>
                                <input
                                    className="form-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane.doe@company.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Opportunities at TechCorp"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message *</label>
                                <textarea
                                    className="form-textarea"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hi Dhreeti, I am a recruiter looking to discuss an entry-level role..."
                                    required
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="form-status success">
                                    <CheckCircle size={18} />
                                    <span>Your email app has been opened with this message.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-status error">
                                    <AlertCircle size={18} />
                                    <span>Please fill out all required fields marked with an asterisk (*).</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                Send Email <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
