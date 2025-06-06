import ExperiencesBlock from "../components/ExperiencesBlock";
import Header from "../components/Header";
import SkillBlock from "../components/SkillBlock";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="background-image" />
      <Header />
      <SkillBlock />
      <ExperiencesBlock />
    </div>
  );
};

export default Resume;
