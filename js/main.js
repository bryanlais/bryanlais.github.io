(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Theme: the grotto (dark) by default; "Light" switches to daylight sage and is remembered.
  var themeToggle = document.querySelector(".theme-toggle");
  var syncToggle = function () {
    if (!themeToggle) return;
    var light = root.getAttribute("data-theme") === "light";
    themeToggle.setAttribute("aria-pressed", String(light));
    themeToggle.setAttribute("aria-label", light ? "Switch to night" : "Switch to daylight");
    themeToggle.setAttribute("title", light ? "Night" : "Daylight");
  };
  if (themeToggle) {
    syncToggle();
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncToggle();
    });
  }

  // Phone menu.
  var nav = document.querySelector(".site-nav");
  var menuToggle = document.querySelector(".menu-toggle");
  if (nav && menuToggle) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "Close" : "Menu";
    });
  }

  // Reveal once as each part enters the viewport. Never leaves content hidden.
  var targets = document.querySelectorAll("[data-reveal]");
  if (targets.length) {
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      targets.forEach(function (el) { io.observe(el); });
      window.addEventListener("load", function () {
        setTimeout(function () {
          targets.forEach(function (el) {
            var r = el.getBoundingClientRect();
            if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
          });
        }, 2500);
      });
    }
  }

  // Fireflies: soft glowing motes drifting through each scene.
  document.querySelectorAll("[data-fireflies]").forEach(function (scene) {
    var canvas = document.createElement("canvas");
    canvas.className = "fireflies";
    canvas.setAttribute("aria-hidden", "true");
    scene.insertBefore(canvas, scene.firstChild.nextSibling);
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var count = parseInt(scene.getAttribute("data-fireflies"), 10) || 30;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, flies = [], visible = true, raf = 0;

    var resize = function () {
      w = scene.clientWidth; h = scene.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    var spawn = function (anywhere) {
      return {
        x: Math.random() * w,
        y: anywhere ? Math.random() * h : h + 10,
        r: 1.2 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.1 + Math.random() * 0.35),
        phase: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.025
      };
    };
    var draw = function () {
      ctx.clearRect(0, 0, w, h);
      flies.forEach(function (f) {
        var a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(f.phase));
        var g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 6);
        g.addColorStop(0, "rgba(232, 255, 170," + a + ")");
        g.addColorStop(0.25, "rgba(196, 240, 110," + a * 0.5 + ")");
        g.addColorStop(1, "rgba(160, 220, 90, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 6, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    var step = function () {
      flies.forEach(function (f, i) {
        f.phase += f.speed;
        f.x += f.vx + Math.sin(f.phase * 0.7) * 0.25;
        f.y += f.vy;
        if (f.y < -20 || f.x < -20 || f.x > w + 20) flies[i] = spawn(false);
      });
      draw();
      raf = visible && !document.hidden ? requestAnimationFrame(step) : 0;
    };

    resize();
    for (var i = 0; i < count; i++) flies.push(spawn(true));
    draw();
    window.addEventListener("resize", resize);
    if (reduceMotion) return;

    var start = function () { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(step); };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        start();
      }).observe(scene);
    }
    document.addEventListener("visibilitychange", start);
    start();
  });

  // MedTracker sketch: toggle doses, recompute adherence for the week.
  document.querySelectorAll("[data-med]").forEach(function (med) {
    var doses = med.querySelectorAll(".dose");
    var pct = med.querySelector("[data-med-pct]");
    var note = med.querySelector("[data-med-note]");
    var update = function () {
      var taken = 0;
      doses.forEach(function (d) { if (d.getAttribute("aria-pressed") === "true") taken++; });
      var value = Math.round((taken / doses.length) * 100);
      pct.textContent = value + "%";
      pct.classList.toggle("is-good", value >= 80);
      var verdict = value >= 80
        ? "at or above the 80% line commonly used to define adherence."
        : "under the 80% line commonly used to define adherence.";
      note.textContent = taken + " of " + doses.length + " doses taken, " + verdict;
    };
    doses.forEach(function (d) {
      d.addEventListener("click", function () {
        d.setAttribute("aria-pressed", d.getAttribute("aria-pressed") === "true" ? "false" : "true");
        update();
      });
    });
    update();
  });
})();
