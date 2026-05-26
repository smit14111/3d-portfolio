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
                <h4>Bachelor of Computing Science</h4>
                <h5>Thompson Rivers University</h5>
              </div>
              <h3>2021–26</h3>
            </div>
            <p>
              Kamloops, BC. Coursework in AI, machine learning, NLP, database
              systems, big data analytics, data structures and algorithms, systems
              analysis, web development, and data visualization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cisco Certified Ethical Hacker</h4>
                <h5>Cisco · 2025</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Full-Stack Development certification (Apna College, 2024). AWS
              Certified Cloud Practitioner in progress (2026). Focus on secure,
              production-ready applications and practical security fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
