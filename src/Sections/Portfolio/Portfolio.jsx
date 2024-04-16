import "./Portfolio.css";
import Diesny from "../../assets/Diesny.png";
import ominfood from "../../assets/omnifood.png";
import nexter from "../../assets/nexter.png";
import trillo from "../../assets/trillo.png";
import KASPAER from "../../assets/KASPAER.png";
import Country from "../../assets/Country.png";

const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <h5>My Recent Work </h5>
                <h2>HTML | CSS | SASS </h2>

                <div className="container portfolio__container">

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src="https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/65649455a9fd6e43d3e56592/screenshot_2023-11-27-13-06-35-0000.png" alt="portfolio1" />
                        </div>
                        <h3>Natours</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/natours.git">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://natours-devs.netlify.app/">Live demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src="https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/656493bbe167cf44d1530341/screenshot_2023-11-27-13-03-57-0000.png" alt="portfolio1" />
                        </div>
                        <h3>Omnifood</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/tinder-clone.git">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://tender-clone-45e30.web.app/">Live demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src={nexter} alt="portfolio1" />
                        </div>
                        <h3>Nexter</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/nexter-grid-project/tree/a4c8468a4c529ad55615a133143cb6f99f58479c/Nexter">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://nexter-dev.netlify.app/">Live demo</a>
                        </div>
                    </article>


                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src={trillo} alt="portfolio1" />
                        </div>
                        <h3>Trillo</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/trillo">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://trillo-dev.netlify.app/">Live demo</a>
                        </div>
                    </article>


                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src={Country} alt="portfolio1" />
                        </div>
                        <h3>country-flag(HTML CSS JS API)</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/country-flag-HTML-CSS-JS-API.git">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://64ad8def2cec79163a640cdb--genuine-semolina-63b09c.netlify.app/">Live demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src={KASPAER} alt="portfolio1" />
                        </div>
                        <h3>Kasper (HTML+CSS)Template</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/Template-HTML-CSS-2.git">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://64ad8c3022f2e81aa500af2e--stupendous-croquembouche-8444d8.netlify.app/">Live demo</a>
                        </div>
                    </article>

                </div>

            </section>


            <section id="portfolio">
                <h5>My Recent Work </h5>
                <h2>React projects </h2>

                <div className="container portfolio__container">

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            {/*  */}
                            <img className="img" src="https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/6564af2184f30800917094ea/screenshot_2023-11-27-15-00-54-0000.png" alt="portfolio1" />
                        </div>
                        <h3>Wordwise</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/worldwise">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://wordwise-dev.netlify.app/">Live demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src="https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/65633594e348be65e04d53e2/screenshot_2023-11-26-12-10-00-0000.png" alt="portfolio1" />
                        </div>
                        <h3>UsePopCorn</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/usePopCorn">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://usepopcorn-dev.netlify.app/">Live demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio__item-image">
                            <img className="img" src="https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_1920x1200/https://d33wubrfki0l68.cloudfront.net/6564b5ede5ec920594350af8/screenshot_2023-11-27-15-29-53-0000.png" alt="portfolio1" />
                        </div>
                        <h3>React Quiz</h3>
                        <div className="portfolio__btns">
                            <a rel="noreferrer" className="btn" target="_blank" href="https://github.com/AmmarAlNabtiti/React-Quiz">GitHub</a>
                            <a rel="noreferrer" className="btn btn-primary" target="_blank" href="https://react-quiz-app-devs.netlify.app/">Live demo</a>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
};

export default Portfolio;