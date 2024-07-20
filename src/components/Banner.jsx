import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className="landingbanner">
      <h2 className="bannerBrand">The Better Way to Trade & Invest</h2>
      <TypeAnimation className="typingText"
        style={{
            width: "40%",
            maxHeight: "35px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "400"
        }}
        sequence={["SmartVest Trading helps over 2 million customers achieve their financial goals by helping them trade and invest with ease.", 800, ""]}
        repeat={Infinity}
      />
      <Link to='/register'><button className="bannerBtn">Create Account</button></Link>
    </div>
  );
}
