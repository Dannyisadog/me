import type { Experience } from "../types";
import "./ExperienceBlock.css";

interface ExperienceBlockProps {
  experience: Experience;
}

const ExperienceBlock = (props: ExperienceBlockProps) => {
  const { experience } = props;
  const { company, website, position, duration, items } = experience;

  return (
    <div className="experience-block">
      <div className="experience-block-header">
        <h3>
          <a
            className="experience-block-company"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </h3>
        <p>
          {position} | {duration}
        </p>
      </div>
      <ul className="experience-block-content">
        {items.map((item) => (
          <li key={item.description}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBlock;
