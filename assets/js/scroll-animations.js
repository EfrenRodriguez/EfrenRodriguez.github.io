(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  function inViewport(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  function watch(el, delayMs) {
    if (inViewport(el)) return;
    if (delayMs) el.style.transitionDelay = delayMs + 'ms';
    el.classList.add('fade-in');
    observer.observe(el);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Section headings and lists (About, Contact, Home)
    document.querySelectorAll('.page__content > h2, .page__content > ul').forEach(function (el) {
      watch(el);
    });

    // Timeline entries — staggered cascade
    document.querySelectorAll('.timeline-entry').forEach(function (el, i) {
      watch(el, i * 60);
    });

    // Patent stat cards as a unit, then individual cards staggered
    document.querySelectorAll('.patent-stats').forEach(function (el) {
      watch(el);
    });
    document.querySelectorAll('.patent-card').forEach(function (el, i) {
      watch(el, i * 40);
    });

    // Contact form
    document.querySelectorAll('.contact-form').forEach(function (el) {
      watch(el);
    });
  });
})();
