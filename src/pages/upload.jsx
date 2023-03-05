import React from "react";
import styled from "styled-components";

//images
import file_video from "../assets/video.png";

//components
import Background from "../components/background";

const Upload = () => {
  return (
    <Background>
      <Container>
        <div className="container">
          <div className="header">
            <p className="title">Upload video</p>
            <p className="para">Click or drag and drop your video file</p>
          </div>
          <div className="upload">
            <img src={file_video} alt="file_video" />
          </div>
        </div>
      </Container>
    </Background>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .container {
    width: 700px;
    height: auto;
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--box);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);

    .header {
      width: 100%;
      height: auto;
      margin: 0 0 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p.title {
        font-size: 2em;
        font-weight: 800;
        color: var(--white);
        margin: 0 0 5px 0;
      }

      p.para {
        color: var(--white);
      }
    }

    .upload {
      width: 60%;
      height: 300px;
      border-radius: 10px;
      background: var(--dark);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--bright);
    }
  }
`;

export default Upload;
