import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Jun - Sep 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Plotch.AI - (1ST FLOOR, COMMERZ II, GOREGAON EAST, MUMBAI)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#FFFB00" }}>
            Artificial Intelligence Intern
          </h6>
          <p>• I am worked in an AI internship, developing an e-commerce website that integrates various AI features and large language models (LLMs)</p>
          <p>• Integrated Web Speech API for voice-to-text functionality with multi-lingual support.</p>
          <p>• Implemented real-time translation features using APIs for diverse language support.</p>
          <p>• Developed APIs for dynamic content retrieval and efficient data display.</p>
          <p>• Automated cache warming using cron jobs to enhance website performance.</p>
          <p>• Utilized Hugging Face's LLMs for improved semantic search functionality.</p>
          <p>• Automated database table population for up-to-date server information.</p>
          <p>• Deployed React frontend and Flask backend on AWS for scalable and reliable performance.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
