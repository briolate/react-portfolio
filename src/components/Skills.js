import React from 'react';
import styled from 'styled-components';

const StyledSkills = styled.section`
  .skills {
    height: 100vh;
    background-color: #e5ddcb;
    display: flex;
    position: relative;
  }
  .slice__wrapper_2 {
    bottom: 0;
    position: absolute;
    width: 100%;
  }
`;

function Skills() {
  return (
    <StyledSkills>
      <section className="skills">
        <h1>My Skills</h1>
      </section>
    </StyledSkills>
  );
}

export default Skills;
