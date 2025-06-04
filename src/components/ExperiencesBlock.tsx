import experiences from "../data/experiences.json";
import type { Experience } from "../types";
import ExperienceBlock from "./ExperienceBlock";
import "./ExperiencesBlock.css";

const ExperiencesBlock = () => {
  return (
    <div className="experiences-block">
      {experiences.map((experience: Experience) => (
        <ExperienceBlock key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default ExperiencesBlock;
