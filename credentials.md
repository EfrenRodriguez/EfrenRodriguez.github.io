---
layout: single
title: "Credentials & Certifications"
permalink: /credentials/
description: "MIT Professional Education — Applied Agentic AI for Organizational Transformation"
og_image: "assets/images/credentials/mit-agentic-ai-badge.png"
---

This page documents formal credentials earned at the intersection of AI strategy, organizational leadership, and connected product development.

<div class="credential-grid">

  <div class="credential-card">
    <div class="credential-badge">
      <button class="credential-badge-link" aria-label="View full certificate image" data-lightbox="/assets/images/credentials/mit-agentic-ai-badge.png">
        <img src="/assets/images/credentials/mit-agentic-ai-badge.png" alt="MIT Professional Education — Applied Agentic AI for Organizational Transformation certificate" />
      </button>
    </div>
    <div class="credential-body">
      <div class="credential-issuer">MIT Professional Education</div>
      <h2 class="credential-title">Applied Agentic AI for Organizational Transformation</h2>
      <div class="credential-meta">
        <span class="credential-date">Completed July 2026</span>
      </div>
      <p class="credential-description">
        This program develops the frameworks and leadership fluency needed to deploy agentic AI systems inside real organizations — spanning autonomous agent design, multi-agent coordination, and the change management required to make AI transformation stick. It sits directly at the intersection of my engineering background and my focus on AI-native product and organizational strategy.
      </p>
      <a class="credential-verify" href="https://www.credential.net/84d3636e-768b-4433-ad00-3f3bc2638a7e" target="_blank" rel="noopener">
        Verify Credential ↗
      </a>
    </div>
  </div>

</div>

<!-- Lightbox -->
<div class="cred-lightbox" id="credLightbox" role="dialog" aria-modal="true" aria-label="Certificate image">
  <button class="cred-lightbox-close" id="credLightboxClose" aria-label="Close">&times;</button>
  <img id="credLightboxImg" src="" alt="" />
</div>

<script>
(function () {
  var lb   = document.getElementById('credLightbox');
  var img  = document.getElementById('credLightboxImg');
  var cls  = document.getElementById('credLightboxClose');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    cls.focus();
  }

  function close() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.credential-badge-link[data-lightbox]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      open(btn.getAttribute('data-lightbox'), btn.querySelector('img').alt);
    });
  });

  cls.addEventListener('click', close);

  lb.addEventListener('click', function (e) {
    if (e.target === lb) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('is-open')) close();
  });
})();
</script>
