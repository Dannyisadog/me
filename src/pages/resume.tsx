import ExperiencesBlock from "../components/ExperiencesBlock";
import Header from "../components/Header";
import SkillBlock from "../components/SkillBlock";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <img src="/logo.svg" alt="logo" className="logo" />
      <Header />
      <SkillBlock />
      <ExperiencesBlock />
    </div>
  );
};

export default Resume;
