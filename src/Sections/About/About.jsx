import './About.css';
import Me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="img" src={Me} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years of Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, at, pariatur fuga et nisi eos accusamus ipsa reiciendis
            illum ex amet expedita, saepe voluptas soluta suscipit in impedit
            magni perspiciatis.
          </p>

          {/* <a className="btn btn-btn-primary" href="">Let's Talk</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
