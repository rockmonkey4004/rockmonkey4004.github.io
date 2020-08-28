---
layout: blog
title: Search
subtitle:

---
<<<<<<< HEAD
<style>
    #search-searchbar{
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }

    .card-thumbnail{
      float:left;
      width:200px;
      height:200px;
      margin-right:40px;
    }

  .ais-search-box {
    margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
    max-width: 400px;
    width: 100%;
  }
  .ais-search-box--input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font: inherit;
    background-color: var(--nav-color) !important;
    display: inline-block;
    border: 1px solid #111;
    color: #ff7601 !important;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px 0 rgba(85,95,110,.2);
    box-shadow: 0 1px 1px 0 rgba(85,95,110,.2);
    -webkit-transition: background .4s ease,-webkit-box-shadow .4s ease;
    transition: box-shadow .4s ease,background .4s ease;
    transition: box-shadow .4s ease,background .4s ease,-webkit-box-shadow .4s ease;
    padding: 10px 10px 10px 35px;
    vertical-align: middle;
    white-space: normal;
    height: 100%;
    width: 100%;
}

  .ais-hits--item{
    float:left;
    width: 100% !important;
  }

  #search-container, .search-card{
     width: 100%;
  }

</style>

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
=======
<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" autofocus placeholder="search...">
<ul class="alt" id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/search-script.js"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>
>>>>>>> parent of c2bb3a03... .
