---
layout: blog-search
title: Search
subtitle:

---
<!-- Html Elements for Search -->
<div id="search-box">
<input type="text" id="search-input" autofocus placeholder="search...">
<ul class="alt" id="results-container"></ul>
<!--- index.html -->
<div id="hits">
  <!-- Hits widget will appear here -->
</div>
</div>

<!-- Formatting-->
<!-- Script pointing to search-script.js -->
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/algolia.js"></script>

<!--- index.html -->
<!-- <div id="hits">
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
