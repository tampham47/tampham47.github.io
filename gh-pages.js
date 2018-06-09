import ghpages from 'gh-pages';

/* eslint-disable */
ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://042861227e38cc42e91b87368a77fd2502a39a2f@github.com/tampham47/tampham47.github.io.git',
  silent: true,
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
