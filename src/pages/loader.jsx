import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

//components
import Background from "../components/background";

const Loader = () => {
  const navigate = useNavigate();

  const [percentage, setPercentage] = React.useState(0);

  window.setInterval(() => {
    setPercentage(percentage + 25);
  }, 1000);

  useEffect(() => {
    if (percentage === 100) {
      navigate("/subtitles");
    }
  }, [percentage]);

  return (
    <Background>
      <Container>
        <div className="loader">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={2}
            styles={buildStyles({
              pathColor: "#F06A6A",
              trailColor: "#170707",
              textColor: "#FFFFFF",
              textSize: "7px",
            })}
          />
        </div>
        <p>Please Wait...</p>
      </Container>
    </Background>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loader {
    width: 45%;

    @media only screen and (max-width: 1024px) {
      width: 30%;
    }
  }

  p {
    font-size: 1.2em;
    color: var(--white);
    margin: 30px 0 0 0;
  }
`;

export default Loader;
