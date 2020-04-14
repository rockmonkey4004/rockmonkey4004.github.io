---
layout: blog
title: Blog Posts
subtitle: All
pagination:
  enabled: true
  
---
<p>
    {% for tag in site.tags %}
    <!-- Here's a hack to generate a "tag cloud" where the size of
    the word is directly proportional to the number of posts with
    that tag. -->
    <a href="/tags/{{ tag[0] }}/"
    style="font-size: {{ tag[1] | size | times: 2 | plus: 10 }}px">
        {{ tag[0] }} |
    </a>
    {% endfor %}
</p>

<ul class="alt">
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
    {% endfor %}
  </ul>
