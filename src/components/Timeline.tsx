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
            date="2024 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Google, Dublin, Ireland</h4>
            <p>
              Working on fraud and spam detection in the Ads ecosystem, leveraging machine learning and large-scale data analysis to secure Trust & Safety systems.
            </p>
          </VerticalTimelineElement>

          {/* Meta */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 – 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Meta (Facebook), Dublin, Ireland</h4>
            <p>
              Led cross-functional teams to counter phishing attacks, optimized anti-abuse models, and expanded multilingual risk detection infrastructure across global markets.
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
              Developed audit automation tools, enhanced revenue tracking through PowerBI, and identified procurement policy violations using data-driven insights.
            </p>
          </VerticalTimelineElement>

          {/* BongoHive */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Innovation & Analytics Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BongoHive Innovation & Technology Hub, Lusaka</h4>
            <p>
              Supported startup ecosystem research, developed internal dashboards, and contributed to tech-driven project planning and reporting.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;