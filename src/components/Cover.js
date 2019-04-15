import React from 'react';
import styled from 'styled-components';
import Typer from './Typer';

const StyledCover = styled.section`
  #cursor {
    border-left: 0.1em solid;
    animation: blink 0.7s steps(1) infinite;
    ::after {
      content: 'x';
      opacity: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  .cover {
    height: 100vh;
    background-color: #524656;
  }
  .cover__text {
    margin: 0 auto;
    height: 100%;
    max-width: 600px;
    padding-top: 100px;
  }
  h1 {
    color: #e5ddcb;
    text-shadow: 4px 4px 10px #eb7b59;
    font-size: 4rem;
  }
  .name {
    position: absolute;
  }
  .typer {
    position: absolute;
    padding-top: 120px;
  }
  .slice__wrapper_1 {
    position: absolute;
    bottom: -3px;
    width: 100%;
  }
`;

function Cover() {
  return (
    <StyledCover>
      <div className="cover">
        <div className="cover__text">
          <h1 className="name">
            I'm <span>Evan Briolat</span>, a
          </h1>
          <Typer
            dataText={[
              'front-end web developer',
              'musician',
              'painter',
              'full stack developer'
            ]}
          />
        </div>
        <div className="slice__wrapper_1">
          <svg
            className="slice__svg"
            width="100%"
            height="100%"
            viewBox="0 0 1100 126"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="slice__path--light"
              d="M1100,0L0,126L1100,126L1100,0Z"
            />
          </svg>
        </div>
      </div>
    </StyledCover>
  );
}

export default Cover;
