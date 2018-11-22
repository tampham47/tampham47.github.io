import React from 'react';
import { withRouteData, SiteData, Head } from 'react-static';
import moment from 'moment';

const Home = ({ postList }) => {
  return (
    <SiteData>
      {({ lastBuilt }) => (
        <main>
          <Head>
            <title>d. xaolonist</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Pham Minh Tam - who is a scientist, an anthropologist, a psychologist, a moralist, an alchemist... i am also doing web ui on my left hand." />
            <meta name="keywords" content="Frontend Lead, Senior Frontend, Sai Gon, Viet Nam" />
            <meta name="author" content="Pham Minh Tam" />

            <meta property="og:title" content="d. xaolonist" />
            <meta property="og:description"
              content="who is a scientist, an anthropologist, a psychologist, a moralist, an alchemist... i am also doing web ui on my left hand." />
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
            <meta name="apple-mobile-web-app-title" content="Xaolonist" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />

            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="manifest" href="/manifest.json" />
          </Head>

          <section className="container intro">
            <h1 className="xln">
              <div>Phạm Minh Tâm</div>
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
                <a href="tel:01643652922">01643-652-922</a>
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

            <ul className="article">
              <li className="article__item">
                <h2 className="article__title">
                  <span role="img" aria-label="chart">💹</span> Quoine,
                  <small className="article__time">
                    Apr 2017 – present
                  </small>
                </h2>
                <p className="article__desc">
                  Quoine has been growing exponentially. When I first joined,
                  the Front-end team had 3 members only. Now we are 12 members strong,
                  half of which I interviewed. I was ruined that team while
                  I am in head of frontend position.
                </p>

                <h4>Senior Front-end Engineer, MKT Tech (Oct 2018 - present)</h4>
                <p>
                  Focusing on marketing technology.
                  Working with third parties such as Hubspot to leverage productivity.
                  Making fast and beautiful websites.
                </p>

                <h4>Head of Front-end (Apr 2018 - Sep 2018)</h4>
                <p>Released Liquid, a new trading platform that is the combination of Quoinex and Qryptos. In particular, the front-end side of Liquid is the fruit of labor from the cross-border efforts of Quoine Front-end team, based half in Vietnam and half in Japan.</p>
                <p>Liquid landing page is built with JAMstack technologies (https://jamstack.org) that is designed for SEO and of which I am a fan. As a result, the landing page scores over 80 points by Google search engine a few months after launching.</p>

                <h4>Frontend Engineer (Apr 2017 - Mar 2018)</h4>
                <p>Helped build the Quoinex platform from scratch and gained in-depth understanding about multiple functionalities of the existing platforms. Worked with React, Redux, and isolated CSS components.</p>
              </li>

              <li className="article__item">
                <h2 className="article__title">
                  <span role="img" aria-label="coffee">☕</span> Naustudio
                  <small className="article__time">
                    Apr 2015 – Apr 2017
                  </small>
                </h2>
                <p className="article__desc">
                  I have learned much from Naustudio’s CTO, Mr. Tran Trong Thanh. In particular, how to skeleton HTML structure and style CSS for easy maintenance. Friday sharing weekly is a tradition at Naustudio where we share and connect. Here, we grow the same way we build our products.
                </p>
                <p>Notable projects that I worked on at Naustudio include Greenbot and Recpic.</p>

                <h4>Greenbot</h4>
                <p>A combination of biology and IT, the project uses IOT to grow hydroponic vegetables. Apart from being the main JS developer, I also helped transform the design into the application layout. The project provided good experience with MQTT and Strong-loop.</p>

                <h4>Recpic</h4>
                <p>Recpic is a Korean startup project that helps manage expenses by capturing receipts. It was handed over from another agency and developed with Angular. I built several new features and maintained the existing application. Eventually due to political changes, the project was no longer supported by the government.</p>
              </li>

              <li className="article__item">
                <h2 className="article__title">
                  <span role="img" aria-label="network">🕸️</span> Sutrix Solutions
                  <small className="article__time">
                    Sep 2014 – Apr 2015
                  </small>
                </h2>
                <p className="article__desc">
                  The most notable project in this period is Wequit, a social network about quitting smoking. The project extended over 8 months during which I was the main JS developer. We used PhoneGap, the outstanding tool at the time, to build a cross-platform application (iOS and Android) for this social network. Managing big source code with Angular 1.0 and great animations are what I learned from this project.
                </p>
              </li>

              <li className="article__item">
                <h2 className="article__title">
                  <span role="img" aria-label="pineapple">🍍</span> Behind the scene
                </h2>
                <p>I graduated in mid 2014 from University of Information Technology (UIT).</p>
                <p>I go to the gym in my spare time. I write about surrounding things in my life.</p>

                <p>I also contribute to several open-source projects.</p>
                <h4>Jukebox</h4>
                <p>A music sharing application to be used at work. The app remains in use at Naustudio where people can book the song they want to listen and a host will play them in order. It was built with Meteor, with realtime as default.</p>
                <p>Source: https://github.com/naustudio/nau-jukebox</p>


                <h4>Goingsunny</h4>
                <p>A fanmade application for my favorite English book, “Hack Não - 1500 Từ Tiếng Anh” which is designed to help learners improve English vocabularies. I am building it with react-starter-kit, with the boilerplate focusing on server-side rendering.</p>
                <p>Source: https://github.com/tampham47/goingsunny-app</p>
              </li>
            </ul>
          </section>
        </main>
      )}
    </SiteData>
  );
};

export default withRouteData(Home);
