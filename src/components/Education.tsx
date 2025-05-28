import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>

          {/* Georgia Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 – Present"
            iconStyle={{ background: '#007ACC', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.S. in Analytics </h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology, Atlanta, USA </h4>
            <p>
              Coursework in Business Analytics, Machine Learning, Deep Learning, Analytics Modeling, Visualization,
              Applied Natural Language Processing, Simulation, Network Science, Data Mining and Statistical Learning.
            </p>
          </VerticalTimelineElement>

          {/* Nanjing University */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015 – 2019"
            iconStyle={{ background: '#007ACC', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Eng. in Aeronautical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Nanjing University of Aeronautics and Astronautics, Nanjing,China</h4>
            <p>
              Specialized in aircraft design, with foundational training in engineering principles, mathematics, and applied physics and computer aided design and engineering.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;