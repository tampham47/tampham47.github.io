import React from 'react';
import { withRouteData, Head } from 'react-static';
import moment from 'moment';

const desc = 'Pham Minh Tam - Lead of front-end at Quoine - Saigon, Vietnam.';

const Home = ({ postList }) => {
  return (
    <div>
      <Head>
        <title>d. xaolonist</title>
        <meta name="description" content={desc} />
      </Head>
      <section className="container">
        <h1>d. xaolonist</h1>
        <h4>
          who is a scientist, an anthropologist, a psychologist,
          a moralist, an&nbsp;alchemist...
        </h4>
        <h4>lead of front-end at quoine | saigon, viet nam.</h4>
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
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="medium--title">{post.title}</a>
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
        <span className="built-desc">the latest build is on May 23, 2018.</span>
      </footer>
    </div>
  );
};

export default withRouteData(Home);
