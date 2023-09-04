import { Link } from "react-router-dom";
const About = () => {
  
  return (
    <div className="about">
      <footer className="fs-5 py-5 mt-4">
        <div className="py-5 corner">
          <p className="copyright font-kr">저는 사용자 경험이 뛰어난 웹사이트를 만드는 것에 열중하는 프론트엔드 개발자입니다. 디테일 중심의 반응형 웹 UI 구현과 커스텀 모션 구현에 자신이 있으며 자바스크립트를 활용한 다양한 개발에 관심이 많습니다. 이 포트폴리오는  <Link to={"https://selfaware.studio/"} target="_blank"> Selfaware Studio </Link>{" "} 사이트를 참고하여 직접 코드를 짜서 만들었으며  <Link to={"https://svghub.vercel.app/"} target="_blank">Svghub</Link>에서 다운받은 소스를 활용했습니다. 관련한 코드는 <Link to={"https://github.com/minyeokang"} target="_blank">Github</Link>에서 확인할 수 있습니다. </p>
        </div>
        <div className="bottom"></div>
        <div className="circle-bg"></div>
      </footer>
    </div>
  );
};

export default About;
