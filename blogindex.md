---
layout: blog
title: Home
---
<ul>
    <li>
    {% for post in site.posts %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
    {% endfor %}
  </ul>
