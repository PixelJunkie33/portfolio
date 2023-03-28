import React, { useState } from "react";

export default function Hobbies() {
  const [showTools, setShowTools] = useState(false);

  const toggleTools = () => {
    setShowTools(!showTools);
  };

  return (
    <div className="hobbies mobSidebar">
      

      <div className="dropdown">
        <h4 onClick={toggleTools} data-toggle="tooltip" title='Expand List'  >
          Tools & Techniques{" "}
          {showTools ? (
            <i className="fa fa-caret-up"></i>
          ) : (
            <i className="fa fa-caret-down"></i>
          )}
        </h4>
        {showTools && (
          <div className="dropdown-content">
            <p className="t">Python Programming</p>
            <p className="t">JavaScript Programming</p>
            <p className="t">R Programming</p>
            <p className="t">Node.Js</p>
            <p className="t">MongoDB</p>
            <p className="t">Railway</p>
            <p className="t">MySQL</p>
            <p className="t">React.JS</p>
            <p className="t">HTML</p>
            <p className="t">CSS</p>
            <p className="t">Bootstrap</p>
            <p className="t">Git</p>
            <p className="t">GitHub</p>
            <p className="t">Tableau</p>
            <p className="t">Esri ArcGIS</p>
            <p className="t">JSON Data</p>
            <p className="t">ETL</p>
            <p className="t">API's</p>
            <p className="t">RESTful API's</p>
            <p className="t">ELS</p>
            <p className="t">Jupyter Notebooks</p>
            <p className="t">Express.Js</p>
            <p className="t">Sqlite3</p>
          </div>
          
        )}
        <h4>Hobbies</h4>
      <p>
        Kaggle Competition's <br /> Machine Learning NLP{" "}
        <br />
        <a href="https://www.kaggle.com/kadeepratt">View Profile</a>{" "}
      </p>
      </div>
    </div>
  );
}
