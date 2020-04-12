---
layout: blog
title: Blog Posts
subtitle: All
pagination:
  enabled: true
---
<ul class="alt">
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
    {% endfor %}
  </ul>
