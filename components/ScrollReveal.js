'use client';

import { useEffect } from 'react';

// Fade-and-rise entrance for [data-reveal] sections, once, no re-trigger.
// Elements are left alone in markup (visible by default) so anything above
// the fold, or any client without JS, just renders normally. Only elements
// that start below the fold get hidden and then revealed on scroll, and
// prefers-reduced-motion skips the effect entirely.
export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('is-hidden');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) return;
      el.classList.add('is-hidden');
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
