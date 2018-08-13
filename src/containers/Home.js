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
            <meta name="description" content="Pham Minh Tam - Head of front-end at Quoine - Saigon, Vietnam." />
            <meta name="keywords" content="Frontend Lead, Senior, Sai Gon, Viet Nam" />
            <meta name="author" content="Pham Minh Tam" />

            <meta property="og:title" content="d. xaolonist" />
            <meta property="og:description" content="who is a scientist, an anthropologist, a psychologist,
              a moralist, an alchemist..." />
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
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
          </Head>

          <section className="container">
            <h1>d. xaolonist</h1>
            <h4>
              who is a scientist, an anthropologist, a psychologist,
              a moralist, an&nbsp;alchemist...
            </h4>
            <h4>head of front-end at quoine | saigon, viet nam.</h4>
            <ul>
              <li className="info">
                <span role="img" aria-label="pineapple">🍍</span>
                <a href="https://www.linkedin.com/in/tam-pham-51b41192/" target="_blank" rel="noopener noreferrer">linkedin</a>
                <span>, </span>
                <a href="https://medium.com/@xaolonist" target="_blank" rel="noopener noreferrer">medium</a>
                <span>, </span>
                <a href="https://github.com/tampham47" target="_blank" rel="noopener noreferrer">github</a>
                <span>, </span>
                <a href="https://codepen.io/tampham47" target="_blank" rel="noopener noreferrer">codepen</a>
                <span>, </span>
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
            <h2>medium của tớ,</h2>
            <ul className="medium">
              {postList.map(post => {
                return (
                  <li key={post.id} className="medium--item">
                    <a href={post.link} target="_blank" className="medium--title">{post.title}</a>,
                    <small className="medium--time">{moment(post.createdAt).format('MMM DD, YYYY')}</small>
                    <p className="medium--desc">{post.desc}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <footer className="container">
            <span role="img" aria-label="cat - github">😽</span>
            <a href="https://github.com/tampham47/tampham47.github.io" target="_blank" rel="noopener noreferrer">
              created by `react-static`
            </a>
            <span>, </span>
            <span className="built-desc">
              the latest build is on {moment(lastBuilt).format('MMM DD, h:mm:ss a').toLowerCase()}.
            </span>
          </footer>
        </main>
      )}
    </SiteData>
  );
};

export default withRouteData(Home);
