const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-content">
        <h3>Tawananyasha Chipata</h3>
        <p>Aspiring Software Developer | Building modern web applications.</p>

        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your@email.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © {year} Tawananyasha Chipata. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;