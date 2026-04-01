import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Anshuman
              <br />
              <span>Hoon</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Aspiring</h3>
            <h2 className="landing-info-h2">
              <span className="landing-info-line">
                <span className="landing-h2-1">Software</span>
                <span className="landing-h2-2">Developer</span>
              </span>
            </h2>
            <h2 className="landing-info-subline">
              <span className="landing-info-line">
                {/* <span className="landing-h2-info">Frontend</span>
                <span className="landing-h2-info-1">Engineer</span> */}
              </span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
