import React from 'react';
import styled from 'styled-components';
import { SVG2 } from '../../img/svgs';

const StyledWork2 = styled.section`
  .work2 {
    height: 100vh;
    background-color: #ff8a00;
    display: flex;
    position: relative;
  }
  .slice__wrapper_up {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* fill: #ff8a00; */
    fill: black;
  }
  .slice__wrapper_down {
    position: absolute;
    top: 0;
    width: 100%;
    fill: #ff003c;
    transform: scale(-1, 1);
  }
`;

function Work2() {
  return (
    <StyledWork2>
      <section className="work2">
        <SVG2 />
      </section>
    </StyledWork2>
  );
}

export default Work2;
