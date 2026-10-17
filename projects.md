---
layout: default
nav: projects
title: Projects
description: Projects by Bryan Lai across healthcare, data visualization and full-stack web apps.
---
<header class="banner scene" data-fireflies="22">
  {% include scene-banner.html %}
  <h1>Projects</h1>
  {% include ornament.html %}
  <p>Healthcare tools, data visualization and full-stack apps.</p>
</header>

<div class="page-body wrap project-list">
  <article class="feature panel" data-reveal>
    <div class="feature-text">
      <h2>MedTracker</h2>
      <p>A full-stack medication-adherence tracker. The FastAPI backend is built on the FHIR standard, with Firebase for authentication and storage and Redis caching for fast reads. A React front end stores, retrieves and visualizes patient health data so adherence is easy to see at a glance, tested with synthetic patient data.</p>
      <p class="stack">FastAPI · FHIR · Firebase · Redis · React</p>
    </div>
    <div class="feature-demo">
      {% include medtracker.html %}
    </div>
  </article>

  <div class="pair">
    <article class="panel shot" data-reveal>
      <div class="shot-frame"><img src="/img/iasonotes.png" width="1886" height="862" alt="The IasoNotes landing page: alert family and friends about your recovery status" loading="lazy"></div>
      <h2>IasoNotes</h2>
      <p>A status site for hospital patients. They post an update once and every subscribed friend or family member is notified, so nobody has to repeat the same news.</p>
      <p class="stack">Full-stack · Healthcare · Notifications</p>
    </article>
    <article class="panel shot" data-reveal style="--d:1">
      <div class="shot-frame"><img src="/img/fakestackoverflow.png" width="3115" height="1087" alt="The FakeStackOverflow sign-in screen" loading="lazy"></div>
      <h2>FakeStackOverflow</h2>
      <p>A full-stack rebuild of Stack Overflow's core: questions, answers, tags and voting.</p>
      <p class="stack">Full-stack · Web app</p>
    </article>
  </div>

  <div class="pair">
    <article class="panel text-panel" data-reveal>
      <h2>Map Redistricting</h2>
      <p>With three teammates, a state redistricting app that calculates demographic data. I built the front end for the interactive map and the district data tables.</p>
      <p class="stack">Java Spring Boot · MongoDB · JavaScript · Python (Pandas)</p>
    </article>
    <article class="panel text-panel" data-reveal style="--d:1">
      <h2>Spotify Data Dashboard</h2>
      <p>Trends and correlations across the top Spotify songs of 2023: MDS, PCA, k-means clustering, biplots, parallel coordinates, area charts and histograms.</p>
      <p class="stack">Python · D3.js · Data visualization</p>
    </article>
  </div>
</div>
