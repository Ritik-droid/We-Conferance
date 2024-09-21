import React from "react";
import frontImag from "../../Assets/frontImg.png";
import "./HomePage.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CButton } from "@coreui/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/Login");
  };
  const handleSignUPClick = () => {
    navigate("/SignUP");
  };

  return (
    <>
      <div className="mainComp">
        <div className="imageSide">
          <img
            src={frontImag}
            alt="This is main image"
            width="800vw"
            height="500vh"
          />
        </div>

        <div className="Description">
          <h1>Microsoft Teams Meet chat and collaborate in one place</h1>
          <CButton
            color="primary"
            type="submit"
            className="btn"
            onClick={handleLoginClick}
          >
            SIGN IN
          </CButton>
          <CButton color="light" type="submit" className="btn" onClick={handleSignUPClick}>
            SIGN UP FOR FREE
          </CButton>
        </div>
      </div>
    </>
  );
};

export default HomePage;
