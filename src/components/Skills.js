import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSkills = styled.section`
  .skills__wrapper {
    background-color: #d1dbdc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
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
    /* margin: 64px auto 0px auto; */
    font-family: 'Special Elite', cursive;
    font-size: 5rem;
    color: #18453b;
  }
  .skills {
    display: flex;
    /* padding: 64px 0 96px 0; */
    justify-content: space-evenly;
  }
  .skill__item {
    background-color: #18453b;
    display: flex;
    height: 200px;
    width: 150px;
    flex-direction: column;
    align-items: center;
    color: white;
    transition: 1.5s;
    opacity: 0;
    h2 {
      padding-top: 20px;
    }
  }
  .slice__wrapper_2 {
    bottom: 0;
    position: absolute;
    width: 100%;
  }
`;

function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.pageYOffset > 500 && window.pageYOffset < 1200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      document.querySelectorAll('.skill__item').forEach(el => {
        if (visible === true) {
          el.style.opacity = '1';
          el.style.marginTop = '20px';
        }
        if (visible === false) {
          el.style.opacity = '0';
          el.style.marginTop = '0px';
        }
      });
    };
  }, [visible]);

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
