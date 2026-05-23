/* fides GmbH — shared React components (vanilla JSX, compiled via Babel) */
(function () {
const { useState, useEffect, useRef } = React;

/* ---------- Heroicons (24/outline subset) ---------- */
const Icon = ({ path, className = "icon", size = 24, strokeWidth = 1.6 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {path}
  </svg>
);
const I = {
  shield:    <path d="M12 3l8 3v5c0 5-3.4 9.2-8 10-4.6-.8-8-5-8-10V6l8-3z"/>,
  check:     <path d="M5 12.5l4.5 4.5L19 7"/>,
  spark:     <g><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></g>,
  clock:     <g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
  building:  <g><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/></g>,
  hand:      <path d="M9 11V5a1.5 1.5 0 013 0v6M12 11V4a1.5 1.5 0 013 0v7M15 11V6a1.5 1.5 0 013 0v9c0 3-2 6-6 6-3 0-5-1.5-6.5-4L4 13c-.5-1 .3-2 1.4-1.5L9 13V7a1.5 1.5 0 013 0"/>,
  heart:     <path d="M20.8 7.3a5 5 0 00-8.8-2.4A5 5 0 003.2 7.3c0 5.4 8.8 11 8.8 11s8.8-5.6 8.8-11z"/>,
  briefcase: <g><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"/></g>,
  arrowRight:<path d="M5 12h14M13 5l7 7-7 7"/>,
  arrowDown: <path d="M12 5v14M5 12l7 7 7-7"/>,
  chev:      <path d="M6 9l6 6 6-6"/>,
  menu:      <path d="M4 7h16M4 12h16M4 17h16"/>,
  close:     <path d="M6 6l12 12M18 6L6 18"/>,
  mapPin:    <g><path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></g>,
  phone:     <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"/>,
  mail:      <g><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></g>,
  scale:     <g><path d="M12 4v16M5 20h14M7 8h10M7 8l-3 6a3 3 0 006 0L7 8zM17 8l-3 6a3 3 0 006 0l-3-6z"/></g>,
  users:     <g><circle cx="9" cy="9" r="3.5"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15 19h6c0-2.5-1.8-4.2-4-4.7"/></g>,
  doc:       <g><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></g>,
  bolt:      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>,
  globe:     <g><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></g>,
  euro:      <path d="M18 7a6 6 0 100 10M4 10h10M4 14h10"/>,
};

/* ---------- Header ---------- */
function Header({ active }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const close = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const links = [
    { href: "ueber-uns.html", label: "Über uns", key: "ueber" },
    { href: "faq.html", label: "FAQ", key: "faq" },
  ];
  const services = [
    { href: "betriebshaftpflicht.html", title: "Betriebshaftpflicht", sub: "Schutz vor Personen- und Sachschäden", key: "bhv" },
    { href: "betriebliche-krankenversicherung.html", title: "Betriebliche Krankenversicherung", sub: "Gesundheits-Benefit für Ihr Team", key: "bkv" },
    { href: "betriebliche-altersvorsorge.html", title: "Betriebliche Altersvorsorge", sub: "Betriebsrente als starker Benefit", key: "bav" },
    { href: "berufshaftpflicht.html", title: "Berufshaftpflicht", sub: "Schutz vor Vermögensschäden", key: "bhf" },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="index.html" className="brand">
          <img src="shared/fides-logo.svg" alt="fides" className="brand__logo" width="210" height="42"/>
          <span className="brand__sub">Gewerbe</span>
        </a>

        <nav className={"nav" + (open ? " nav--mobile" : "")}>
          <div className="nav__dropdown" data-open={drop} ref={dropRef}>
            <button onClick={(e) => { e.stopPropagation(); setDrop(v => !v); }} aria-expanded={drop}>
              Leistungen <Icon path={I.chev} size={16} strokeWidth={2}/>
            </button>
            <div className="nav__menu">
              {services.map(s => (
                <a key={s.key} href={s.href} className={active === s.key ? "active" : ""}>
                  <strong>{s.title}</strong>
                  <span>{s.sub}</span>
                </a>
              ))}
            </div>
          </div>
          {links.map(l => (
            <a key={l.key} href={l.href} className={active === l.key ? "active" : ""}>{l.label}</a>
          ))}
          <a href={active === "home" ? "#schnellcheck" : "index.html#schnellcheck"} className="btn btn--primary" style={{marginLeft: 8}}>
            Schnellcheck starten
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="Menü öffnen">
          <Icon path={open ? I.close : I.menu} strokeWidth={2}/>
        </button>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">fides<span className="footer-brand__sub">Gewerbe</span></div>
            <p style={{color: "rgba(255,255,255,0.7)", marginBottom: 12}}>
              Unabhängiger Versicherungsmakler für Gewerbekunden in Schongau und Landsberg am Lech.
            </p>
            <p style={{color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", margin: 0}}>
              Privatkunden: <a href="https://fides-finanz.de" target="_blank" rel="noopener">fides-finanz.de</a>
            </p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <ul>
              <li>Karwendelring 2<br/>86956 Schongau</li>
              <li><a href="tel:+4988616995681">+49 (8861) 699568-1</a></li>
              <li><a href="mailto:info@fides-finanz.de">info@fides-finanz.de</a></li>
              <li style={{marginTop: 12, color: "rgba(255,255,255,0.62)"}}>Mo–Fr · 8:00–18:00</li>
            </ul>
          </div>
          <div>
            <h3>Leistungen</h3>
            <ul>
              <li><a href="betriebshaftpflicht.html">Betriebshaftpflicht</a></li>
              <li><a href="betriebliche-krankenversicherung.html">Betriebliche Krankenversicherung</a></li>
              <li><a href="betriebliche-altersvorsorge.html">Betriebliche Altersvorsorge</a></li>
              <li><a href="berufshaftpflicht.html">Berufshaftpflicht</a></li>
              <li><a href="index.html#schnellcheck">Gewerbe-Schnellcheck</a></li>
            </ul>
          </div>
          <div>
            <h3>Unternehmen</h3>
            <ul>
              <li><a href="ueber-uns.html">Über uns</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="impressum.html">Impressum</a></li>
              <li><a href="datenschutz.html">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} fides GmbH. Alle Rechte vorbehalten.</span>
          <span>Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO · IHK München</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Trust bar ---------- */
function TrustBar() {
  const items = [
    { icon: I.scale, label: "IHK-Zulassung", sub: "§ 34d GewO" },
    { icon: I.users, stat: "[X]", label: "Gewerbekunden" },
    { icon: I.clock, stat: "[X]", label: "Jahre Erfahrung" },
    { icon: I.check, label: "Unverbindliche Erstberatung" },
  ];
  return (
    <div className="trustbar">
      <div className="container">
        <div className="trustbar__row">
          {items.map((it, i) => (
            <div key={i} className="trustbar__item">
              <Icon path={it.icon} strokeWidth={1.8}/>
              {it.stat && <span className="stat">{it.stat}</span>}
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- ServiceCard ---------- */
function ServiceCard({ href, icon, title, body }) {
  return (
    <a href={href} className="card card--hover service-card" style={{display: "block", color: "inherit"}}>
      <span className="ico-wrap"><Icon path={icon} strokeWidth={1.6}/></span>
      <h3>{title}</h3>
      <p className="muted" style={{margin: 0}}>{body}</p>
      <span className="arrow">Mehr erfahren <Icon path={I.arrowRight} size={16} strokeWidth={2}/></span>
    </a>
  );
}

/* ---------- Schnellcheck Section (Tally embed) ---------- */
function SchnellcheckSection({ id = "schnellcheck", compact = false }) {
  useEffect(() => {
    const ensureTally = () => {
      if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
        window.Tally.loadEmbeds();
        return;
      }
      if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) return;
      const s = document.createElement("script");
      s.src = "https://tally.so/widgets/embed.js";
      s.async = true;
      s.onload = () => window.Tally && window.Tally.loadEmbeds && window.Tally.loadEmbeds();
      document.body.appendChild(s);
    };
    ensureTally();
  }, []);

  return (
    <section id={id} className="section schnellcheck">
      <div className="container">
        <div className="schnellcheck__grid">
          <div>
            <span className="eyebrow">Gewerbe-Schnellcheck</span>
            <h2 style={{textWrap: "balance"}}>In 60 Sekunden zur passenden Absicherung.</h2>
            <p className="muted" style={{fontSize: "1.0625rem", maxWidth: 480}}>
              Beantworten Sie wenige kurze Fragen. Wir vergleichen anschließend
              den gesamten Markt und melden uns mit konkreten Empfehlungen –
              persönlich, telefonisch, ohne Verkaufsdruck.
            </p>
            <ul className="bullets">
              <li>
                <Icon path={I.bolt} strokeWidth={1.8}/>
                <div>
                  <strong>Vollständiger Marktvergleich</strong>
                  <span>Wir prüfen den gesamten relevanten Markt und filtern die Tarife, die wirklich zu Ihrem Betrieb passen.</span>
                </div>
              </li>
              <li>
                <Icon path={I.shield} strokeWidth={1.8}/>
                <div>
                  <strong>Unabhängig, nicht provisionsgetrieben</strong>
                  <span>Als freier Gewerbemakler agieren wir unabhängig von Gesellschaftsinteressen und vertreten ausschließlich Ihre.</span>
                </div>
              </li>
              <li>
                <Icon path={I.mapPin} strokeWidth={1.8}/>
                <div>
                  <strong>Vor Ort in Schongau</strong>
                  <span>Persönlicher Ansprechpartner im Pfaffenwinkel und Landsberger Umland – auch beim Schaden.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="tally-host" aria-label="Gewerbe-Schnellcheck Formular">
            <iframe
              data-tally-src="https://tally.so/embed/pbJkvB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="760"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Gewerbe-Schnellcheck"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA strip ---------- */
function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="container">
        <div className="row">
          <div>
            <h2>Bereit für einen ehrlichen Versicherungs­vergleich?</h2>
            <p>Wir prüfen Ihren bestehenden Schutz – unverbindlich und auf Wunsch in einem persönlichen Termin in Schongau.</p>
          </div>
          <a href="index.html#schnellcheck" className="btn btn--primary btn--lg">
            Schnellcheck starten <Icon path={I.arrowRight} size={18} strokeWidth={2}/>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mount helper used by every page ---------- */
window.fides = { Icon, I, Header, Footer, TrustBar, ServiceCard, SchnellcheckSection, CTAStrip };
})();
