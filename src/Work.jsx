import { useState } from "react";
import { websiteData } from "./data";
import { Link } from "react-router-dom";
import klayton from "./assets/imgs/thumb-klayton.png";
import cafe24 from "./assets/imgs/thumb-cafe24.png";
import dongil from "./assets/imgs/thumb-dongil.png";
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
          <h3 className="fs-5 font-kr">
          프론트엔드 개발자 2022.06 ~ 2023.06 at {""}
            <Link
              to={"https://studio-jt.co.kr/"}
              target="_blank"
              rel="noreferrer noopenner"
            >
              Studio-JT
            </Link> 
          </h3>
          <ul className="fs-5 heart-ul font-kr">
            <li className="mb-4 px-4"></li>
            <li className="mb-4 px-4">
              HTML & CSS 사용하여 반응형 웹사이트 제작
            </li>
            <li className="mb-4 px-4">
              자바스크립트를 사용한 퀄리티 높은 모션 및 인터랙션 구현
            </li>
            <li className="mb-4 px-4">워드프레스를 사용하여 30개 이상의 웹사이트 유지보수</li>
            <li className="mb-4 px-4">검색 엔진 최적화 작업 <Link
              to={"https://studio-jt.co.kr/%ec%8a%a4%ed%82%a4%eb%a7%88-%eb%a7%88%ed%81%ac%ec%97%85/"}
              target="_blank"
              rel="noreferrer noopenner"
            >
              포스팅
            </Link> </li>
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
                  {/* <p className="po-ab">유지보수</p> */}
                </Link>
                <div className="thumb-overlay"><p className="fs-5">Developer, Community 페이지 구축</p></div>
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
                <div className="thumb-overlay"><p className="fs-5">메인 배너와 서브 페이지 신규 구축 및 전반적인 유지보수 담당</p></div>
              </div>
              <div
                className="col-sm col-12 p-0 hidden"
                onMouseEnter={isDesktop ? hoverHandler : undefined}
                onMouseLeave={isDesktop ? hoverLeaveHandler : undefined}
              >
                <Link
                  to={
                    "https://dongil82.co.kr/NOW%20DI/%ED%95%B4%EB%A7%81%ED%84%B4%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4-%EC%98%A4%EC%85%98%ED%9E%90%EC%A6%88-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8A%A4%ED%86%A0%EB%A6%AC/"
                  }
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <figure>
                    <img src={dongil} alt="" />
                  </figure>
                </Link>
                <div className="thumb-overlay"><p className="fs-5">해당 페이지 구축과 인터랙션 작업</p></div>
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
                        <div className="fs-5">{item.title}</div>
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
                    <p className="font-kr fs-6">{item.content}</p>
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
