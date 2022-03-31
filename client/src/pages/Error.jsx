import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt="not found" />
            <h3>Ohh! Page not found</h3>
            <p>Could not find the page you searched for </p>
            <Link to="/">back home</Link>
        </div>
    </Wrapper>
  )
}

export default Error
