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
            <a href="https://github.com/Scoubershare/spaceX/blob/1051688b8d5c1a5484098cedaa44860113e77512/lab_jupyter_launch_site_location.ipynb">
              SpaceX Launch Sites Analysis (Python){" "}
            </a>
          </p>
          <p>
            <a href="https://github.com/Scoubershare/DS-Stats/blob/5c7b634dd4d89bba5c93ef33ca2304b0388dfd84/Boston%20Housing%20Regression.ipynb">
              Boston Housing Regeression Analysis (Python){" "}
            </a>
          </p>
          <p>
            <a href="https://github.com/Scoubershare/DS-Stats/blob/5c7b634dd4d89bba5c93ef33ca2304b0388dfd84/Boston%20Housing%20Regression.ipynb">
              SpaceX Full Report (Powerpoint){" "}
            </a>
          </p>
          <p>
            <a href="https://github.com/Scoubershare/IBM-Data-Science/blob/5d6e8e6454e57767fdf61d05d1baab0336cd2c49/House_Sales_in_King_Count_USA%20(3).ipynb">
             King County Housing Sales Data Analysis (Pyhton){" "}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
