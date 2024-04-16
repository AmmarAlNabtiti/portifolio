import "./HeaderBtn.css";
import CV from "../../../src/assets/cv.pdf";
const HeaderBtn = () => {
    return (
        <div className="headerBtn">
            <a className="btn" href={CV} download>Download CV</a>
            <a className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>

    );
};

export default HeaderBtn;