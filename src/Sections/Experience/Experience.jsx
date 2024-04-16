import "./Experience.css";
// REACT ICONS
import { BsPatchCheckFill } from "react-icons/bs";

//DATA
import { frontEndSkills } from "../../Data/skilllsData";
import { backEndSkills } from "../../Data/skilllsData";

const Experience = () => {

    const frontEndSkillsList = (mySkills) => {
        return (
            mySkills.map(skill => {

                return (<article key={skill.id
                } className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div className="div">
                        <h4>{skill.title}</h4>
                        <small className="text-light" >{skill.level}</small>
                    </div>
                </article>);
            }));
    };


    const Frontend = frontEndSkillsList(frontEndSkills);
    const Backend = frontEndSkillsList(backEndSkills);

    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {Frontend}
                    </div>

                </div>
                <div className="experience__backend">

                    <div className="experience__frontend">
                        <h3>Backend Development</h3>
                        <div className="experience__content">
                            {Backend}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;