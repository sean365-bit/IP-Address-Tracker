import { ArrowIcon } from "../assets/images/Icons";
import "../styles/Header.scss";

const Header = function () {
  return (
    <header>
      <article className="header_container">
        <p className="header_heading">IP Address Tracker</p>

        <form>
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
