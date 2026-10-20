/* Sakura at dusk: setting sun, layered hills, a cherry bough and drifting petals. */
(function () {
  var canvas = document.querySelector('.hero__canvas');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var hero = canvas.parentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = 1;
  var scenery = document.createElement('canvas');
  var bough = document.createElement('canvas');
  var petals = [];
  var wind = 0, windTarget = 0;
  var running = false, visible = true, last = 0;

  var PINKS = ['#ffd9e2', '#f9c0cf', '#f4a6bb', '#fbe3ea', '#efa0b5'];

  function rng(seed) {
    return function () {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
  }

  function sized(c) {
    c.width = Math.round(W * dpr);
    c.height = Math.round(H * dpr);
    var g = c.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return g;
  }

  function drawScenery() {
    var g = sized(scenery);
    var sx = W * 0.66, sy = H * 0.76, r = Math.min(W, H) * 0.085;

    var glow = g.createRadialGradient(sx, sy, r * 0.5, sx, sy, Math.max(W, H) * 0.7);
    glow.addColorStop(0, 'rgba(255, 214, 150, 0.55)');
    glow.addColorStop(0.25, 'rgba(250, 160, 120, 0.22)');
    glow.addColorStop(1, 'rgba(250, 160, 120, 0)');
    g.fillStyle = glow;
    g.fillRect(0, 0, W, H);

    var sun = g.createRadialGradient(sx, sy - r * 0.3, r * 0.1, sx, sy, r);
    sun.addColorStop(0, '#fff3d6');
    sun.addColorStop(1, '#ffc27a');
    g.fillStyle = sun;
    g.beginPath();
    g.arc(sx, sy, r, 0, Math.PI * 2);
    g.fill();

    var layers = [
      { base: 0.80, amp: 0.05, color: 'rgba(122, 64, 98, 0.55)', seed: 7 },
      { base: 0.86, amp: 0.045, color: 'rgba(78, 40, 76, 0.8)', seed: 19 },
      { base: 0.93, amp: 0.035, color: 'rgba(36, 20, 44, 0.96)', seed: 41 }
    ];
    layers.forEach(function (l) {
      var rand = rng(l.seed);
      var p1 = rand() * 6, p2 = rand() * 6, f1 = 1.2 + rand() * 1.5, f2 = 3 + rand() * 3;
      g.fillStyle = l.color;
      g.beginPath();
      g.moveTo(0, H);
      for (var x = 0; x <= W + 10; x += 10) {
        var t = x / W;
        var y = H * (l.base - l.amp * (0.6 * Math.sin(t * f1 * Math.PI + p1) + 0.4 * Math.sin(t * f2 * Math.PI + p2)));
        g.lineTo(x, y);
      }
      g.lineTo(W, H);
      g.closePath();
      g.fill();
    });
  }

  function blossom(g, x, y, s, rand) {
    var color = PINKS[Math.floor(rand() * PINKS.length)];
    var rot = rand() * Math.PI;
    g.save();
    g.translate(x, y);
    g.rotate(rot);
    g.globalAlpha = 0.75 + rand() * 0.25;
    g.fillStyle = color;
    for (var i = 0; i < 5; i++) {
      g.rotate(Math.PI * 2 / 5);
      g.beginPath();
      g.ellipse(0, -s * 0.55, s * 0.42, s * 0.58, 0, 0, Math.PI * 2);
      g.fill();
    }
    g.globalAlpha = 1;
    g.fillStyle = '#f7d27c';
    g.beginPath();
    g.arc(0, 0, s * 0.18, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }

  function drawBough() {
    var g = sized(bough);
    var rand = rng(2024);
    var scale = Math.min(W, H) / 900;
    var tips = [];

    function branch(x, y, angle, len, width, depth) {
      var ex = x + Math.cos(angle) * len;
      var ey = y + Math.sin(angle) * len;
      var bend = (rand() - 0.5) * len * 0.35;
      var cx = (x + ex) / 2 + Math.cos(angle + Math.PI / 2) * bend;
      var cy = (y + ey) / 2 + Math.sin(angle + Math.PI / 2) * bend;
      g.strokeStyle = '#2a1527';
      g.lineCap = 'round';
      g.lineWidth = width;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(cx, cy, ex, ey);
      g.stroke();

      if (depth <= 0 || width < 1.2) {
        tips.push([ex, ey]);
        return;
      }
      if (depth < 3 && rand() < 0.5) tips.push([ex, ey]);
      var kids = rand() < 0.35 ? 3 : 2;
      for (var i = 0; i < kids; i++) {
        var spread = (i - (kids - 1) / 2) * (0.45 + rand() * 0.35);
        branch(ex, ey, angle + spread + (rand() - 0.5) * 0.3, len * (0.68 + rand() * 0.14), width * 0.66, depth - 1);
      }
    }

    branch(W + 30 * scale, -20 * scale, Math.PI * 0.74, 220 * scale, 20 * scale, 5);
    branch(W + 10 * scale, H * 0.30, Math.PI * 0.95, 150 * scale, 11 * scale, 4);
    branch(-20 * scale, -10 * scale, Math.PI * 0.2, 110 * scale, 8 * scale, 3);

    tips.forEach(function (t) {
      var n = 3 + Math.floor(rand() * 4);
      for (var i = 0; i < n; i++) {
        var a = rand() * Math.PI * 2, d = rand() * 26 * scale;
        blossom(g, t[0] + Math.cos(a) * d, t[1] + Math.sin(a) * d, (7 + rand() * 7) * scale, rand);
      }
    });
  }

  function makePetal(initial) {
    var z = 0.3 + Math.random() * 0.7;
    return {
      x: Math.random() * W * 1.2 - W * 0.1,
      y: initial ? Math.random() * H : -20 - Math.random() * 60,
      z: z,
      size: (4 + z * 8) * Math.max(0.75, Math.min(W, H) / 900),
      rot: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.04,
      flip: Math.random() * Math.PI * 2,
      flipSpeed: 0.02 + Math.random() * 0.03,
      vy: 0.35 + z * 0.9,
      sway: Math.random() * Math.PI * 2,
      color: PINKS[Math.floor(Math.random() * PINKS.length)]
    };
  }

  function drawPetal(p) {
    var s = p.size;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.scale(1, Math.cos(p.flip) * 0.8 + 0.2);
    ctx.globalAlpha = 0.45 + p.z * 0.5;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(0, s);
    ctx.bezierCurveTo(s * 0.9, s * 0.4, s * 0.62, -s * 0.8, s * 0.16, -s);
    ctx.lineTo(0, -s * 0.72);
    ctx.lineTo(-s * 0.16, -s);
    ctx.bezierCurveTo(-s * 0.62, -s * 0.8, -s * 0.9, s * 0.4, 0, s);
    ctx.fill();
    ctx.restore();
  }

  function resize() {
    var rect = hero.getBoundingClientRect();
    W = Math.max(1, rect.width);
    H = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    sized(canvas);
    drawScenery();
    drawBough();
    var count = Math.min(140, Math.round(W * H / 12000));
    petals = [];
    for (var i = 0; i < count; i++) petals.push(makePetal(true));
    render(0, 0);
  }

  function render(t, dt) {
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(scenery, 0, 0, W, H);

    var sway = reduceMotion ? 0 : Math.sin(t / 2600) * 0.006 + wind * 0.01;
    ctx.save();
    ctx.translate(W, 0);
    ctx.rotate(sway);
    ctx.translate(-W, 0);
    ctx.drawImage(bough, 0, 0, W, H);
    ctx.restore();

    var step = dt / 16.67;
    for (var i = 0; i < petals.length; i++) {
      var p = petals[i];
      if (step) {
        p.sway += 0.012 * step;
        p.x += (Math.sin(p.sway) * 0.6 + wind * 1.6 - 0.35) * p.z * step;
        p.y += p.vy * step;
        p.rot += p.spin * step;
        p.flip += p.flipSpeed * step;
        if (p.y > H + 20 || p.x < -40 || p.x > W + 40) petals[i] = makePetal(false);
      }
      drawPetal(p);
    }
  }

  function frame(now) {
    if (!running) return;
    var dt = last ? Math.min(now - last, 50) : 16.67;
    last = now;
    wind += (windTarget - wind) * 0.02;
    render(now, dt);
    requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduceMotion || !visible || document.hidden) return;
    running = true;
    last = 0;
    requestAnimationFrame(frame);
  }

  function stop() { running = false; }

  window.addEventListener('resize', function () {
    clearTimeout(resize.t);
    resize.t = setTimeout(resize, 150);
  });
  hero.addEventListener('pointermove', function (e) {
    windTarget = (e.clientX / W - 0.5) * 1.2;
  });
  hero.addEventListener('pointerleave', function () { windTarget = 0; });
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }).observe(hero);
  }

  resize();
  start();
})();
