import React from "react";
import mock01 from '../assets/images/LeximapImage.jpg';
import mock02 from '../assets/images/airport_picture.jpg';
import mock03 from '../assets/images/montecarlo.jpg';
import mock04 from '../assets/images/shutterstock.jpg';
import mock05 from '../assets/images/supermario.jpg';
import mock06 from '../assets/images/spotifythumbnail.jpg'; // Optional: a "Coming Soon" image
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
          My team at Georgia Tech worked on a multilingual vocabulary builder application that leverages Wikipedia data to create topic-based word embeddings and uncover semantic and collocation relationships between words. We employed tools like Python, spaCy, NLTK, and scikit-learn, mBERT for multilingual embeddings, cosine similarity for semantic graphs, and BigramAssocMeasures in NLTK for collocation extraction. By combining robust preprocessing, semantic analysis, and collocation extraction, we developed a graph-based vocabulary learning tool for language learning and NLP research applications. The project highlights the power of integrating advanced NLP techniques with large-scale data to address multilingual challenges effectively. <br />
            <em style={{ color: 'red' }}>Note: This repository is private due to academic policy. Email me for access.</em>
          </p>
          <a href="https://youtu.be/ec8qKat_ucc" target="_blank" rel="noreferrer" className="button alt">YouTube Presentation</a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <img src={mock02} className="zoom" alt="Markov Chains / PageRank for Airline Operations" width="100%" />
          <h2>Markov Chains for Airline Operations</h2>
          <p>
          This project is a deep dive into the practical application of Markov Chains and Google’s famous PageRank algorithm within the domain of airline operations. By conceptualizing an airline’s network of destinations as a graph, with airports serving as nodes and direct-flight connections as edges, the project aims to rank airports (nodes) in the network based on flight frequency, passenger traffic patterns, and revenue generated between flight routes. To achieve this, I utilized Python, NumPy, and SciPy for implementing the Markov Chain process and PageRank algorithm. An understanding of matrices and linear algebra for calculating transition probability matrices, solving for steady-state distributions, and implementing the iterative power method to converge to the PageRank values. This approach unlocks hidden patterns in the airline network that are not captured by descriptive statistics.
          </p>
          <a href="https://github.com/kangwaa/Markov-Chain-Page-Rank-Analysis" target="_blank" rel="noreferrer" className="button alt">GitHub Repository</a>
        </div>

        {/* Project 3 */}
        <div className="project">
          <img src={mock03} className="zoom" alt="NewsVendor Model using Monte Carlo Simulation" width="100%" />
          <h2>Coming Soon</h2>
          <p>
          This project simulates the Newsvendor inventory model using Monte Carlo methods to help a local deli optimize daily lasagna orders under uncertain demand. It models good, typical, and bad days, factoring in overage and underage costs to identify the profit-maximizing quantity. Built in Python and deployed with Streamlit for interactive parameter tuning, profit curves, and monthly forecasting.
          <em style={{ color: 'red' }}> Please note that this repo is private due to academic policy, however try the streamlit app by clicking the button below or email me for repo access.</em>
          </p>
          <a href="https://delidilemma-montecarlo.streamlit.app/" className="button alt">Streamlit App</a>
        </div>

        {/* Project 4: */}
        <div className="project">
          <img src={mock04} className="zoom" alt="Network Intrusion Classification" width="100%" />
          <h2>Network Intrusion Classification</h2>
          <p>
          This project is a deep dive into machine learning concepts with a specific focus on cybersecurity. Using the UNSW-NB15 dataset, I address classification problems in network security by employing supervised learning techniques to model nine attack types and normal vectors. I make use of algorithms such as Principal Component Analysis (PCA) for dimensionality , Naive Bayes , K-Nearest Neighbour, Logistic Regression and Neural Network Classifiers to enhance my knowledge in cybersecurity and trust and safety.
          </p>
          <a href="https://github.com/kangwaa/Network-Intrusion-Classification" target="_blank" rel="noreferrer" className="button alt">GitHub Repository</a>
        </div>

        {/* Project 5 */}
        <div className="project">
          <img src={mock05} className="zoom" alt="K-Means Clustering for Image Compression" width="100%" />
          <h2>K-Means Image Compression</h2>
          <p>
          This article is a hands-on exploration of image compression using the K-Means algorithm, coded from scratch. By applying K-Means to a Super Mario PNG image, the article demonstrates the process of image preprocessing and clustering, illustrating how this algorithm can be used to reduce the complexity of visual data while preserving essential features. This approach not only deepens one's understanding of K-Means but also highlights practical applications of machine learning techniques in handling image data.
          </p>
          <a href="https://medium.com/@kangwangomalala/k-means-clustering-a-hands-on-image-compression-example-6cc99af9c8a7" target="_blank" rel="noreferrer" className="button alt">Medium Article</a>
        </div>

        {/* Project 6 */}
        <div className="project">
          <img src={mock06} className="zoom" alt="Spotify Genre Clustering" width="100%" />
          <h2>Spotify Genre Clustering & Classification</h2>
          <p>
          In this project, I collaborated with two team members on predictive modeling of Spotify song genres, utilizing various clustering and classification techniques. We evaluated models such as GMM, DBScan, KMeans, Naive Bayes, Neural Networks, KNN, and Random Forests. The work involved data preprocessing, dimensionality reduction (PCA, LDA, UMAP), and a detailed performance analysis to gain insights into genre clustering and classification. <br />
            <em style={{ color: 'red' }}>Note: This repository is private due to academic policy. Email me for access.</em>
          </p>
          <a href="https://github.com/kangwaa/Genre-Music-Identification" className="button alt">GitHub Repository</a>
        </div>



      </div>
    </div>
  );
}

export default Project;