import { ArrowIcon } from "../assets/images/Icons";
import "../styles/Header.scss";

const Header = function () {
  return (
    <header>
      <article className="header_container">
        <p className="header_heading">IP Address Tracker</p>

        <form>
          <div className="form_container">
            <label>
              <input
                type="text"
                name="fname"
                placeholder="Search  for any IP address..."
              />
            </label>
            <button type="submit">
              <ArrowIcon />
            </button>
          </div>
        </form>
      </article>
    </header>
  );
};

export default Header;
