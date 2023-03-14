import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import React, { useEffect, useRef, useState } from "react";

//images
import image from "../assets/chunk.jpg";

//icons
import { TbFileExport } from "react-icons/tb";
import { IoMdVolumeHigh } from "react-icons/io";
import {
  BsChevronLeft,
  BsShareFill,
  BsPauseFill,
  BsPlayCircleFill,
} from "react-icons/bs";

//components
import Background from "../components/background";

const Edit = () => {
  //configs
  const videoRef = useRef(null);
  const navigate = useNavigate();

  //local data
  const [video, setVideo] = useState(null);
  const [chunk, setChunk] = useState(
    "Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet malesuada nisl. Pellentesque laoree"
  );
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

  const goBack = () => {
    navigate("/subtitles");
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
        <div className="top">
          <div className="buttons">
            <div className="button dark" onClick={goBack}>
              <BsChevronLeft className="icon" />
              <p>Back</p>
            </div>
            <div className="button bright">
              <BsShareFill className="icon" />
              <p>Share</p>
            </div>
            <div className="button bright">
              <TbFileExport className="icon" />
              <p>Export</p>
            </div>
          </div>
          <div className="video">
            <video id="video" src={video} ref={videoRef}></video>
          </div>
        </div>
        <div className="bottom">
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
          <div className="subtitles">
            <div className="box">
              <textarea value={chunk} />
            </div>
            <div className="box">
              <textarea value={chunk} />
            </div>
            <div className="box">
              <textarea value={chunk} />
            </div>
            <div className="box">
              <textarea value={chunk} />
            </div>
          </div>
          <div className="chunks">
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
            <div className="chunk">
              <img src={image} alt="chunk" />
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 20px 0;
  }

  .top {
    width: 100%;
    height: auto;
    display: flex;
    padding: 0 15px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 1000;

    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }

    .buttons {
      width: 12%;
      height: auto;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }

      .dark {
        background: var(--box);
      }

      .bright {
        background: var(--bright);
      }

      .button {
        width: 100%;
        height: 40px;
        margin: 0 0 20px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        @media only screen and (max-width: 1024px) {
          height: 35px;
        }

        @media only screen and (max-width: 480px) {
          width: 30%;
        }

        :hover {
          background: #f85d5d;
        }

        .icon {
          color: var(--white);
          margin: 0 10px 0 0;
        }

        p {
          color: var(--white);
        }
      }
    }

    .video {
      width: 85%;

      @media only screen and (max-width: 1024px) {
        width: 80%;
      }

      @media only screen and (max-width: 480px) {
        width: 100%;
      }

      video {
        width: 100%;
        border-radius: 10px;
      }
    }
  }

  .bottom {
    width: 100%;
    margin: 20px 10px 0 10px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--box);

    .controlls {
      width: 80%;
      height: 50px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;

      @media only screen and (max-width: 480px) {
        width: 100%;
      }

      .icon {
        cursor: pointer;
        font-size: 1.5em;
        color: var(--white);
      }

      .progress {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 480px) {
          width: 80%;
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

          @media only screen and (max-width: 480px) {
            margin: 0 5px;
          }
        }
      }
    }

    .subtitles {
      width: 95%;
      height: auto;
      display: flex;
      padding: 20px 0 0 0;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px solid var(--bright);

      .box {
        width: 24%;
        height: 130px;
        background: #170707;
        border-radius: 5px;

        textarea {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          padding: 15px;
          background: transparent;
          color: var(--white);
        }
      }
    }

    .chunks {
      width: 95%;
      height: auto;
      margin: 15px 0 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .chunk {
        border-radius: 5px;
        overflow: hidden;
      }
    }
  }
`;

export default Edit;
