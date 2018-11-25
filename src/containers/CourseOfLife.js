import React from 'react';
import { withRouteData, Head } from 'react-static';

const Home = () => {
  return (
    <main>
      <Head>
        <title>Phạm Minh Tâm - course of life</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Phạm Minh Tâm - seninor frontend engineer" />
        <meta name="author" content="Phạm Minh Tâm" />

        <meta property="og:title" content="Phạm Minh Tâm" />
        <meta property="og:description" content="Phạm Minh Tâm - seninor frontend engineer" />
        <meta property="og:image" content="/apple-icon-180x180.png" />

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <meta name="apple-mobile-web-app-title" content="xaolonist" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <meta name="msapplication-tilecolor" content="#ffffff" />
        <meta name="msapplication-tileimage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="manifest" href="/manifest.json" />
      </Head>

      <section className="container intro">
        <h1 className="xln">
          <div>phạm minh tâm</div>
        </h1>
        <ul>
          <li className="info">
            <span role="img" aria-label="pineapple">🍍</span>
            <a href="https://www.linkedin.com/in/tam-pham-51b41192/" target="_blank" rel="noopener noreferrer">linkedin</a>
            <span>, </span>
            <a href="https://medium.com/@xaolonist" target="_blank" rel="noopener noreferrer">medium</a>
            <span>, </span>
            <a href="https://github.com/tampham47" target="_blank" rel="noopener noreferrer">github</a>
            <span>, </span>
            <a href="https://codepen.io/tampham47" target="_blank" rel="noopener noreferrer">pen</a>
            <span>.</span>
          </li>
          <li>
            <span role="img" aria-label="mail">💌</span>
            <a href="mailto:tampham47@live.com">tampham47@live.com</a>
          </li>
          <li>
            <span role="img" aria-label="phone">🤙🏿</span>
            <a href="tel:+84343652922">+84343-652-922</a>
          </li>
        </ul>
      </section>

      <section className="container">
        <h2>working experiences</h2>
        <p>
          my familiarities include html5, css3, javascript, react, nodejs, and mongodb.
          i try to make fast websites. i speak vietnamese (first language, fluently)
          and english (professional level). i work well under pressure.
        </p>

        <ul className="course">
          <li className="course__item">
            <h2 className="course__title">
              <span role="img" aria-label="chart">💹</span> quoine
              <small className="course__time">
                apr 2017 – present
              </small>
            </h2>
            <p>
              quoine has been growing exponentially. when i first joined,
              the front-end team had 3 members only. now we are 12 members strong,
              half of which i interviewed. i was ruined that team while
              i am in head of frontend position.
            </p>

            <h4>senior front-end engineer, mkt tech (oct 2018 - present)</h4>
            <p>
              focusing on marketing technology.
              working with third parties such as hubspot to leverage productivity.
              making fast and beautiful websites.
            </p>

            <h4>head of front-end (apr 2018 - sep 2018)</h4>
            <p>released liquid, a new trading platform that is the combination of quoinex and qryptos. in particular, the front-end side of liquid is the fruit of labor from the cross-border efforts of quoine front-end team, based half in vietnam and half in japan.</p>
            <p>liquid landing page is built with jamstack technologies (https://jamstack.org) that is designed for seo and of which i am a fan. as a result, the landing page scores over 80 points by google search engine a few months after launching.</p>

            <h4>frontend engineer (apr 2017 - mar 2018)</h4>
            <p>helped build the quoinex platform from scratch and gained in-depth understanding about multiple functionalities of the existing platforms. worked with react, redux, and isolated css components.</p>
          </li>

          <li className="course__item">
            <h2 className="course__title">
              <span role="img" aria-label="coffee">☕</span> naustudio
              <small className="course__time">
                apr 2015 – apr 2017
              </small>
            </h2>
            <p>
              i have learned much from naustudio’s cto, mr. tran trong thanh. in particular, how to skeleton html structure and style css for easy maintenance. friday sharing weekly is a tradition at naustudio where we share and connect. here, we grow the same way we build our products.
            </p>
            <p>notable projects that i worked on at naustudio include greenbot and recpic.</p>

            <h4>greenbot</h4>
            <p>a combination of biology and it, the project uses iot to grow hydroponic vegetables. apart from being the main js developer, i also helped transform the design into the application layout. the project provided good experience with mqtt and strong-loop.</p>

            <h4>recpic</h4>
            <p>recpic is a korean startup project that helps manage expenses by capturing receipts. it was handed over from another agency and developed with angular. i built several new features and maintained the existing application. eventually due to political changes, the project was no longer supported by the government.</p>
          </li>

          <li className="course__item">
            <h2 className="course__title">
              <span role="img" aria-label="network">🕸️</span> sutrix solutions
              <small className="course__time">
                sep 2014 – apr 2015
              </small>
            </h2>
            <p>
              the most notable project in this period is wequit, a social network about quitting smoking. the project extended over 8 months during which i was the main js developer. we used phonegap, the outstanding tool at the time, to build a cross-platform application (ios and android) for this social network. managing big source code with angular 1.0 and great animations are what i learned from this project.
            </p>
          </li>

          <li className="course__item">
            <h2 className="course__title">
              <span role="img" aria-label="pineapple">🍍</span> behind the scene
            </h2>
            <p>
              i graduated in mid 2014 from university of information technology (uit).<br />
              i go to the gym in my spare time. i write about surrounding things in my life.
            </p>

            <p>i also contribute to several open-source projects.</p>
            <h4>jukebox</h4>
            <p>a music sharing application to be used at work. the app remains in use at naustudio where people can book the song they want to listen and a host will play them in order. it was built with meteor, with realtime as default.</p>
            <p>source: https://github.com/naustudio/nau-jukebox</p>


            <h4>goingsunny</h4>
            <p>a fanmade application for my favorite english book, “hack não - 1500 từ tiếng anh” which is designed to help learners improve english vocabularies. i am building it with react-starter-kit, with the boilerplate focusing on server-side rendering.</p>
            <p>source: https://github.com/tampham47/goingsunny-app</p>
          </li>
        </ul>
      </section>

      <footer className="container">
        <p className="footer__end">
          <span role="img" aria-label="cheer">🎉</span>
        </p>
      </footer>
    </main>
  );
};

export default withRouteData(Home);
