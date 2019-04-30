import React from 'react';
import styled from 'styled-components';
import Typer from './Typer';
import Belt from '../img/belt.jpg';
import { SVG1 } from '../img/svgs';

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
  }
  .cover::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url(${Belt});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .cover__text {
    margin: 0 auto;
    height: 100%;
    max-width: 800px;
    padding-top: 30vh;
  }
  h1 {
    font-family: 'Special Elite', cursive;
    color: black;
    text-shadow: 2px 2px 8px black;
    font-size: 5rem;
    z-index: 2;
  }
  .name {
    position: absolute;
  }
  .name span {
    /* color: #18453b; */
    color: white;
  }
  .typer {
    position: relative;
    padding-top: 120px;
  }
  .slice__wrapper_up {
    position: absolute;
    bottom: 0px;
    width: 100%;
    fill: #d1dbdc;
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
        <SVG1 />
      </div>
    </StyledCover>
  );
}

export default Cover;
