import React from "react";
import mock01 from '../assets/images/LeximapImage.jpg';
import mock02 from '../assets/images/airport_picture.jpg';
import mock03 from '../assets/images/shutterstock.jpg';
import mock04 from '../assets/images/supermario.jpg';
import mock05 from '../assets/images/spotifythumbnail.jpg';
import mock06 from '../assets/images/placeholder.jpg'; // Optional: a "Coming Soon" image
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project">
          <img src={mock01} className="zoom" alt="Multilingual Vocabulary Builder" width="100%" />
          <h2>Multilingual Vocabulary Builder (NLP)</h2>
          <p>
            Built a multilingual graph-based vocabulary tool using Wikipedia data, BERT, cosine similarity, and NLTK. Designed for both language learners and NLP researchers. <br />
            <em style={{ color: 'red' }}>Note: This repository is private due to academic policy. Email me for access.</em>
          </p>
          <a href="https://youtu.be/ec8qKat_ucc" target="_blank" rel="noreferrer" className="button alt">YouTube Presentation</a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <img src={mock02} className="zoom" alt="Markov Chains / PageRank for Airline Operations" width="100%" />
          <h2>Markov Chains for Airline Operations</h2>
          <p>
            Used PageRank to model and rank airline hubs based on passenger movement, traffic, and revenue. Implemented in Python using NumPy and SciPy.
          </p>
          <a href="https://github.com/kangwaa/Markov-Chain-Page-Rank-Analysis" target="_blank" rel="noreferrer" className="button alt">GitHub Repository</a>
        </div>

        {/* Project 3 */}
        <div className="project">
          <img src={mock03} className="zoom" alt="Network Intrusion Classification" width="100%" />
          <h2>Network Intrusion Classification</h2>
          <p>
            Built multiple classifiers (Naive Bayes, KNN, Logistic Regression, Neural Networks) to detect cybersecurity threats using the UNSW-NB15 dataset. Focused on feature engineering, PCA, and model comparison.
          </p>
          <a href="https://github.com/kangwaa/Network-Intrusion-Classification" target="_blank" rel="noreferrer" className="button alt">GitHub Repository</a>
        </div>

        {/* Project 4 */}
        <div className="project">
          <img src={mock04} className="zoom" alt="K-Means Clustering for Image Compression" width="100%" />
          <h2>K-Means Image Compression</h2>
          <p>
            Applied K-Means to reduce image complexity in a Super Mario PNG image. Demonstrated end-to-end clustering with Python to explore compression applications in ML.
          </p>
          <a href="https://medium.com/@kangwangomalala/k-means-clustering-a-hands-on-image-compression-example-6cc99af9c8a7" target="_blank" rel="noreferrer" className="button alt">Medium Article</a>
        </div>

        {/* Project 5 */}
        <div className="project">
          <img src={mock05} className="zoom" alt="Spotify Genre Clustering" width="100%" />
          <h2>Spotify Genre Clustering & Classification</h2>
          <p>
            Collaborated on genre classification with GMM, KMeans, DBScan, Neural Networks, and Random Forests. Used PCA, UMAP, and LDA for dimensionality reduction. <br />
            <em style={{ color: 'red' }}>Note: This repository is private due to academic policy. Email me for access.</em>
          </p>
          <a href="#" className="button alt">GitHub Repository</a>
        </div>

        {/* Project 6: Coming Soon */}
        <div className="project">
          <img src={mock06} className="zoom" alt="Coming Soon" width="100%" />
          <h2>Coming Soon</h2>
          <p>
            I'm currently building something new — stay tuned for the next addition to this portfolio.
          </p>
          <a href="#" className="button alt">Coming Soon</a>
        </div>

      </div>
    </div>
  );
}

export default Project;