import "./Header.css";
import { Arrow, HeaderBtn, HeaderSocial } from "../../Components/index";
import Me from "../../assets/mee.png";
const Header = () => {
    return (
        <header id="header">

            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ammar AL Nabtiti</h1>
                <h5 className="text-light">Fullstack Web Developer</h5>

                <HeaderBtn />
                <HeaderSocial />

                <div className="me">
                    <img className="img" src={Me} alt="Me" />
                </div>
                <Arrow />
            </div>

        </header>
    );
};

export default Header;