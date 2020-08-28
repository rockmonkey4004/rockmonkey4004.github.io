// algolia.js
const search = instantsearch({
  appId: SFBKC3K3JE,
  apiKey: 85b2425c53e4d9a38ce774223eea053f,
  indexName: blog_posts,
  routing: true
});

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for products'
  })
);

// initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results',
      item: data => '
          <div>
           <h1 class="text-green">${data.title}</h1>
           <p>${data.content.substring(0,150)}</p>
          </div>
      '
    }
  })
);


search.start();
