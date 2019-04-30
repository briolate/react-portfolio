import React from 'react';
import styled from 'styled-components';
import { SVG2 } from '../../img/svgs';

const StyledWork1 = styled.section`
  .work1 {
    height: 100vh;
    background-color: #ff003c;
    display: flex;
    position: relative;
  }
  .slice__wrapper_up {
    position: absolute;
    bottom: -3px;
    width: 100%;
    fill: #ff8a00;
  }
  .slice__wrapper_down {
    position: absolute;
    top: 0;
    width: 100%;
    fill: #d1dbdc;
  }
`;

function Work1() {
  return (
    <StyledWork1>
      <section className="work1">
        <SVG2 />
      </section>
    </StyledWork1>
  );
}

export default Work1;
