// algolia.js
const search = instantsearch({
  appId: SFBKC3K3JE,
  apiKey: 85b2425c53e4d9a38ce774223eea053f,
  indexName: blog_posts,
  routing: true
});

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits'
  })
);

search.start();
