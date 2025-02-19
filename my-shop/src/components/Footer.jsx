import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import githubImg  from "../assets/icons8-github-50.png"

const Footer = () => {
  return (
    <footer className="footer">
      <section className="logo-section">
        <Link to="/">
          <img className="logo" src={logo} alt="HEROS LOOT" />
        </Link>
      </section>
      <div>
        <p className="Dv">Developed by Jungarik</p>
      </div>
      <div className="social">
        <a className="social-line" target="_blank" href="https://github.com/Tolquet"><img src={githubImg} alt="" />Мой ГитХаб</a>
        <a className="social-line" target="_blank" href="https://t.me/tolqet">Telegram</a>
      </div>
    </footer>
  );
};

export default Footer;
