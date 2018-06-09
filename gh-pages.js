import ghpages from 'gh-pages';

/* eslint-disable */
ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://'+ process.env.GITHUB_AUTH +'@github.com/tampham47/tampham47.github.io.git',
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
