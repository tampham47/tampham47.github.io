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
                <h3 className="article__title">
                  Quoine,
                  <small className="article__time">
                    Apr 2017 – present
                  </small>
                </h3>
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
            </ul>
          </section>
        </main>
      )}
    </SiteData>
  );
};

export default withRouteData(Home);
