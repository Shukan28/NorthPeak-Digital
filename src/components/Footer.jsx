import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>NorthPeak Digital</h2>
                    <p>
                        Helping businesses grow through modern web design, development and digital strategy.
                    </p>
                </div>
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#services">Services</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-social">
                    <FaLinkedin />
                    <FaGithub />
                    <FaTwitter />
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>
                    © 2026 NorthPeak Digital. All rights reserved.
                </p>
                <p>
                    Built for Digital Heroes Training Task •
                    <a
                        href="https://digitalheroesco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        digitalheroesco.com
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;