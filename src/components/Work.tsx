import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "ChatBee",
    category: "Real-Time Chat Application",
    tools: "React, Firebase, Tailwind CSS, Zustand",
    image: "/images/chatbee.jpeg",
    link: "https://react-firebase-chat-app-omega.vercel.app/",
  },
  {
    title: "PocketPilot",
    category: "AI Pocket Agent",
    tools: "React Native, Expo, Firebase, AI Integration",
    images: ["/images/ai_pocket_agent1.jpeg", "/images/ai_pocket2.jpeg"],
    link: "https://github.com/Anshuman117/PocketPilot",
  },
  {
    title: "My Diary",
    category: "Diary Web Application",
    tools:
      "React, Tailwind CSS",
    image: "/images/my_diary.png",
    link: "https://my-diary-tau.vercel.app/",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX = 0;
    const boxes = document.getElementsByClassName("work-box");
    const workContainer = document.querySelector(".work-container");

    if (!boxes.length || !workContainer) {
      return;
    }

    const containerElement = workContainer as HTMLElement;

    function setTranslateX() {
      const firstBox = boxes[0] as HTMLElement;
      const rectLeft = containerElement.getBoundingClientRect().left;
      const rect = firstBox.getBoundingClientRect();
      const parentWidth = firstBox.parentElement?.getBoundingClientRect().width ?? 0;
      const padding = parseInt(window.getComputedStyle(firstBox).padding, 10) / 2;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                images={project.images}
                alt={project.title}
                link={project.link}
                className={
                  index === 0
                    ? "work-image-featured"
                    : index === 2
                      ? "work-image-soft"
                      : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
