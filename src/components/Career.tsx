import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Leadership & Achievements</h4>
                <h5>Hackathons, Campus Outreach, and Technical Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led a 5-member Smart India Hackathon team, served as Campus
              Ambassador for Cognizance IIT Roorkee, worked as a Marketing
              Head for college events, and earned an NPTEL Silver Medal in Big
              Data Computing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Sequence 256 Technowave Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Delivered UI modules for 10+ screens, integrated REST APIs and
              Firebase services, built reusable components for multiple
              workflows, and collaborated remotely on debugging, testing, and
              documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI & Data Science</h4>
                <h5>Madhav Institute of Technology and Science, Gwalior</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing a degree in Artificial Intelligence and Data Science
              with a CGPA of 7.82 while strengthening core skills in data
              structures, algorithms, object-oriented programming, and software
              engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
