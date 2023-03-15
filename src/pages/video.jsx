import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import React, { useEffect, useRef, useState } from "react";

//icons
import { MdEditNote } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { RiListSettingsLine } from "react-icons/ri";
import { BsPlayCircleFill, BsPauseFill } from "react-icons/bs";

//components
import Background from "../components/background";

const Video = () => {
  //configs
  const videoRef = useRef(null);
  const navigate = useNavigate();

  //local data
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const file = useSelector((state) => state.file.file);

  const playVideo = () => {
    setPlaying(true);
    videoRef.current.play();
    const vid = document.getElementById("video");
    setVideoTime(vid.duration);
  };

  const pauseVideo = () => {
    setPlaying(false);
    videoRef.current.pause();
  };

  const goToGenerating = () => {
    navigate("/generating");
  };

  window.setInterval(() => {
    setCurrentTime(videoRef?.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  useEffect(() => {
    if (file === null) {
      navigate("/");
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onloadend = () => {
        setVideo(reader.result);
      };
    }
  }, []);

  useEffect(() => {
    if (currentTime === videoTime) {
      setPlaying(false);
    }
  }, [currentTime]);

  return (
    <Background>
      <Container>
        <div className="video">
          <video id="video" src={video} ref={videoRef}></video>
          <div className="controlls">
            {playing ? (
              <BsPauseFill className="icon" onClick={pauseVideo} />
            ) : (
              <BsPlayCircleFill className="icon" onClick={playVideo} />
            )}
            <div className="progress">
              <p className="value">
                {Math.floor(currentTime / 60) +
                  ":" +
                  ("0" + Math.floor(currentTime % 60)).slice(-2)}
              </p>
              <progress value={progress} max={100} />
              <p className="end">
                {Math.floor(videoTime / 60) +
                  ":" +
                  ("0" + Math.floor(videoTime % 60)).slice(-2)}
              </p>
            </div>
            <IoMdVolumeHigh className="icon" />
          </div>
        </div>
        <div className="buttons">
          <div className="button" onClick={goToGenerating}>
            <RiListSettingsLine className="icon" />
            <p>Generate subtitles</p>
          </div>
          {/* <div className="button">
            <MdEditNote className="icon" />
            <p>Edit subtitles</p>
          </div> */}
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
  z-index: 100;

  .video {
    width: 95%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      width: 80%;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
    }

    video {
      width: 100%;
      border-radius: 10px;
    }

    .controlls {
      width: 80%;
      height: 50px;
      background: #170707c3;
      position: absolute;
      bottom: 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;

      @media only screen and (max-width: 1024px) {
        width: 85%;
        height: 40px;
      }

      @media only screen and (max-width: 768px) {
        width: 90%;
        height: 30px;
        padding: 0 10px;
      }

      .icon {
        cursor: pointer;
        font-size: 1.5em;
        color: var(--white);

        @media only screen and (max-width: 1024px) {
          font-size: 1.3em;
        }

        @media only screen and (max-width: 768px) {
          font-size: 1.2em;
        }
      }

      .progress {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 768px) {
          width: 85%;
        }

        progress {
          width: 85%;
          height: 5px;
          border: none;

          ::-webkit-progress-bar {
            background: var(--white);
            border-radius: 10px;
          }

          ::-webkit-progress-value {
            background: var(--bright);
            border-radius: 10px;
          }
        }

        p {
          color: var(--white);

          @media only screen and (max-width: 768px) {
            margin: 0 10px;
          }
        }
      }
    }
  }

  .buttons {
    width: 80%;
    height: 40px;
    display: flex;
    margin: 30px 0 0 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
      width: 95%;
    }

    .button {
      padding: 15px 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: var(--bright);
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      @media only screen and (max-width: 1024px) {
        padding: 10px 15px;
      }

      :hover {
        background: var(--bright);
      }

      .icon {
        font-size: 1.3em;
        margin: 0 10px 0 0;
        color: var(--white);
      }

      p {
        color: var(--white);
      }
    }
  }
`;

export default Video;
