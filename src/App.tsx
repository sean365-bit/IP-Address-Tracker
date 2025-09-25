import "./styles/App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface GeoData {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}

function App() {
  const [geoData, setGeoData] = useState<GeoData | null>(null);

  const fetchIpAddress = async (ip?: string) => {
    try {
      let targetIp = ip;

      if (!targetIp) {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        targetIp = ipData.ip;
      }

      const geoResponse = await fetch(`apikey=${targetIp}`);

      if (!geoResponse.ok) throw new Error(`HTTP ${geoResponse.status}`);
      const data: GeoData = await geoResponse.json();
      setGeoData(data);
    } catch (error) {
      console.error("Error fetching IP/GeoData:", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
  }, []);

  return (
    <div className="app">
      <Header onSearch={fetchIpAddress} />
      <Footer geoData={geoData} />
    </div>
  );
}

export default App;
