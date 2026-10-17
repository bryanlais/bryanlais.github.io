---
layout: default
nav: about
title: About
description: Bryan Lai's background, experience, coursework and technical skills.
---
<header class="banner scene" data-fireflies="22">
  {% include scene-banner.html %}
  <h1>About</h1>
  {% include ornament.html %}
</header>

<div class="page-body wrap">
  <section class="about-intro" aria-label="Introduction">
    <div class="avatar" data-reveal>
      <img class="face" src="/img/nefer.png" width="256" height="256" alt="Bryan's avatar, Nefer">
      <img class="moss-rim" src="/img/moss/clump-set2.webp" alt="">
      <img class="moss-rim r" src="/img/moss/clump-a.webp" alt="">
    </div>
    <div data-reveal style="--d:1">
      <p class="lead">
        I'm a full-stack engineer at Altro Health, based in Brooklyn, NY, and I studied
        human-computer interaction at Georgia Tech. My work has always been full-stack: secure,
        usable systems from the database to the button. Graduate coursework and side projects got
        me into health informatics and standards like FHIR, and now I get to build with them every day.
      </p>
    </div>
  </section>

  <section class="block" aria-labelledby="exp-title">
    <header class="section-head" data-reveal>
      <h2 id="exp-title" class="section-title">Experience</h2>
      {% include ornament.html %}
    </header>
    <ol class="vine">
      <li data-reveal>
        <span class="when">Sep 2026 – now</span>
        <h3>Full Stack Engineer II</h3>
        <p class="where">Altro Health · Remote</p>
        <ul>
          <li>Built features for internal clinical operations tools in Next.js and MongoDB on Google Cloud, streamlining day-to-day workflows for the clinical team.</li>
          <li>Helped launch mobile phlebotomy as a new lab offering, building the end-to-end flow on FHIR-based data models for lab orders and patient records with the Junction API.</li>
          <li>Shipped to production within the first month as part of a five-person engineering team in a HIPAA-regulated healthcare environment.</li>
        </ul>
      </li>
      <li data-reveal>
        <span class="when">Jul 2024 – Sep 2026</span>
        <h3>Software Engineer</h3>
        <p class="where">Soter Technologies · Ronkonkoma, NY</p>
        <ul>
          <li>Designed interfaces, UML diagrams and GUIs for an internal shipping platform in ReactJS, MUI and MySQL, raising user engagement by 20%.</li>
          <li>Integrated Microsoft Azure sign-in so work and school accounts can log in to a vape-alert platform and manage their account data.</li>
          <li>Built token-based authentication for eMedNY healthcare systems, with JWT validation and token-expiry handling across multiple services.</li>
        </ul>
      </li>
      <li data-reveal>
        <span class="when">Apr 2024 – Jun 2024</span>
        <h3>Support Engineer</h3>
        <p class="where">Soter Technologies · Ronkonkoma, NY</p>
        <ul>
          <li>Ran the IT support desk, consulting and problem tracking through Zoho, Confluence and Jira, with a 92% customer rating.</li>
        </ul>
      </li>
      <li data-reveal>
        <span class="when">Nov 2022 – Feb 2023</span>
        <h3>Developer Intern</h3>
        <p class="where">Monumenta · Remote</p>
        <ul>
          <li>Rebuilt the RPG classes page with Vue.js and Bootstrap.</li>
          <li>Found and fixed more than ten bugs in a six-year-old Java plugin built with Gradle.</li>
        </ul>
      </li>
      <li data-reveal>
        <span class="when">May 2022 – Aug 2022</span>
        <h3>Research &amp; Development Intern</h3>
        <p class="where">Soter Technologies · Ronkonkoma, NY</p>
        <ul>
          <li>Built, with a team of three, a healthcare social platform that connects hospital patients with their loved ones.</li>
          <li>Cut messaging costs by 25% by switching API providers, and improved mobile device authentication.</li>
          <li>Wrote technical documentation for Flysense's API and built a mobile app that pairs vape detection and security APIs with instant push notifications.</li>
        </ul>
      </li>
    </ol>
  </section>

  <section class="block" aria-labelledby="edu-title">
    <header class="section-head" data-reveal>
      <h2 id="edu-title" class="section-title">Education</h2>
      {% include ornament.html %}
    </header>
    <ol class="vine">
      <li data-reveal>
        <span class="when">Aug 2024 – Aug 2026</span>
        <h3>M.S. Computer Science, Human-Computer Interaction</h3>
        <p class="where">Georgia Institute of Technology · Atlanta, GA · GPA 3.9</p>
      </li>
      <li data-reveal>
        <span class="when">Aug 2020 – Dec 2023</span>
        <h3>B.S. Computer Science and B.S. Applied Mathematics &amp; Statistics</h3>
        <p class="where">Stony Brook University · Stony Brook, NY</p>
      </li>
    </ol>
  </section>

  <section class="block" aria-labelledby="course-title">
    <header class="section-head" data-reveal>
      <h2 id="course-title" class="section-title">Coursework</h2>
      {% include ornament.html %}
    </header>
    <div class="courses">
      <article class="panel" data-reveal>
        <h3>CS 6250 · Big Data in Healthcare</h3>
        <p>Scalable machine learning and big data systems (Hadoop, Spark, graph databases) for healthcare analytics, predictive modelling and patient similarity.</p>
      </article>
      <article class="panel" data-reveal style="--d:1">
        <h3>CS 6440 · Health Informatics</h3>
        <p>Hands-on work with the FHIR interoperability standard and Docker-based healthcare systems.</p>
      </article>
      <article class="panel" data-reveal style="--d:2">
        <h3>Human-Computer Interaction</h3>
        <p>User-centred interface design, usability evaluation and participant-based research methods.</p>
      </article>
    </div>
  </section>

  <section class="block" aria-labelledby="skills-title">
    <header class="section-head" data-reveal>
      <h2 id="skills-title" class="section-title">Skills</h2>
      {% include ornament.html %}
    </header>
    <div class="skills">
      <div class="panel" data-reveal>
        <h3>Languages</h3>
        <ul><li>Java</li><li>JavaScript</li><li>Python</li><li>SQL</li><li>HTML</li><li>CSS</li><li>C</li></ul>
      </div>
      <div class="panel" data-reveal style="--d:1">
        <h3>Frameworks</h3>
        <ul><li>React</li><li>Next.js</li><li>React Native</li><li>Node.js</li><li>FastAPI</li><li>Bootstrap</li><li>Pandas</li></ul>
      </div>
      <div class="panel" data-reveal style="--d:2">
        <h3>Tools</h3>
        <ul><li>Docker</li><li>Git</li><li>Google Cloud</li><li>AWS</li><li>Azure</li><li>MongoDB</li><li>Firebase</li><li>FHIR</li></ul>
      </div>
    </div>
    <div class="center" data-reveal>
      <div class="hero-actions">
        <a class="button" href="/img/resume.pdf" target="_blank" rel="noopener">Download my résumé</a>
        <a class="button button-ghost" href="/contact">Get in touch</a>
      </div>
    </div>
  </section>
</div>
