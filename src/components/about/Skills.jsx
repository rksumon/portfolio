import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "65", skillName: "React Js" },
  { skillClass: "p89", skillPercent: "60", skillName: "Next Js" },
  { skillClass: "p89", skillPercent: "75", skillName: "Vue Js" },
  { skillClass: "p70", skillPercent: "89", skillName: "PHP" },
  { skillClass: "p66", skillPercent: "89", skillName: "Laravel Framework" },
  { skillClass: "p50", skillPercent: "65", skillName: "Git" },
  { skillClass: "p65", skillPercent: "75", skillName: "HTML" },
  { skillClass: "p45", skillPercent: "75", skillName: "CSS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
