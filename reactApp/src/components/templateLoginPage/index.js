import React from "react";
import "./loginPage.css";

const TemplateLoginPage = ({children}) => {
  return (
      <>
        <div className="row">
            <div className="col-3">{children}</div>
            <div className="col-3">
                <img src="./welcome.jpg" className="welcome" alt="welcome image"/>
            </div>
        </div>
      </>
  );
};

export default TemplateLoginPage;