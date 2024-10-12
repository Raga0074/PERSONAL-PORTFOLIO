import React from 'react';

function Project() {
  return (
    <section id='project' className='w-full mt-20 columns-1 md:columns-2 sm:columns-1 justify-evenly gap-4'>
      <h1 className='honk flex flex-col mb-5 text-left ml-28 text-4xl '>Projects:</h1>
       <a href='https://main--carsrental8.netlify.app/'><article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img className='rounded-lg object-fit' src='rental.png'/>
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">Rental Site🚗<br/>(deployed)</div>
            <div className="project-hover">
              <svg
                style={{ color: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth={2}
                fill="none"
                stroke="currentColor">
                <line y2="12" x2="19" y1="12" x1="5" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            <span
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className="project-type"
            >
              HTML5; CSS
            </span>
            <span className="project-type">JavaScrpit</span>
          </div>
        </div>
      </article></a>

      <a href='https://github.com/Raga0074/Final-Year-Project'><article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src='final yr.png'/>
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">Final Year Project💀</div>
            <div className="project-hover">
              <svg
                style={{ color: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth={2}
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            <span
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className="project-type"
            >
              PHP; HTML5
            </span>
            <span className="project-type">CSS; JavaScript</span>
          </div>
        </div>
      </article></a>

      <a href='https://sundowm-studio-landing-page.vercel.app/'><article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src='sundown.png'/>
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">Sundown studio🎸<br/>(deployed)</div>
            <div className="project-hover">
              <svg
                style={{ color: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth={2}
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            </div>
          <div className="types">
            <span
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className="project-type"
              >
              HTML5; CSS
            </span>
            <span className="project-type">JavaScript; cdn</span>
          </div>
        </div>
      </article></a>

      <a href='https://github.com/Raga0074/iPhone'><article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src='iPhone.png'/>
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">iPhone 15 pro page📱</div>
            <div className="project-hover">
              <svg
                style={{ color: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth={2}
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            <span
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className="project-type"
            >
              React js; Three js
            </span>
            <span className="project-type">GSAP; Tailwind</span>
          </div>
        </div>
      </article></a>
    </section>
  );
}

export default Project;
