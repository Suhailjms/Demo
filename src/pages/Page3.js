import { Link } from "react-router-dom";
import LOGO from '../logo.svg';
import './page3.css';
import Image from "../pics/pic.jpg";
import ResponsiveAppBar from "../components/nav";
const Page3 = () => {
    return (
        <>
        <ResponsiveAppBar />
        <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${<Image />})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          {/* <label htmlFor="name">Full Name</label> */}
          <input name="name" placeholder="Enter full name..." type="text" />
          {/* <label htmlFor="email">Email</label> */}
          <input name="email" placeholder="Enter email..." type="email" />
          {/* <label htmlFor="message">Description</label> */}
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
    </>

    )
};
export default Page3;