---
layout: default
nav: blog
title: Blog
description: Occasional posts from Bryan Lai on projects, school, and life updates.
---
<section class="section" style="padding-top:132px;">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Blog</span>
      <h2>Notes &amp; updates</h2>
      <p>A running log of milestones, projects, and things I've learned along the way.</p>
    </div>

    <div class="post-list">
      {% for post in site.posts %}
      <a class="card post-card" href="{{ post.url }}" data-reveal>
        <div>
          <div class="post-meta">
            <i class="fa-regular fa-calendar"></i> {{ post.date | date: "%B %-d, %Y" }}
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.content | strip_html | truncatewords: 28 }}</p>
        </div>
        <span class="read-more">Read <i class="fa-solid fa-arrow-right"></i></span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
