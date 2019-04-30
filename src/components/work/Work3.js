import React from 'react';
import styled from 'styled-components';
import { SVG2 } from '../../img/svgs';

const StyledWork = styled.section`
  .work3 {
    height: 100vh;
    background-color: #fabe28;
    display: flex;
    position: relative;
  }
  .slice__wrapper_up {
    position: absolute;
    bottom: -3px;
    width: 100%;
    fill: #88c100;
  }
  .slice__wrapper_down {
    position: absolute;
    top: 0;
    width: 100%;
    fill: #ff8a00;
  }
`;

function Work3() {
  return (
    <StyledWork>
      <section className="work3">
        <SVG2 />
      </section>
    </StyledWork>
  );
}

export default Work3;
