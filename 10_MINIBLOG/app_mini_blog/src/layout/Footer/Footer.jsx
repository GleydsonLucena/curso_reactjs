import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} My Blog
    </footer>
  );
};

export default Footer;
