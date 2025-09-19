import "../styles/Footer.scss";

const Footer = function () {
  return (
    <footer>
      <article className="details_container">
        <div className="details">
          <p className="details_tittle">IP Address</p>
          <p className="details_content">192.212.174.101</p>
        </div>
        <hr className="bar" />
        <div className="details">
          <p className="details_tittle">Location</p>
          <p className="details_content">Brooklyn, NY 10001</p>
        </div>
        <hr className="bar" />
        <div className="details">
          <p className="details_tittle">Timezone</p>
          <p className="details_content">UTC-05:00</p>
        </div>
        <hr className="bar" />
        <div className="details">
          <p className="details_tittle">ISP</p>
          <p className="details_content">SpaceX Starlink</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
