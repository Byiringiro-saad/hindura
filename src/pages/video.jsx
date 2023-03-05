import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//components
import Background from "../components/background";

const Video = () => {
  //configs
  const navigate = useNavigate();

  //local data
  const [video, setVideo] = React.useState(null);
  const file = useSelector((state) => state.file.file);

  console.log(file);

  useEffect(() => {
    if (file === null) {
      navigate("/");
    } else {
      const reader = new FileReader();
      const url = reader.readAsDataURL(file[0]);
      reader.onloadend = () => {
        setVideo(reader.result);
      };
    }
  }, []);

  return (
    <Background>
      <Container>
        <div className="video">
          <video src={video}></video>
          <div className="controlls"></div>
        </div>
      </Container>
    </Background>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .video {
    width: 95%;
  }
`;

export default Video;
