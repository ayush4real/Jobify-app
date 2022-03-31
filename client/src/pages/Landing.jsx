import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from '../components';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
          <Logo />
      </nav>
      <div className="container page">
          {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptatibus consequatur sunt ratione. Eum esse commodi corrupti
            fuga cum sequi?Lorem ipsum dolor sit amet consectetur, adipisicing
            elit.
          </p>
          <Link to="/register" className="btn bbtn-hero">
              Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
