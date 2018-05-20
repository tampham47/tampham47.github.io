import React from 'react';
import { withSiteData } from 'react-static';

export default withSiteData(() => {
  return (
    <div>
      <section className="container">
        <h1>Xaolonist (Phạm Minh Tâm)</h1>
        <h4>Who is a scientist, an anthropologist, a psychologist, a moralist, an alchemist...</h4>
        <h4>FE leader at Quoine | Saigon, Viet nam.</h4>
      </section>
      <section className="container">
        <h1>Articles</h1>
      </section>
    </div>
  );
});
