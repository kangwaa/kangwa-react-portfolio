import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldAlt, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const analyticsStack = [
  "Python",
  "SQL",
  "PostgreSQL",
  "PowerBI",
  "Tableau",
  "R",
  "Excel",
  "Pandas",
  "StreamLit"
];

const mlStack = [
  "Scikit-learn",
  "HuggingFace Transformers",
  "PyTorch",
  "FastText",
  "Word2Vec/GloVe",
  "BERT",
  "TensorFlow",
  "Git",
  "Docker"
];

const trustStack = [
  "Risk Analytics",
  "Adversarial ML",
  "Trust & Safety",
  "Threat Detection",
  "Graph Analytics",
  "Machine Learning",
  "Technical Program Management",
  "Platform Integrity"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Section 1: Data Analytics */}
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Data & Business Analytics </h3>
            <p>
            I use data analytics to solve complex business problems, drive product decisions, improve user experience and surface insights that guide strategy. My work spans metrics design, experimentation and deep-dive analyses to identify risks, uncover inefficiencies and inform the development of AI and ML systems. I collaborate closely with cross-functional teams to turn complex data into clear and actionable outcomes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {analyticsStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Section 2: Machine Learning & AI */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Machine Learning & AI</h3>
            <p>
            My expertise spans traditional machine learning techniques such as clustering, classification, regression, experimental design, network science as well as deep learning, natural language processing and generative AI.
            I focus on developing research-informed solutions that balance performance, robustness and real-world applicability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Section 3: Trust & Safety + Security Analytics */}
          <div className="skill">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
            <h3>Trust & Safety + Security Analytics</h3>
            <p>
            I work at the intersection of data analytics, machine learning, and threat detection - focusing on spam, fraud, cybersecurity, and emerging adversarial threats. My expertise spans adversarial pattern research, machine learning, model development and evaluation, technical program management, data mining, and cross-functional collaboration to ensure user safety and platform integrity.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {trustStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;