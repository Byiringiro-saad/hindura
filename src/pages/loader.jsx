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
      <Container></Container>
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
  z-index: 100;

  .loader {
    width: 45%;

    @media only screen and (max-width: 1024px) {
      width: 30%;
    }

    @media only screen and (max-width: 480px) {
      width: 60%;
    }
  }

  p {
    font-size: 1.2em;
    color: var(--white);
    margin: 30px 0 0 0;
  }
`;

export default Loader;
