import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/style.scss";
import {
  faChevronDown,
  faCircleCheck,
  faCircleInfo,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    // hero text---------------
    <div className="hero">
      <div className="hero-text roboto-regular">
        <p>Best website builders in US.</p>
      </div>

      {/* information container------------ */}
      <div className="info-container">
        <div className="left">
          <p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ marginRight: "8px" }}
            />
            Last updated - February 22, 2020
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{ marginRight: "8px" }}
            />
            Last updated - February 22, 2020
          </p>
        </div>
        <div className="right">
          <p>
            Top Relevent{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: "5px" }}
            />
          </p>
        </div>
      </div>

      {/* navigation------------ */}
      <div className="links-container">
        <p>Tools</p>
        <p>AWS builder</p>
        <p>Start Build</p>
        <p>Build Suplies</p>
        <p>Tooling</p>
        <p>Blue Hosting</p>
      </div>

      {/* // current location------------------------------ */}

      <div className="location-preview">
        <p>
          Home <FontAwesomeIcon icon={faGreaterThan} /> Hosting for all{" "}
          <FontAwesomeIcon icon={faGreaterThan} /> Hosting{" "}
          <FontAwesomeIcon icon={faGreaterThan} /> Hosting6{" "}
          <FontAwesomeIcon icon={faGreaterThan} /> Hosting5
        </p>
      </div>
    </div>
  );
};

export default Header;
