import React, { useState } from "react";

export default function Education() {
  const [showEducation, setShowEducation] = useState(false);

  const toggleEducation = () => {
    setShowEducation(!showEducation);
  };

  return (
    <div className="edu mobSidebar">
      <h4 onClick={toggleEducation} data-toggle="tooltip" title='Expand List'>
        Education{" "}
        {showEducation ? (
          <i className="fa fa-caret-up"></i>
        ) : (
          <i className="fa fa-caret-down"></i>
        )}
      </h4>
      {showEducation && (
        <div className="dropdown-content">
          <p>
            Global MBA, <br /> Tufts Fletcher School of Law and Diplomacy <br />
            @ Tufts University, Masters Degree{" "}
          </p>
          <p>
            B.A.A Urban Studies <br /> Rutgers, The State University of New Jersey{" "}
            <br /> @ Rutgers University Camden, Honors
          </p>
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
            <br />
            Professional Certification
            <br />
            @ Coursera
          </p>
          <p>
            <a href="https://github.com/Scoubershare/CodeCademy-Cert/blob/main/JavaScript%20Cert.pdf">
              JavaScript Certification
            </a>{" "}
            <br /> Professional Certification <br />@ CodeCademy
          </p>
          <br />
          <h2>Git Repo</h2>
          <p>
            <a href="https://github.com/Scoubershare">View Repository </a>
          </p>
          <br />
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/kadeem-pratt-webdevp/">
              View Profile{" "}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
