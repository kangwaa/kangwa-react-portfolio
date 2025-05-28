import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Google */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Google, Dublin, Ireland</h4>
            <p>
            Fighting AdSpam with data analytics and machine learning!
            </p>
          </VerticalTimelineElement>

          {/* Meta */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 – 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Global Operations Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Meta (Facebook), Dublin, Ireland</h4>
            <p>
             Business anaytics to detect and mitigate risks in integrity products, workflows, and policies and improve detection systems.
            </p>
          </VerticalTimelineElement>

          {/* PwC */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 – 2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data & Analytics Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">PwC, Lusaka, Zambia</h4>
            <p>
              Developing data analytics solutions for Tax , Finance , Marketing and Audit functions.
            </p>
          </VerticalTimelineElement>

          {/* BongoHive */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Intelligence Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BongoHive Innovation & Technology Hub, Lusaka, Zambia</h4>
            <p>
              Business reporting and analytics.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;