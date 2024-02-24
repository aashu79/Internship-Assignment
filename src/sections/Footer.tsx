import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/style.scss";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="left">
        <p className="heading">CATEGORIES</p>
        <p className="link">Web Builder</p>
        <p className="link">Hosting</p>
        <p className="link">Data Center</p>
        <p className="link">Robotic-Automation</p>
      </div>
      <div className="center">
        <p className="heading">CONTACT</p>

        <p className="link">Contact</p>
        <p className="link">Privacy Policy</p>
        <p className="link">Terms Of Service</p>
        <p className="link">Categories</p>
        <p className="link">About</p>
      </div>
      <div className="right">
       
        <p className="link"> United States <FontAwesomeIcon icon={faAngleDown} /></p>
      </div>
    </div>
  );
};

export default Footer;
