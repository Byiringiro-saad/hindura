import React from "react";
import styled from "styled-components";

const Background = (props) => {
  return (
    <Container>
      <div className="one" />
      <div className="children">{props.children}</div>
      <div className="two" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--dark);

  .children {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }
  }

  .one {
    position: absolute;
    width: 286px;
    height: 286px;
    left: -160px;
    top: -10px;
    background: var(--bright);
    filter: blur(173.5px);
  }

  .two {
    position: absolute;
    width: 286px;
    height: 286px;
    right: -160px;
    bottom: -10px;
    background: var(--bright);
    filter: blur(173.5px);
  }
`;

export default Background;
