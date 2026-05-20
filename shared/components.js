/* fides GmbH — shared React components (vanilla JSX, compiled via Babel) */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;

  /* ---------- Heroicons (24/outline subset) ---------- */
  const Icon = ({
    path,
    className = "icon",
    size = 24,
    strokeWidth = 1.6
  }) => /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, path);
  const I = {
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l8 3v5c0 5-3.4 9.2-8 10-4.6-.8-8-5-8-10V6l8-3z"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M5 12.5l4.5 4.5L19 7"
    }),
    spark: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
    })),
    clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    building: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"
    })),
    hand: /*#__PURE__*/React.createElement("path", {
      d: "M9 11V5a1.5 1.5 0 013 0v6M12 11V4a1.5 1.5 0 013 0v7M15 11V6a1.5 1.5 0 013 0v9c0 3-2 6-6 6-3 0-5-1.5-6.5-4L4 13c-.5-1 .3-2 1.4-1.5L9 13V7a1.5 1.5 0 013 0"
    }),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M20.8 7.3a5 5 0 00-8.8-2.4A5 5 0 003.2 7.3c0 5.4 8.8 11 8.8 11s8.8-5.6 8.8-11z"
    }),
    briefcase: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "7",
      width: "18",
      height: "13",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"
    })),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 5l7 7-7 7"
    }),
    arrowDown: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12l7 7 7-7"
    }),
    chev: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    menu: /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16M4 12h16M4 17h16"
    }),
    close: /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18"
    }),
    mapPin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "2.5"
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"
    }),
    mail: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 7l9 6 9-6"
    })),
    scale: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v16M5 20h14M7 8h10M7 8l-3 6a3 3 0 006 0L7 8zM17 8l-3 6a3 3 0 006 0l-3-6z"
    })),
    users: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 19c0-3 2.7-5 6-5s6 2 6 5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "9",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 19h6c0-2.5-1.8-4.2-4-4.7"
    })),
    doc: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v5h5M8 13h8M8 17h5"
    })),
    bolt: /*#__PURE__*/React.createElement("path", {
      d: "M13 3L4 14h7l-1 7 9-11h-7l1-7z"
    }),
    globe: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
    })),
    euro: /*#__PURE__*/React.createElement("path", {
      d: "M18 7a6 6 0 100 10M4 10h10M4 14h10"
    })
  };

  /* ---------- Header ---------- */
  function Header({
    active
  }) {
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const dropRef = useRef(null);
    useEffect(() => {
      const close = e => {
        if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false);
      };
      document.addEventListener("click", close);
      return () => document.removeEventListener("click", close);
    }, []);
    const links = [{
      href: "ueber-uns.html",
      label: "Über uns",
      key: "ueber"
    }, {
      href: "faq.html",
      label: "FAQ",
      key: "faq"
    }];
    const services = [{
      href: "betriebshaftpflicht.html",
      title: "Betriebshaftpflicht",
      sub: "Schutz vor Personen- und Sachschäden",
      key: "bhv"
    }, {
      href: "betriebliche-krankenversicherung.html",
      title: "Betriebliche Krankenversicherung",
      sub: "Gesundheits-Benefit für Ihr Team",
      key: "bkv"
    }, {
      href: "betriebliche-altersvorsorge.html",
      title: "Betriebliche Altersvorsorge",
      sub: "Betriebsrente als starker Benefit",
      key: "bav"
    }, {
      href: "berufshaftpflicht.html",
      title: "Berufshaftpflicht",
      sub: "Schutz vor Vermögensschäden",
      key: "bhf"
    }];
    return /*#__PURE__*/React.createElement("header", {
      className: "site-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container site-header__inner"
    }, /*#__PURE__*/React.createElement("a", {
      href: "index.html",
      className: "brand"
    }, /*#__PURE__*/React.createElement("img", {
      src: "shared/fides-logo.svg",
      alt: "fides",
      className: "brand__logo",
      width: "210",
      height: "42"
    }), /*#__PURE__*/React.createElement("span", {
      className: "brand__sub"
    }, "Gewerbe")), /*#__PURE__*/React.createElement("nav", {
      className: "nav" + (open ? " nav--mobile" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "nav__dropdown",
      "data-open": drop,
      ref: dropRef
    }, /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        setDrop(v => !v);
      },
      "aria-expanded": drop
    }, "Leistungen ", /*#__PURE__*/React.createElement(Icon, {
      path: I.chev,
      size: 16,
      strokeWidth: 2
    })), /*#__PURE__*/React.createElement("div", {
      className: "nav__menu"
    }, services.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.key,
      href: s.href,
      className: active === s.key ? "active" : ""
    }, /*#__PURE__*/React.createElement("strong", null, s.title), /*#__PURE__*/React.createElement("span", null, s.sub))))), links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.key,
      href: l.href,
      className: active === l.key ? "active" : ""
    }, l.label)), /*#__PURE__*/React.createElement("a", {
      href: active === "home" ? "#schnellcheck" : "index.html#schnellcheck",
      className: "btn btn--primary",
      style: {
        marginLeft: 8
      }
    }, "Schnellcheck starten")), /*#__PURE__*/React.createElement("button", {
      className: "menu-toggle",
      onClick: () => setOpen(o => !o),
      "aria-label": "Men\xFC \xF6ffnen"
    }, /*#__PURE__*/React.createElement(Icon, {
      path: open ? I.close : I.menu,
      strokeWidth: 2
    }))));
  }

  /* ---------- Footer ---------- */
  function Footer() {
    const year = new Date().getFullYear();
    return /*#__PURE__*/React.createElement("footer", {
      className: "site-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "footer-brand"
    }, "fides", /*#__PURE__*/React.createElement("span", {
      className: "footer-brand__sub"
    }, "Gewerbe")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(255,255,255,0.7)",
        marginBottom: 12
      }
    }, "Unabh\xE4ngiger Versicherungsmakler f\xFCr Gewerbekunden in Schongau und Landsberg am Lech."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(255,255,255,0.7)",
        fontSize: "0.875rem",
        margin: 0
      }
    }, "Privatkunden: ", /*#__PURE__*/React.createElement("a", {
      href: "https://fides-finanz.de",
      target: "_blank",
      rel: "noopener"
    }, "fides-finanz.de"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Kontakt"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Karwendelring 2", /*#__PURE__*/React.createElement("br", null), "86956 Schongau"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "tel:+4988616995681"
    }, "+49 (8861) 699568-1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@fides-finanz.de"
    }, "info@fides-finanz.de")), /*#__PURE__*/React.createElement("li", {
      style: {
        marginTop: 12,
        color: "rgba(255,255,255,0.62)"
      }
    }, "Mo\u2013Fr \xB7 8:00\u201318:00"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Leistungen"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "betriebshaftpflicht.html"
    }, "Betriebshaftpflicht")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "betriebliche-krankenversicherung.html"
    }, "Betriebliche Krankenversicherung")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "betriebliche-altersvorsorge.html"
    }, "Betriebliche Altersvorsorge")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "berufshaftpflicht.html"
    }, "Berufshaftpflicht")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "index.html#schnellcheck"
    }, "Gewerbe-Schnellcheck")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Unternehmen"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "ueber-uns.html"
    }, "\xDCber uns")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "faq.html"
    }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "impressum.html"
    }, "Impressum")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "datenschutz.html"
    }, "Datenschutz"))))), /*#__PURE__*/React.createElement("div", {
      className: "footer-bottom"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " fides GmbH. Alle Rechte vorbehalten."), /*#__PURE__*/React.createElement("span", null, "Versicherungsmakler mit Erlaubnis nach \xA7 34d Abs. 1 GewO \xB7 IHK M\xFCnchen"))));
  }

  /* ---------- Trust bar ---------- */
  function TrustBar() {
    const items = [{
      icon: I.scale,
      label: "IHK-Zulassung",
      sub: "§ 34d GewO"
    }, {
      icon: I.users,
      stat: "[X]",
      label: "Gewerbekunden"
    }, {
      icon: I.clock,
      stat: "[X]",
      label: "Jahre Erfahrung"
    }, {
      icon: I.check,
      label: "Unverbindliche Erstberatung"
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "trustbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "trustbar__row"
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "trustbar__item"
    }, /*#__PURE__*/React.createElement(Icon, {
      path: it.icon,
      strokeWidth: 1.8
    }), it.stat && /*#__PURE__*/React.createElement("span", {
      className: "stat"
    }, it.stat), /*#__PURE__*/React.createElement("span", null, it.label))))));
  }

  /* ---------- ServiceCard ---------- */
  function ServiceCard({
    href,
    icon,
    title,
    body
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      className: "card card--hover service-card",
      style: {
        display: "block",
        color: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ico-wrap"
    }, /*#__PURE__*/React.createElement(Icon, {
      path: icon,
      strokeWidth: 1.6
    })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", {
      className: "muted",
      style: {
        margin: 0
      }
    }, body), /*#__PURE__*/React.createElement("span", {
      className: "arrow"
    }, "Mehr erfahren ", /*#__PURE__*/React.createElement(Icon, {
      path: I.arrowRight,
      size: 16,
      strokeWidth: 2
    })));
  }

  /* ---------- Schnellcheck Section (Tally embed) ---------- */
  function SchnellcheckSection({
    id = "schnellcheck",
    compact = false
  }) {
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
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      className: "section schnellcheck"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "schnellcheck__grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Gewerbe-Schnellcheck"), /*#__PURE__*/React.createElement("h2", {
      style: {
        textWrap: "balance"
      }
    }, "In 60 Sekunden zur passenden Absicherung."), /*#__PURE__*/React.createElement("p", {
      className: "muted",
      style: {
        fontSize: "1.0625rem",
        maxWidth: 480
      }
    }, "Beantworten Sie wenige kurze Fragen. Wir vergleichen anschlie\xDFend den gesamten Markt und melden uns mit konkreten Empfehlungen \u2013 pers\xF6nlich, telefonisch, ohne Verkaufsdruck."), /*#__PURE__*/React.createElement("ul", {
      className: "bullets"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      path: I.bolt,
      strokeWidth: 1.8
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Vollst\xE4ndiger Marktvergleich"), /*#__PURE__*/React.createElement("span", null, "Wir pr\xFCfen den gesamten relevanten Markt und filtern die Tarife, die wirklich zu Ihrem Betrieb passen."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      path: I.shield,
      strokeWidth: 1.8
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Unabh\xE4ngig, nicht provisionsgetrieben"), /*#__PURE__*/React.createElement("span", null, "Als freier Gewerbemakler agieren wir unabh\xE4ngig von Gesellschaftsinteressen und vertreten ausschlie\xDFlich Ihre."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
      path: I.mapPin,
      strokeWidth: 1.8
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Vor Ort in Schongau"), /*#__PURE__*/React.createElement("span", null, "Pers\xF6nlicher Ansprechpartner im Pfaffenwinkel und Landsberger Umland \u2013 auch beim Schaden."))))), /*#__PURE__*/React.createElement("div", {
      className: "tally-host",
      "aria-label": "Gewerbe-Schnellcheck Formular"
    }, /*#__PURE__*/React.createElement("iframe", {
      "data-tally-src": "https://tally.so/embed/pbJkvB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
      loading: "lazy",
      width: "100%",
      height: "600",
      frameBorder: 0,
      marginHeight: 0,
      marginWidth: 0,
      title: "Gewerbe-Schnellcheck"
    })))));
  }

  /* ---------- Final CTA strip ---------- */
  function CTAStrip() {
    return /*#__PURE__*/React.createElement("section", {
      className: "cta-strip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Bereit f\xFCr einen ehrlichen Versicherungs\xADvergleich?"), /*#__PURE__*/React.createElement("p", null, "Wir pr\xFCfen Ihren bestehenden Schutz \u2013 unverbindlich und auf Wunsch in einem pers\xF6nlichen Termin in Schongau.")), /*#__PURE__*/React.createElement("a", {
      href: "index.html#schnellcheck",
      className: "btn btn--primary btn--lg"
    }, "Schnellcheck starten ", /*#__PURE__*/React.createElement(Icon, {
      path: I.arrowRight,
      size: 18,
      strokeWidth: 2
    })))));
  }

  /* ---------- Mount helper used by every page ---------- */
  window.fides = {
    Icon,
    I,
    Header,
    Footer,
    TrustBar,
    ServiceCard,
    SchnellcheckSection,
    CTAStrip
  };
})();
