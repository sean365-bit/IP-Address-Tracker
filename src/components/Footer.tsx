import "../styles/Footer.scss";
import Map from "./Map";

interface GeoData {
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}

interface FooterProps {
  geoData: GeoData | null;
}

const Footer = ({ geoData }: FooterProps) => {
  return (
    <footer>
      <article className="details_container">
        <div className="details">
          <p className="details_tittle">IP Address</p>
          <p className="details_content">{geoData?.ip}</p>
        </div>
        <hr className="bar" />

        <div className="details">
          <p className="details_tittle">Location</p>
          <p className="details_content">
            {geoData
              ? `${geoData.location.city}, ${geoData.location.region} ${geoData.location.country}`
              : ""}
          </p>
        </div>
        <hr className="bar" />

        <div className="details">
          <p className="details_tittle">Timezone</p>
          <p className="details_content">
            {"UTC " + geoData?.location.timezone}
          </p>
        </div>
        <hr className="bar" />

        <div className="details">
          <p className="details_tittle">ISP</p>
          <p className="details_content">{geoData?.isp}</p>
        </div>
      </article>

      <Map lat={geoData?.location.lat} lng={geoData?.location.lng} />
    </footer>
  );
};

export default Footer;
