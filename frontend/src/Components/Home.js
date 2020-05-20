import React from 'react'
import { Link } from 'react-router-dom'

// import 'devicon'
import LazyHero from 'react-lazy-hero'

const Home = () => {
  return (
    <main>

      <section id="hero-header" className="hero is-info is-fullheight">
        <div id="home" className="hero-head">
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 id="gname" className="title">
              Gordon Gyakyi
            </h1>
            <h2 id="gsub" className="subtitle">
              Junior Software Engineer. Runner. Music and Travel Lover.
            </h2>
          </div>

        </div>
  
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      {/* About me Section */}

      <section className="about hero is-fullheight">
        <div className="level-item has-text-centered">

        </div>
        <div id="about-section" className="hero-body">

          <div className="container">
            <h1 id="about" className="title has-text-centered section-head">
              About Me
            </h1>
            <div className="columns has-text-centered is-vcentered">
              <div className="column">
                <img id="headshot" src="https://www.dropbox.com/s/cbz0kgl2a9s1uo2/Gordon-circle.png?raw=1" alt="Gordon's Profile" />
              </div>
              <div className="column">

                <div className="container">
                  <div className="notification">
                    <p>Greetings! My name&apos;s Gordon! I&apos;m a Junior Full-Stack Developer and graduate of General Assembly&apos;s Software Engineering Immersive course. I enrolled on the course to scratch an itch and to supercharge a career change into software engineering. <br /><br />

                    In a previous life I was a Senior Business Analyst with twenty years’ experience in the Investment Banking sector, primarily in Reference Data Management. Although it was a career I enjoyed, I concluded towards the end of 2019, that I both wanted and needed to try something different. Ultimately, that desire led me to take the course at GA and leaves me excited to embark on a new career path. <br /><br />

                    Outside of work, I’m a keen runner, which I find is a godsend for both physical and mental wellbeing. I&apos;ve always had a passion for music, in all it&apos;s forms. Whether that be DJing, gigging, listening to it or heading off to Glastonbury. Last, but certainly not least, I&apos;m a real travel lover. Experiencing new cultures, as well as beautiful locations, is something that I continue to find fascinating. For me, travelling is a fast track to knowledge, without actually having to study.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills hero is-danger is-fullheight">

        <div id="skills-section" className="hero-body">
          <div className="container has-text-centered">
            <h1 id="skills" className="title has-text-centered section-head">
              Skills
            </h1>
            <div className="container is-fluid">

              <div className="columns">
                <div className="column">
                  <i className="devicon-html5-plain is-size-1"></i>
                  <p>HTML5</p>
                </div>
                <div className="column ">
                  <i className="devicon-css3-plain is-size-1"></i>
                  <p>CSS3</p>
                </div>
                <div className="column">
                  <i className="devicon-git-plain is-size-1"></i>
                  <p>Git</p>
                </div>
                <div className="column">
                  <i className="devicon-github-plain is-size-1"></i>
                  <p>GitHub</p>
                </div>
                <div className="column">
                  <i className="devicon-trello-plain is-size-1"></i>
                  <p>Trello</p>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <i className="devicon-visualstudio-plain is-size-1"></i>
                  <p>VS Code</p>
                </div>
                <div className="column">
                  <i className="devicon-mongodb-plain is-size-1"></i>
                  <p>MongoDB</p>
                </div>
                <div className="column">
                  <i className="devicon-react-original is-size-1"></i>
                  <p>React.js</p>
                </div>
                <div className="column">
                  <i className="devicon-javascript-plain is-size-1"></i>
                  <p>JavaScript</p>
                </div>
                <div className="column">
                  <i className="devicon-django-plain is-size-1"></i>
                  <p>Django</p>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <i className="devicon-python-plain is-size-1"></i>
                  <p>Python</p>
                </div>
                <div className="column">
                  <i className="devicon-postgresql-plain is-size-1"></i>
                  <p>PostgreSQL</p>
                </div>
                <div className="column">
                  <i className="devicon-nodejs-plain is-size-1"></i>
                  <p>Node.js</p>
                </div>
                <div className="column">
                  <i className="devicon-express-original is-size-1"></i>
                  <p>Express.js</p>
                </div>
                <div className="column">
                  <i className="devicon-heroku-original is-size-1"></i>
                  <p>Heroku</p>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <i className="devicon-slack-plain is-size-1"></i>
                  <p>Slack</p>
                </div>
                <div className="column">
                  <i className="devicon-webpack-plain is-size-1"></i>
                  <p>Webpack</p>
                </div>
                <div className="column">
                  <i className="devicon-babel-plain is-size-1"></i>
                  <p>Babel</p>
                </div>
                <div className="column">
                  <i className="devicon-mocha-plain is-size-1"></i>
                  <p>Mocha</p>
                </div>
                <div className="column">
                  <i className="devicon-sass-original is-size-1"></i>
                  <p>Sass</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section className="projects hero is-info is-fullheight">
        <div id="projects-section" className="hero-body">
          <div className="container has-text-centered">
            <h1 id="projects" className="title section-head">
              Projects
            </h1>
            <div className="tile is-ancestor">
              {/* 'over' added below for overlay */}
              <div className="tile is-parent over">
                <article className="tile is-child box">
                  <h4>Land of the Snake</h4>
                  <p>SEI Project One</p>
                  <figure>
                    <img src="https://i.imgur.com/fqvfPaGh.png" />
                  </figure>
                </article>
                {/* Added Below for overlay*/}
                <div className="overlay">
                  <div className="text">
                    My First SEI Project. A one-week solo project to build a grid-based game, using vanilla JavaScript, HTML and CSS.<br /><br />
                    It was based on the classic arcade game snake and built entirely in Vanilla JavaScript.<br /><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://intravenous.github.io/project-1">Deployed Project</a><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/project-1">Repository</a>
                  </div>
                </div>
                {/* Added for overlay */}
              </div>
              {/* 'over' added below for overlay */}
              <div className="tile is-parent over">
                <article className="tile is-child box">
                  <h4>Soundtrack</h4>
                  <p>SEI Project Two</p>
                  <figure>
                    <img src="https://i.imgur.com/dRWtKn5h.jpg" />
                  </figure>
                </article>
                {/* Added Below for overlay*/}
                <div className="overlay">
                  <div className="text">
                    A multi-page React application that consumed and used the Deezer music API, also utilised Bulma and CSS.<br /><br />
                    The application takes a user’s birthdate and returns the number one single in the UK for each year, since they were born.<br /><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://intravenous.github.io/Project-2/">Deployed Project</a><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/Project-2">Repository</a>
                  </div>
                </div>
                {/* Added for overlay */}
              </div>
              {/* 'over' added below for overlay */}
              <div className="tile is-parent over">
                <article className="tile is-child box">
                  <h4>BookedUp</h4>
                  <p>SEI Project Three</p>

                  <figure>
                    <img src="https://i.imgur.com/dflUP27h.png" />
                  </figure>

                </article>
                {/* Added Below for overlay*/}
                <div className="overlay">
                  <div className="text">
                    A seven-day group project, to build a full-stack application using React for the front end and an Express API to serve a Mongo database for the back end.
                    <br /><br />
                    Our project created a personal library for the user, that enabled them to login, browse for books and save those books to their accounts.<br /><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://booked-up.herokuapp.com/">Deployed Project</a><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/BookedUp">Repository</a>
                  </div>
                </div>
                {/* Added for overlay */}
              </div>
              {/* 'over' added below for overlay */}
              <div className="tile is-parent over">
                <article className="tile is-child box">
                  <h4>L.A.B.S</h4>
                  <p>SEI Project Four</p>

                  <figure>
                    <img src="https://i.imgur.com/Fs7PSSfh.png" />
                  </figure>

                </article>
                {/* Added Below for overlay*/}
                <div className="overlay">
                  <div className="text">
                    A seven-day group project, to build a full-stack application using React and CSS for the front end and Django / PostgreSQL database for the back end. The application implemented CRUD functionality and was a prototype medical booking system.<br /><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://proj-labs.herokuapp.com/#/">Deployed Project</a><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous/LABS">Repository</a>
                  </div>
                </div>
                {/* Added for overlay */}
              </div>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-parent is-3 over">
                <article className="tile is-child box">
                  <h4>The Crate</h4>
                  <p>Personal Side Project</p>
                  <figure>
                    <img src="https://i.imgur.com/b291JuG.jpg" />
                  </figure>
                </article>
                {/* Added Below for overlay*/}
                <div className="overlay">
                  <div className="text">
                    <p>COMING SOON</p>
                  </div>
                </div>
                {/* Added for overlay */}
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section className="experience hero is-fullheight">

        <div id="experience-section" className="hero-body">
          <div className="container is-fluid">
            <h1 id="experience" className="title has-text-centered section-head">
              Experience
            </h1>
            <div className="notification">
              <div className="columns">

                <div className="column" >
                  <p className="title experience-subtitle">Education</p>
                  <p className="company-name">General Assembly</p>
                  <p><span>Software Engineering Immersive</span> • Feb - April 2020</p> <br />
                  <p>When I enrolled in the course, my aim was to immersing myself in the subject with likeminded people and build on the independent online courses that I had undertaken. After completing the course, I’m glad to report that I feel that I achieved those aims. <br /> <br />

                  Looking to the future, I’m really looking forward to continuing my learning journey. The opportunity to mix my new skills as a developer, with the skills I developed in my previous life as a Business Analyst really excites me. <br /> <br />
                  </p>
                  <p className="company-name">Queen Mary University of London</p>
                  <p><span> BA (Hons) Politics</span> • July 1994 - July 1997</p> <br />
                  <p>My degree in Politics, first and foremost allowed me to study a subject that I found and still do find, fascinating. It also allowed me to confirm that it wasn’t something that I wanted to pursue in terms of a career, despite my continuing fascination with the subject. <br /><br /> Although not wishing to pursue a career in my chosen field of study, I found that the skills of critical thinking, the art of persuasion and the ability to communicate thoughts in the written word, all to be valuable tools in both my career and life in general. It also gave me the chance to study abroad for a year in the United States and that is something that I am eternally grateful for.</p>
                  <br /> <br />
                  <p className="title experience-subtitle">Work</p>
                  <p className="company-name">UBS</p>
                  <p><span>Risk Reference Data Business Analyst</span> • Jun 2017 – Dec 2019</p> <br />
                  <p>At UBS, I was the Lead Business Analyst in Risk for two reference data domains and the key Risk business contact for both Risk and Operations IT. Tasks included: writing Business Specification documents, reviewing Functional Specification documents and providing UAT support for key system changes.</p>
                  <br />
                  <p className="company-name">HSBC</p>
                  <p><span>Global Standards Data Readiness Business Analyst</span> • May 15 – Jun 17</p> <br />
                  While at HBSC, I re-organised and chaired the Global Standards Reference Data Forum. The forum included all HSBC lines of business as well as representation from Operations, IT and Risk. I was also the Business Analyst on the Data Readiness Transaction Monitoring and Sanctions Payment Screening project.
                  <br /><br />
                  <p> For a full career breakdown, please refer to my <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gordon-gyakyi-99419b1a/">
                    Linkedin
                  </a> profile.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="contact hero has-background-grey is-bold">
        <div id="contacts-section" className="hero-body">
          <h1 id="contact" className="title has-text-centered section-head">
            Contact
          </h1>
          <div className="container">

            <div className="columns has-text-centered">
              <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="mailto:gordon.gyakyi@btinternet.com">
                  <i className="fas fa-3x fa-envelope"></i>
                </a>
              </div>
              <div className="column ">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Intravenous">
                  <i className="fab fa-3x fa-github"></i>
                </a>
              </div>
              <div className="column">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gordon-gyakyi-99419b1a/">
                  <i className="fab fa-3x fa-linkedin-in"></i>
                </a>
              </div>

            </div>

            <div className="content has-text-centered">
              <p>
                Made with ♥ and &#123; &#125; by Gordon Gyakyi
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
export default Home