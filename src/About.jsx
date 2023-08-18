import { Link } from "react-router-dom";
const About = () => {
  const email = "minyeo0729@gmail.com";
  
  return (
    <div className="about">
      <h2 className="my-5 fs-2 hello">About me</h2>
      <p className="fs-5 mb-4">
        I am a passionate and skilled front-end developer with a strong focus on
        creating engaging, interactive, pixel-perfect websites. I thrive on the
        challenge of making websites not only visually stunning but also
        functional and responsive across all devices.
      </p>
      <p className="fs-5 mb-5 pb-5">
        {" "}
        With my abilities, I can bring any concept to life and deliver
        exceptional results. If you want to get to know more about me, check out
        my{" "}
        <Link to={"https://github.com/minyeokang"} target="_blank">
          Github
        </Link>
        , or{" "}
        <Link to={`mailto:${email}`} className="no-line">
          Email me
        </Link>
      </p>

      <footer className="fs-5 py-5">
        <div className="py-5 corner">
          <p className="copyright">
            This portfolio has been created entirely from scratch, without any
            copy-pasting. While I drew inspiration from{" "}
            <Link to={"https://selfaware.studio/"} target="_blank">
              Selfaware Studio
            </Link>{" "}
            for the design, I have customized and implemented it using my own
            code. The SVG resources used in this project were sourced from{" "}
            <Link to={"https://svghub.vercel.app/"} target="_blank">
              Svghub.
            </Link>
          </p>
        </div>
        <div className="bottom"></div>
        <div className="circle-bg"></div>
      </footer>
    </div>
  );
};

export default About;
