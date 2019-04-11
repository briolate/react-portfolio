import React from 'react';
import styled from 'styled-components';

const StyledWork = styled.section`
  .work {
    height: 100vh;
    background-color: #cf4647;
    display: flex;
    position: relative;
  }
  .slice__wrapper_2 {
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

function Work() {
  return (
    <StyledWork>
      <section className="work">
        <div className="slice__wrapper_2">
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
              d="M1100,126L0,0L1100,0L1100,126Z"
            />
          </svg>
        </div>
        <h1>Work</h1>
      </section>
    </StyledWork>
  );
}

export default Work;
