'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

// Transparent over the hero; gains a near-black backdrop blur and a hairline
// once the page scrolls past the point where the hero content would sit
// behind it. On mobile the nav collapses (see .nav-links in globals.css) and
// the wordmark alone is enough, since the page is short.
//
// Links are absolute because the same header also renders on product
// subdomains (contacts.xusall.com), where "/" is that product's page.
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link href={SITE_URL} className="wordmark">
          XUsAll
        </Link>
        <nav className="nav-links">
          <Link href={`${SITE_URL}/#products`} className="nav-link">
            Products
          </Link>
          <Link href={`${SITE_URL}/#philosophy`} className="nav-link">
            Philosophy
          </Link>
          <Link href={`${SITE_URL}/#contact`} className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
