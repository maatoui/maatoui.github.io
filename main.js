document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
    document.querySelectorAll('nav.links a').forEach(function (a) {
      a.addEventListener('click', function () { header.classList.remove('open'); });
    });
  }

  document.querySelectorAll('.year-now').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Subtle active-section highlighting in the nav
  var navLinks = document.querySelectorAll('nav.links a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ el: el, link: a });
  });
  if (sections.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = sections.find(function (s) { return s.el === entry.target; });
        if (!match) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active'); });
          match.link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s.el); });
  }
});
