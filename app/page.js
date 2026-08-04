import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { PRODUCTS, PRODUCT_COUNT_WORD, productName } from '@/lib/products';
import { CONTACT_EMAIL } from '@/lib/site';

function ProductCard({ product }) {
  const isLive = product.status === 'live';

  const head = (
    <div className="product-card__head">
      <span className="product-card__name">
        {product.wordmark.map((part, i) => (
          <span key={i} style={part.color ? { color: part.color } : undefined}>
            {part.text}
          </span>
        ))}
      </span>
      {isLive ? (
        <span className="status-pill status-pill--live">
          <span className="status-pill__dot" />
          Live
        </span>
      ) : (
        <span className="status-pill status-pill--dev">
          <span className="status-pill__dot" />
          In development
        </span>
      )}
    </div>
  );

  const body = (
    <>
      {head}
      <p className="product-card__desc">{product.description}</p>
      {isLive ? (
        <div className="product-card__meta">
          <span className="platform-tag">{product.platform}</span>
          <span className="product-link">
            {product.linkLabel} <span className="product-link__arrow">↗</span>
          </span>
        </div>
      ) : (
        <div className="product-card__dev-meta">
          <span className="platform-tag">{product.platform}</span>
          <span className="product-note">{product.devNote}</span>
        </div>
      )}
    </>
  );

  // The card is always a div, and the click target is an anchor inside it. A
  // live card used to be one big anchor, which meant any second link (like the
  // privacy policy below) would have been an anchor nested in an anchor: invalid
  // HTML, and browsers resolve it unpredictably.
  return (
    <div className={`product-card${isLive ? '' : ' is-dev'}`} data-reveal>
      {isLive ? (
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__hit"
        >
          {body}
        </a>
      ) : (
        <div className="product-card__hit">{body}</div>
      )}
      {product.privacyHref && (
        <a className="product-card__aside" href={product.privacyHref}>
          Privacy policy
        </a>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <ScrollReveal />

      <section className="hero">
        <div data-reveal>
          <h1 className="hero-headline">
            <span className="x-gradient">X</span>UsAll
          </h1>
          <p className="hero-sub">Connection. People. Progress.</p>
        </div>

        {/*
        Alternate hero treatment 1: three-beat display line.
        <div data-reveal>
          <h1 className="hero-headline-alt-a">
            Connection.<br />People.<br />Progress.
          </h1>
          <p className="hero-sub-alt-a">X is a variable. It primarily stands for connect.</p>
        </div>
        */}

        {/*
        Alternate hero treatment 2: the internet line.
        <div data-reveal>
          <h1 className="hero-headline-alt-b">
            The internet was built to connect us. We build like that&apos;s still true.
          </h1>
          <p className="hero-sub-alt-a">X is a variable. It primarily stands for connect.</p>
        </div>
        */}

        <p className="hero-support" data-reveal>
          X is a variable. It primarily stands for <span className="verb">connect</span>, and for
          everything digital connection makes possible.
        </p>

        <div className="hero-cta-row" data-reveal>
          <Link href="#products" className="hero-cta">
            See what we&apos;ve built
          </Link>
        </div>
      </section>

      <section id="products" className="section">
        <div className="section-head" data-reveal>
          <h2 className="section-title">Products</h2>
          <p className="section-intro">{PRODUCT_COUNT_WORD} things, so far. All free.</p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </div>
      </section>

      <section id="philosophy" className="section">
        <div className="section-head" data-reveal>
          <h2 className="section-title">Philosophy</h2>
        </div>

        <p className="philosophy-lead" data-reveal>
          Most software is built to extract something from you. Your attention, your data, your
          money, usually all three. It doesn&apos;t have to work that way.{' '}
          <strong>XUsAll builds tools that are simply useful and accessible to everyone.</strong>{' '}
          The internet is the most powerful instrument we&apos;ve ever had for helping one
          another. We&apos;d like to use it that way.
        </p>

        <div className="principle-list">
          <div className="principle-row" data-reveal>
            <h3 className="principle-title">People over profits.</h3>
            <p className="principle-body">
              You are not the product. The point is to help people, not to extract from them.
              Everything is free or low cost, and accessible to anyone we can reach.
            </p>
          </div>

          <div className="principle-row" data-reveal>
            <h3 className="principle-title">Private and transparent by default.</h3>
            <p className="principle-body">
              Your information stays yours. Ours stays open: how the apps are built, how data is
              handled, where any money goes. Privacy on your end, transparency on ours.
            </p>
          </div>

          <div className="principle-row" data-reveal>
            <h3 className="principle-title">Built with AI, openly.</h3>
            <div className="principle-extra">
              <p className="principle-body">
                Every product here was made by one person working with AI tools. That is worth
                saying out loud. AI is an equalizer for knowledge and for creation, and the
                barrier to building what you want is practically gone. What is left is whether
                you care enough to build it.
              </p>
              <Link href="/how-we-build" className="underline-link">
                Read our full workflow
              </Link>
            </div>
          </div>

          <div className="principle-row" data-reveal>
            <h3 className="principle-title">Simple, because we trust your intelligence.</h3>
            <p className="principle-body">
              Clean, minimal, quietly modern. Nothing over-explained, nothing built to hold your
              attention. Just room to think and act with clarity.
            </p>
          </div>

          <div className="principle-row" data-reveal>
            <h3 className="principle-title">Democratic where it counts.</h3>
            <p className="principle-body">
              The people who use a service every day should have a say in how it works. Not
              shareholders, not a board seat, not whoever paid the most to sit at the table.
            </p>
          </div>
        </div>

        <div className="spectrum-hairline quote-divider" data-reveal />
        <blockquote className="pull-quote" data-reveal>
          X is a variable. It can stand for anything. Connect, empower, inspire. The
          opportunities are limitless. <span className="muted">That&apos;s the whole idea.</span>
        </blockquote>
      </section>

      <section id="contact" className="section">
        <div className="contact-block" data-reveal>
          <h2 className="section-title">Contact</h2>
          <p className="contact-line">Questions, ideas, or something we should build? Write to us.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
            {CONTACT_EMAIL}
          </a>
          <p className="tip-line">Free first. Funded by tips and a vision.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-copyright">© 2026 XUsAll</span>
          <nav className="footer-nav">
            {/* Derived from lib/products.js rather than hand-listed, so a new
                product or a shipped link shows up here without a second edit.
                A product without a URL yet is plain text, not a dead link. */}
            {PRODUCTS.map((product) =>
              product.href ? (
                <a
                  key={product.key}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {productName(product)}
                </a>
              ) : (
                <span key={product.key} className="footer-static">
                  {productName(product)}
                </span>
              )
            )}
            <Link href="/how-we-build" className="footer-link">
              How we build
            </Link>
          </nav>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
