import React from "react";
import styled from "styled-components";

//images
import Logo from "../assets/Logo.png";

//components
import Background from "../components/background";

const Splash = () => {
  return (
    <Background>
      <Container>
        <img src={Logo} alt="logo" />
        <div className="para">
          <p className="welcome" data-text="Welcome to">
            Welcome to
          </p>
          <p className="name">Hindura</p>
        </div>
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

  img {
    width: 300px;

    @media only screen and (max-width: 1024px) {
      width: 200px;
    }
  }

  .para {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p.name {
      font-size: 3em;
      margin: 20px 0 0 6px;
      font-weight: 800;
      color: var(--bright);

      @media only screen and (max-width: 1024px) {
        font-size: 2em;
      }
    }

    p.welcome {
      font-size: 3em;
      margin: 20px 0 0 15px;
      font-weight: 800;
      color: var(--dark);
      position: relative;
      -webkit-text-stroke: 0.4px var(--white);

      @media only screen and (max-width: 1024px) {
        font-size: 2em;
      }

      ::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: var(--white);
        overflow: hidden;
        -webkit-text-stroke: 0vw var(--dark);
        animation: animate 5s ease-in;
      }

      @keyframes animate {
        0%,
        10%,
        100% {
          width: 0;
        }

        70%,
        90% {
          width: 100%;
        }
      }
    }
  }
`;

export default Splash;
