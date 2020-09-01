---
layout: blog-search
title: Search
subtitle:
---
<!-- Html Elements for Search -->
<!-- <div id="search-box"> -->
<!-- <input type="text" id="search-input" autofocus placeholder="search..."> -->
<!-- <ul class="alt" id="results-container"></ul> -->
<!--- index.html -->
<!-- <div id="hits"> -->
  <!-- Hits widget will appear here -->
<!-- </div> -->
<!-- </div> -->

<!-- Formatting-->
<!-- Script pointing to search-script.js -->
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/algolia.js"></script>

<!--- index.html -->
<!-- <div id="hits"> -->
  <!-- Hits widget will appear here -->
<!-- </div> -->



<!-- Configuration -->
<!-- <script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script> -->


<!--- index.html -->
<div id="search-box">
  <!-- SearchBox widget will appear here -->
</div>

<div id="hits">
  <!-- Hits widget will appear here -->


  <script>
      /* Instanciating InstantSearch.js with Algolia credentials */
      const search = instantsearch({
        appId: 'your_algolia_id',
        indexName: 'your_algolia_index_name',
        apiKey: 'your_algolia_api_key'
      });

      search.addWidget(
        instantsearch.widgets.searchBox({
          container: '#search-searchbar',
          placeholder: 'Search into posts...',
          poweredBy: true
        })
      );

      search.addWidget(
        instantsearch.widgets.hits({
          container: '#search-hits',
          templates: {
            item: function(hit) {
              return `
                          <div class="card search-card">
                              <div class="card-body center">
                                  <img class="card-thumbnail" src="${ hit.thumbnail }" />
                                  <h4 class="card-title">${ hit.title }</h4>
                                  <h6 class="card-subtitle mb-2 text-muted">${moment.unix(hit.date).format('MMM D, YYYY')}</h6>
                                  <p class="card-body"> ${ hit.summary } </p>
                                  <a href="${hit.url}" data-disqus-identifier="${hit.url}" class="btn btn-dark btn-lg">Read</a>

                              </div>
                          </div>
              `;
            }
          }
        })
      );
