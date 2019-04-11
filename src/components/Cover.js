import React from 'react';
import styled from 'styled-components';

const StyledCover = styled.section`
  .cover {
    height: 100vh;
    background-color: #524656;
    display: flex;
  }
  .cover__text {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
  }
  h1 {
    color: #e5ddcb;
    text-shadow: 4px 4px 10px #eb7b59;
    font-size: 4rem;
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
          <h1>
            I'm <span>Evan Briolat</span>, a front-end developer ready to work
            for <span>you</span>.
          </h1>
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
