import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  images?: string[];
  alt?: string;
  video?: string;
  link?: string;
  className?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className={`work-image-in ${props.className ?? ""}`.trim()}
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {props.images?.length ? (
          <div className="work-image-gallery">
            {props.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${props.alt ?? "Project image"} ${index + 1}`}
              />
            ))}
          </div>
        ) : (
          <img src={props.image} alt={props.alt} />
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
