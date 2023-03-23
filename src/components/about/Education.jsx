import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "BACHELOR in C.S.E",
    institute: "Daffodil International University",
    details: `Where you practice yourself`,
  },
  {
    year: "2015",
    degree: "Diploma in Computer Engineer",
    institute: "Naogaon Polytechnic Institute",
    details: `One of the great government polytechnic in Bangladesh`,
  },
  {
    year: "2010",
    degree: "S.S.C ",
    institute: "Narayanpur 2nd high school",
    details: `Fantastic School for moral and good study`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
