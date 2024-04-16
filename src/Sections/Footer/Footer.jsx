import "./Footer.css";

//ICONS
import { ImWhatsapp } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <footer>
            <a className="footer__logo" href="#header">Ammar</a>
            <ul className="permalinks">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=100002956091847"><BsFacebook /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ammar_al_nabtiti/"><BsInstagram /></a>
                <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=962782653911"><ImWhatsapp /></a>

            </div>
            <div className="footer__copyright">
                <small>&copy; Ammar Al Nabtiti , All right reserved.</small>

            </div>
        </footer>
    );
};

export default Footer;