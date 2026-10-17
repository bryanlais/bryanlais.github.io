---
layout: default
nav: contact
permalink: /contact
title: Contact
description: Get in touch with Bryan Lai.
---
<header class="banner scene" data-fireflies="22">
  {% include scene-banner.html %}
  <h1>Contact</h1>
  {% include ornament.html %}
  <p>Have a role, a project or a question? I'd love to hear it.</p>
</header>

<div class="page-body wrap contact-grid">
  <section class="panel contact-card" aria-labelledby="reach-title" data-reveal>
    <div class="avatar avatar-sm">
      <img class="face" src="/img/nefer.png" width="256" height="256" alt="Bryan's avatar, Nefer">
      <img class="moss-rim" src="/img/moss/clump-set2.webp" alt="">
    </div>
    <h2 id="reach-title">Reach me directly</h2>
    <p>I usually reply within a day or two.</p>
    <ul class="contact-list">
      <li><span>Email</span><a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
      <li><span>GitHub</span><a href="https://github.com/bryanlais" rel="noopener">bryanlais</a></li>
      <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/bryanlais/" rel="noopener">in/bryanlais</a></li>
      <li><span>Based in</span>Brooklyn, NY</li>
    </ul>
  </section>

  <section class="panel contact-form" aria-labelledby="form-title" data-reveal style="--d:1">
    <h2 id="form-title">Send a message</h2>
    <form action="https://getform.io/f/0895816a-38f0-422b-8b1a-d5069f9c41f6" method="POST">
      <div>
        <label for="contactname">Name</label>
        <input class="field" type="text" name="contactname" id="contactname" autocomplete="name" required>
      </div>
      <div>
        <label for="contactemail">Email</label>
        <input class="field" type="email" name="contactemail" id="contactemail" autocomplete="email" required>
      </div>
      <div class="full">
        <label for="contacttext">Message</label>
        <textarea class="field" name="contacttext" id="contacttext" rows="5" required></textarea>
      </div>
      <p class="hint">Your details are only used to reply to you.</p>
      <button type="submit" class="button">Send message</button>
    </form>
  </section>
</div>
