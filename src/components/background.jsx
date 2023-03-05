import React from "react";
import styled from "styled-components";

const Background = (props) => {
  return (
    <Container>
      <div className="one" />
      {props.children}
      <div className="two" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--dark);

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
