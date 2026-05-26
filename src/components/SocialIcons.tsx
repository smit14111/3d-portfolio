import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement | null;
    if (!social) return;

    const items = Array.from(social.querySelectorAll("span")).map((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      return {
        link,
        rect,
        mouseX: rect.width / 2,
        mouseY: rect.height / 2,
        currentX: 0,
        currentY: 0,
      };
    });

    const onMouseMove = (e: MouseEvent) => {
      items.forEach((item) => {
        const x = e.clientX - item.rect.left;
        const y = e.clientY - item.rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          item.mouseX = x;
          item.mouseY = y;
        } else {
          item.mouseX = item.rect.width / 2;
          item.mouseY = item.rect.height / 2;
        }
      });
    };

    let frameId = 0;
    const updatePosition = () => {
      items.forEach((item) => {
        item.currentX += (item.mouseX - item.currentX) * 0.1;
        item.currentY += (item.mouseY - item.currentY) * 0.1;
        item.link.style.setProperty("--siLeft", `${item.currentX}px`);
        item.link.style.setProperty("--siTop", `${item.currentY}px`);
      });
      frameId = requestAnimationFrame(updatePosition);
    };

    document.addEventListener("mousemove", onMouseMove);
    frameId = requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/smit14111"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/smit-c"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/Smit_Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
