import React from 'react';
import styled from 'styled-components';
import Pollock from '../img/pollock.jpg';

const StyledContact = styled.section`
  .work {
    height: 100vh;
    /* background-color: #d1de3f; */
    display: flex;
    position: relative;
  }
  .work::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-image: url(${Pollock});
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .slice__wrapper_2 {
    position: absolute;
    top: 0;
    width: 100%;
    fill: #88c100;
  }
`;

function Contact() {
  return (
    <StyledContact>
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
      </section>
    </StyledContact>
  );
}

export default Contact;
