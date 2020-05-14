// Old Version of Home page

import React from 'react'
import { Link } from 'react-router-dom'

// import 'devicon'
import LazyHero from 'react-lazy-hero'

const TestBed = () => {
  return (
    <main>

      <section className="hero is-info is-fullheight">
        {/* <!-- Added is-fullheight to make it take up the whole page-->
<!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <nav className="navbar">

          </nav>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">
              Gordon Gyakyi
            </h1>
            <h2 className="subtitle">
              Junior Software Engineer. Runner. Music and Travel Lover.
            </h2>
          </div>
        
   
        
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a>Home</a></li>
                <li><a>About Me</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                <li><a>Experience</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      {/* About me Section */}
      {/* Two columns - Left Picture & Right Words*/}
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              About Me
            </h1>

            <div className="columns">
              <div className="column">
                {/* First column - Picture */}
                <figure className="image is-128x128">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/256x256.png" />
                  {/* <img className="is-rounded" src="/Users/gordongyakyi/development/portfolio/frontend/src/Images/Gordon-Headshot-2141-128.jpg" /> */}
                </figure>

              </div>
              <div className="column">
                <p>Hello, my name's Gordon! I'm an aspiring full stack web developer, enrolled on General Assembly's Software Enginnering Immersive course.
                In a previous life I was a senior Business Analyst with twenty years experience in the Investment Banking sector, primarily in the area of Reference Data Management. Although it was a career that I enjoyed and one where I had a proven track record of helping to deliver successful outcomes in a number of projects and business process re-engineering initiatives, I can to the colculsion that I both wanted an needed to try something different for the next stage of my career.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Skills
              <i className="devicon-html5-plain-wordmark is-size-1"></i>
              <i className="devicon-css3-plain-wordmark is-size-1"></i>
              <i className="devicon-git-plain-wordmark is-size-1"></i>
              <i className="devicon-github-plain-wordmark is-size-1"></i>
              <i className="devicon-trello-plain-wordmark is-size-1"></i>
              <i className="devicon-visualstudio-plain is-size-1"></i>
              <i className="devicon-mongodb-plain-wordmark is-size-1"></i>
              <i className="devicon-react-original-wordmark is-size-1"></i>
              <i className="devicon-javascript-plain is-size-1"></i>
              <i className="devicon-django-plain is-size-1"></i>
              <i className="devicon-python-plain-wordmark is-size-1"></i>
              <i className="devicon-postgresql-plain-wordmark is-size-1"></i>
              <i className="devicon-nodejs-plain is-size-1"></i>
              <i className="devicon-express-original is-size-1"></i>
              <i className="devicon-heroku-original-wordmark is-size-1"></i>
              <i className="devicon-slack-plain is-size-1"></i>
              <i className="devicon-webpack-plain-wordmark is-size-1"></i>
              <i className="devicon-babel-plain is-size-1"></i>
              <i className="devicon-mocha-plain is-size-1"></i>
              <i className="devicon-sass-original is-size-1"></i>
            </h1>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Projects
            </h1>
          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Experience
            </h1>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Contact
            </h1>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made with Love and Code by Gordon Gyakyi
          </p>
        </div>
      </footer>

    </main>
  )
}
export default TestBed
