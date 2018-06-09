import ghpages from 'gh-pages';

/* eslint-disable */
ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://tampham47:a2f64923b293b43a2c9b505e9e20726713baa3b8@github.com/tampham47/tampham47.github.io.git',
  user: {
    name: 'Xaolonist',
    email: 'tampham47@live.com',
  },
}, (err) => {
  if (!err) {
    console.log('Xalonist\'s landing page was deployed successful.');
  } else {
    console.log(err);
  }
});
