import { useState } from "react";
import { websiteData } from "./data";
import { Link } from "react-router-dom";
import klayton from "./assets/imgs/thumb-klayton.png";
import cafe24 from "./assets/imgs/thumb-cafe24.png";
import schema from "./assets/imgs/thumb-schema.png";
import { useRef } from "react";
import { useInView } from "framer-motion"
const Work = () => {
  const [items, setItems] = useState(websiteData);
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const toggleAccordion = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const handleMouseMove = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");
    if (!thumb) {
      return;
    }
    const center_x = listItem.offsetLeft + thumb.offsetWidth / 2;
    const tween_x = e.clientX - center_x;
    thumb.style.left = `${tween_x}px`;
  };

  const handleMouseLeave = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");
    if (!thumb) {
      return;
    }
    thumb.style.opacity = "0";
    listItem.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseEnter = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");
    if (!thumb) {
      return;
    }
    thumb.style.opacity = "1";
    listItem.addEventListener("mousemove", handleMouseMove);
  };

  const hoverHandler = (e) => {
    const hoverItem = e.currentTarget;
    console.log(hoverItem);
    hoverItem.classList.add("hover");
  };
  const hoverLeaveHandler = (e) => {
    const hoverItem = e.currentTarget;
    hoverItem.classList.remove("hover");
  };

  const scrollProject1 = useRef(null);
  const isInView1 = useInView(scrollProject1,{ once: true });

  const scrollProject2 = useRef(null);
  const isInView2 = useInView(scrollProject2,{ once: true });

  
  return (
    <>
      <div className="work">
        <div className="role">
          <h2 className="my-5 fs-2 exp">Work Experience</h2>
          <h3 className="fs-5">
            One year of work experience as a junior front-end developer at{" "}
            <Link
              to={"https://studio-jt.co.kr/"}
              target="_blank"
              rel="noreferrer noopenner"
            >
              Studio-JT
            </Link>
          </h3>
          <ul className="fs-5 heart-ul">
            <li className="mb-4 px-4"></li>
            <li className="mb-4 px-4">
              Responsive Website Creation using HTML & CSS
            </li>
            <li className="mb-4 px-4">
              High-Quality Motion Work with JavaScript.
            </li>
            <li className="mb-4 px-4">Maintaining websites with WordPress.</li>
            <li className="mb-4 px-4">Search Engine Optimization</li>
          </ul>
          <div className="text-center work-grid mb-4" ref={scrollProject1}>
            <div className="row justify-content-between gap-3" style={{
                  transform: isInView1 ? "none" : "translateY(50px)",
                  opacity: isInView1 ? 1 : 0,
                  transition: "all 0.8s ease-in 0.3s"
                }}>
              <div
                className="col-sm col-12 p-0 hidden"
                onMouseEnter={isDesktop ? hoverHandler : undefined}
                onMouseLeave={isDesktop ? hoverLeaveHandler : undefined}
              >
                <Link
                  to={"https://klaytn.foundation/"}
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <figure>
                    <img src={klayton} alt="" />
                  </figure>
                </Link>
                <div className="thumb-overlay"></div>
              </div>
              <div
                className="col-sm col-12 p-0 hidden"
                onMouseEnter={isDesktop ? hoverHandler : undefined}
                onMouseLeave={isDesktop ? hoverLeaveHandler : undefined}
              >
                <Link
                  to={"https://www.cafe24.com/"}
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <figure>
                    <img src={cafe24} alt="" />
                  </figure>
                </Link>
                <div className="thumb-overlay"></div>
              </div>
              <div
                className="col-sm col-12 p-0 hidden"
                onMouseEnter={isDesktop ? hoverHandler : undefined}
                onMouseLeave={isDesktop ? hoverLeaveHandler : undefined}
              >
                <Link
                  to={
                    "https://studio-jt.co.kr/%ec%8a%a4%ed%82%a4%eb%a7%88-%eb%a7%88%ed%81%ac%ec%97%85/"
                  }
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <figure>
                    <img src={schema} alt="" />
                  </figure>
                </Link>
                <div className="thumb-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame" ref={scrollProject2}>
          <h2 className="my-5 fs-2 project">Personal Projects</h2>
          <ul className="accordion-work fs-5" style={{
                  transform: isInView2 ? "none" : "translateY(50px)",
                  opacity: isInView2 ? 1 : 0,
                  transition: "all 0.8s ease-in 0.3s"
                }}>
            {items.map((item) => (
              <li key={item.id}>
                <div
                  className={`accordion-content ${item.isOpen ? "active" : ""}`}
                >
                  <div className="content-grid mx-2">
                    <div className="content-title">
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={isDesktop ? handleMouseEnter : undefined}
                        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
                        className="p-3"
                      >
                        <div className="">{item.title}</div>
                        <div className="content-img">
                          <figure className="content-thumb">
                            <img src={item.imgUrl} alt="" />
                          </figure>
                        </div>
                      </Link>
                      <span className="p-2 fs-6">{item.skill}</span>
                    </div>
                    <button onClick={() => toggleAccordion(item.id)}></button>
                  </div>
                </div>
                {item.isOpen && (
                  <div className="content-box p-3 pt-0 mx-2">
                    <p>{item.content}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Work;
