import React from 'react';
import styled from 'styled-components';
import { SVG2 } from '../../img/svgs';

const StyledWork4 = styled.section`
  .work4 {
    height: 100vh;
    background-color: #88c100;
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
    fill: #fabe28;
    transform: scale(-1, 1);
  }
`;

function Work4() {
  return (
    <StyledWork4>
      <section className="work4">
        <SVG2 />
      </section>
    </StyledWork4>
  );
}

export default Work4;
