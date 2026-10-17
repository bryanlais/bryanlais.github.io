---
layout: default
nav: blog
title: Blog
description: Occasional posts from Bryan Lai on projects, school and life.
---
<header class="banner scene" data-fireflies="22">
  {% include scene-banner.html %}
  <h1>Blog</h1>
  {% include ornament.html %}
  <p>Notes from along the way, since 2019.</p>
</header>

<div class="page-body narrow">
  <ol class="posts">
    {% for post in site.posts %}
    <li data-reveal>
      <a class="panel post-card" href="{{ post.url }}">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
        <div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.content | strip_html | truncatewords: 26 }}</p>
        </div>
        <span class="go" aria-hidden="true">&rarr;</span>
      </a>
    </li>
    {% endfor %}
  </ol>
</div>
