const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-content">
        <h3>Tawananyasha Chipata</h3>
        <p>Aspiring Software Developer | Building modern web applications.</p>

        <div className="social-links">
          <a
            href="https://github.com/tawananyashachipata-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tawananyasha-chipata"
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