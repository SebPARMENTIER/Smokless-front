import './footer.scss';

const Footer = () => {
  // Get the current year
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div className="footer">
      <div className="footer-year">
        smokless - {year}
      </div>
    </div>
  );
};

export default Footer;
