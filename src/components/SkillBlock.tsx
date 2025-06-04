import skills from "../data/skills.json";
import "./SkillBlock.css";

const SkillBlock = () => {
  return (
    <div className="skill-block">
      <h3>Technical Skills</h3>
      <ul className="skill-block-content">
        {Object.entries(skills).map(([category, skills]) => {
          const skill = skills.join(", ");
          return (
            <li key={category} className="skill-item">
              <span className="skill-key">{category}：</span>
              <span>{skill}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillBlock;
