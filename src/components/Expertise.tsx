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
  "Pandas",
];

const mlStack = [
  "scikit-learn",
  "Hugging Face",
  "LangChain",
  "OpenAI",
  "FastText",
  "Qdrant",
  "LlamaIndex",
  "Streamlit"
];

const trustStack = [
  "Presto SQL",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Risk Modeling",
  "Security Analytics",
  "Clustering",
  "Snowflake",
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
            <h3>Data Analytics </h3>
            <p>
              I specialize in transforming raw data into meaningful insights using modern analytics tools and programming languages. From building robust BI dashboards to crafting efficient data pipelines, my work helps teams make smarter decisions. I have led data projects across compliance, risk, and finance domains in both corporate and public sector environments.
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
              I design and deploy ML-powered systems, ranging from classification models and MAB optimization to multilingual word embeddings and GenAI applications. I bring strong experience in NLP, clustering, and vector search, with a growing interest in secure, adversarially-robust AI systems.
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
              My work in Trust & Safety focuses on identifying and mitigating risks in real-time. I’ve led large-scale anti-phishing interventions, fraud detection using clustering, and global enforcement tooling at Meta and Google. I pair analytics with security-minded infrastructure to scale interventions, detect adversarial behavior, and protect digital ecosystems.
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