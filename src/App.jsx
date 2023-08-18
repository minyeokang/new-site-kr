import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import { Element } from "react-scroll";
import Motion from "./Motion";
import Work from "./Work";
import About from "./About";
function App() {
  return (
    <>
      <div className="super-container px-4 pt-4">
          <Header />
          <div className="wrap">
            <Motion />
          </div>
        <Element name="work">
          <Work />
        </Element>
        <Element name="about">
          <About />
        </Element>
      </div>
    </>
  );
}

export default App;
