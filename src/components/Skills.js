import React from 'react';
import styled from 'styled-components';

const StyledSkills = styled.section`
  .skills__wrapper {
    background-color: #e5ddcb;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .skills__content {
    margin: auto;
    width: 100%;
    max-width: 1440px;
  }
  .title__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px auto 0px auto;
  }
  .skills {
    display: flex;
    padding: 96px 0 64px 0;
    justify-content: space-evenly;
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
      <section className="skills__wrapper">
        <div className="skills__content">
          <div className="title__wrapper">
            <h1>Skills</h1>
          </div>
          <div className="skills">
            <div className="skill__item">
              <h2>Front-end</h2>
              <ul>
                <li>HTML</li>
                <li>CSS/Sass</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Flexbox/Grid</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skill__item">
              <h2>Back-end</h2>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="skill__item">
              <h2>Knowledge</h2>
            </div>
          </div>
        </div>
      </section>
    </StyledSkills>
  );
}

export default Skills;
