import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useDropzone } from "react-dropzone";
import React, { useCallback } from "react";

//icons
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaRegFileVideo } from "react-icons/fa";

//images
import file_video from "../assets/video.png";

//components
import Background from "../components/background";

//actions
import { addFile } from "../store/reducers/file";

const Upload = () => {
  //configs
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //local data
  const [file, setFile] = React.useState(null);
  const [percent, setPercent] = React.useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
    handleProgress();
  }, []);

  const handleProgress = () => {
    setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 50);
  };

  const deleteFile = () => {
    setFile(null);
    setPercent(0);
  };

  const approveFile = () => {
    if (percent === 100) {
      dispatch(addFile(file));
      navigate("/video");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Background>
      <Container>
        <div className="container">
          <div className="header">
            <p className="title">Upload video</p>
            <p className="para">Click or drag and drop your video file</p>
          </div>
          {file ? (
            <div className="about">
              <div className="file">
                <FaRegFileVideo className="icon" />
                <div className="loader">
                  <div className="top">
                    <p className="name">{file[0]?.name}</p>
                    <p>{percent}%</p>
                  </div>
                  <div className="down">
                    <progress value={percent} max={100} />
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="cancel" onClick={deleteFile}>
                  <RxCross2 className="icon" />
                </div>
                <div className="approve" onClick={approveFile}>
                  <MdDone className="icon" />
                </div>
              </div>
            </div>
          ) : (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} accept="video/*" />
              <img src={file_video} alt="file_video" />
            </div>
          )}
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

    .about {
      width: 60%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .file {
        width: 100%;
        height: 50px;
        margin: 0 0 50px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .icon {
          font-size: 3em;
          color: var(--bright);
        }

        .loader {
          width: 85%;
          height: 100%;
          display: flex;
          flex-direction: column;

          .top {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            p {
              color: var(--white);
            }

            p.name {
              width: 50%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }

          .down {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: row;
            align-items: flex-end;

            progress {
              width: 100%;
              border: none;
              border-radius: 50px;

              ::-webkit-progress-bar {
                background: var(--white);
                border-radius: 10px;
              }

              ::-webkit-progress-value {
                background: var(--bright);
                border-radius: 10px;
              }
            }
          }
        }
      }

      .controls {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        > div {
          width: 80px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;

          .icon {
            font-size: 1.5em;
            color: var(--white);
          }
        }

        .cancel {
          border: 1px solid var(--bright);
        }

        .approve {
          background: var(--bright);
        }
      }
    }

    .upload {
      width: 60%;
      height: 300px;
      position: relative;
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
