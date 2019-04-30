import React from 'react';

function SVG1() {
  return (
    <div className="slice__wrapper_up">
      <svg
        className="slice__svg"
        width="100%"
        height="100%"
        viewBox="0 0 1100 126"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="slice__path--color"
          d="M1100,0L0,126L1100,126L1100,0Z"
        />
      </svg>
    </div>
  );
}

function SVG2() {
  return (
    <div className="slice__wrapper_down">
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
  );
}

export { SVG1, SVG2 };
