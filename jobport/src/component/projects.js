import React, { useState } from "react";

export default function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="proj mobSidebar">
      <h4 onClick={toggleProjects} data-toggle="tooltip" title='Expand List'>
        Projects{" "}
        {showProjects ? (
          <i className="fa fa-caret-up"></i>
        ) : (
          <i className="fa fa-caret-down"></i>
        )}
      </h4>
      {showProjects && (
        <div className="dropdown-content">
          <p>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/MNYMBRMC3ZDM">
              IBM Data Science{" "}
            </a>{" "}
            <br /> Professional Certification <br />@ Coursera{" "}
          </p>
          <p>
            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/397G86RFMV5S">
              Data Science Fundamentals with Python and SQL
            </a>
          </p>

        </div>
      )}
    </div>
  );
}
