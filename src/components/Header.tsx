import { ArrowIcon } from "../assets/images/Icons";
import "../styles/Header.scss";
import { useState } from "react";

interface HeaderProps {
  onSearch: (ip: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <header>
      <article className="header_container">
        <p className="header_heading">IP Address Tracker</p>

        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <label htmlFor="ip-search" className="sr_only">
              Search for IP Address
            </label>
            <input
              type="text"
              id="ip-search"
              name="ip address"
              placeholder="Search for any IP address..."
              aria-label="Search for IP address"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <ArrowIcon />
            </button>
          </div>
        </form>
      </article>
    </header>
  );
};

export default Header;
