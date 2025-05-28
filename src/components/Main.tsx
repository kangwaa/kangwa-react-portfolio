import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myAvatar from '../assets/images/kangwa.jpeg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myAvatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kangwaa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kangwa-j-f-ng-omalala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kangwa Ng'omalala</h1>
          <p>Data Scientist & Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/kangwaa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kangwa-j-f-ng-omalala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;