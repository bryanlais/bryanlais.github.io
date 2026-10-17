---
layout: default
nav: home
title: Home
description: Bryan Lai is a full-stack software engineer in Brooklyn, NY, building healthcare software on FHIR, with an M.S. in HCI from Georgia Tech.
---
<header class="hero scene" data-fireflies="46">
  {% include scene-hero.html %}
  <div class="hero-copy">
    <h1 class="hero-name" data-rise style="--i:0">Bryan Lai</h1>
    <div class="hero-ornament" data-rise style="--i:1">{% include ornament.html %}</div>
    <p class="hero-line" data-rise style="--i:2">Full-stack software engineer in Brooklyn, building healthcare software that people can lean on.</p>
    <div class="hero-actions" data-rise style="--i:3">
      <a class="button" href="#work">See my work</a>
      <a class="button button-ghost" href="/img/resume.pdf" target="_blank" rel="noopener">Résumé</a>
    </div>
  </div>
</header>

<section class="intro wrap" aria-labelledby="intro-title">
  <div class="avatar" data-reveal>
    <img class="face" src="/img/nefer.png" width="256" height="256" alt="Bryan's avatar, Nefer">
    <img class="moss-rim" src="/img/moss/clump-set2.webp" alt="">
    <img class="moss-rim r" src="/img/moss/clump-a.webp" alt="">
  </div>
  <div class="intro-text" data-reveal style="--d:1">
    <h2 id="intro-title" class="section-title">Hello, I'm Bryan</h2>
    <p class="lead">
      I'm a full-stack engineer at Altro Health, building clinical tools and lab services on
      Next.js, MongoDB and the FHIR standard. Before that I spent two years building secure
      software at Soter Technologies, and I studied human-computer interaction and health
      informatics at Georgia Tech.
    </p>
  </div>
  <ul class="facts">
    <li data-reveal style="--d:1"><span class="fact-k">Altro Health</span><span class="fact-v">Full stack engineer since 2026</span></li>
    <li data-reveal style="--d:2"><span class="fact-k">Georgia Tech</span><span class="fact-v">M.S. Computer Science, HCI</span></li>
    <li data-reveal style="--d:3"><span class="fact-k">FHIR</span><span class="fact-v">The health data standard I build on</span></li>
    <li data-reveal style="--d:4"><span class="fact-k">Brooklyn, NY</span><span class="fact-v">Home</span></li>
  </ul>
</section>

<section class="work wrap" id="work" aria-labelledby="work-title">
  <header class="section-head" data-reveal>
    <h2 id="work-title" class="section-title">Projects</h2>
    {% include ornament.html %}
  </header>

  <article class="feature panel" data-reveal>
    <div class="feature-text">
      <h3>MedTracker</h3>
      <p>A medication-adherence tracker. FastAPI on the FHIR standard behind it, Firebase for sign-in and storage, Redis for fast reads, and a React front end.</p>
      <p class="stack">FastAPI · FHIR · Firebase · Redis · React</p>
    </div>
    <div class="feature-demo">
      {% include medtracker.html %}
    </div>
  </article>

  <div class="pair">
    <article class="panel shot" data-reveal>
      <div class="shot-frame"><img src="/img/iasonotes.png" width="1886" height="862" alt="The IasoNotes landing page: alert family and friends about your recovery status" loading="lazy"></div>
      <h3>IasoNotes</h3>
      <p>Patients post one status update from the hospital and everyone who subscribed hears it, so nobody has to repeat the same news.</p>
      <p class="stack">Full-stack · Healthcare · Notifications</p>
    </article>
    <article class="panel shot" data-reveal style="--d:1">
      <div class="shot-frame"><img src="/img/fakestackoverflow.png" width="3115" height="1087" alt="The FakeStackOverflow sign-in screen" loading="lazy"></div>
      <h3>FakeStackOverflow</h3>
      <p>The core of Stack Overflow rebuilt end to end: questions, answers, tags and votes.</p>
      <p class="stack">Full-stack · Web app</p>
    </article>
  </div>
  <p class="more" data-reveal><a class="link-arrow" href="/projects">Redistricting maps, a Spotify data dashboard and more <span aria-hidden="true">&rarr;</span></a></p>
</section>

<section class="journey wrap" aria-labelledby="journey-title">
  <header class="section-head" data-reveal>
    <h2 id="journey-title" class="section-title">The path so far</h2>
    {% include ornament.html %}
  </header>
  <ol class="vine">
    <li data-reveal><span class="when">2026 – now</span><h3>Full Stack Engineer II, Altro Health</h3><p>Clinical operations tools and a new mobile phlebotomy lab offering, built on Next.js, MongoDB, Google Cloud and FHIR.</p></li>
    <li data-reveal><span class="when">2024 – 2026</span><h3>Software Engineer, Soter Technologies</h3><p>Token-based authentication for eMedNY healthcare systems, Azure work and school sign-in, and React interfaces for an internal shipping platform.</p></li>
    <li data-reveal><span class="when">2024 – 2026</span><h3>M.S. Computer Science, Georgia Tech</h3><p>Human-computer interaction, with coursework in health informatics and big data in healthcare.</p></li>
    <li data-reveal><span class="when">2024</span><h3>Support Engineer, Soter Technologies</h3><p>Ran IT support and problem tracking with a 92% customer rating.</p></li>
    <li data-reveal><span class="when">2022 – 2023</span><h3>Developer Intern, Monumenta</h3><p>Rebuilt the RPG classes page in Vue.js and fixed more than ten bugs in a six-year-old Java plugin.</p></li>
    <li data-reveal><span class="when">2022</span><h3>R&amp;D Intern, Soter Technologies</h3><p>Helped build a social platform that connects hospital patients with their loved ones.</p></li>
    <li data-reveal><span class="when">2020 – 2023</span><h3>B.S. Computer Science and Applied Math, Stony Brook</h3></li>
  </ol>
  <p class="more" data-reveal><a class="link-arrow" href="/about">Full experience, coursework and skills <span aria-hidden="true">&rarr;</span></a></p>
</section>

<section class="rest scene" data-fireflies="26" aria-labelledby="rest-title">
  {% include scene-bench.html %}
  <div class="rest-copy" data-reveal>
    <h2 id="rest-title" class="section-title">Rest a while</h2>
    <p>Have a role, a project or a question? I'd love to hear it.</p>
    <div class="hero-actions">
      <a class="button" href="mailto:{{ site.email }}">Email me</a>
      <a class="button button-ghost" href="https://www.linkedin.com/in/bryanlais/" rel="noopener">LinkedIn</a>
    </div>
  </div>
</section>
