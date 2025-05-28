import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/kangwaa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/kangwa-j-f-ng-omalala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built by Kangwa Ng'omalala using a template designed by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> 💜</p>
    </footer>
  );
}

export default Footer;