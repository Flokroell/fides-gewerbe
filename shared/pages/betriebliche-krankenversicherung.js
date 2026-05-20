const {
  Icon,
  I,
  Header,
  Footer,
  SchnellcheckSection,
  CTAStrip
} = window.fides;
const HERO_IMG = "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')";
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: "bkv"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--product",
    style: {
      "--hero-image": HERO_IMG
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#C8DCA0"
    }
  }, "Leistung \xB7 Betriebliche Krankenversicherung"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textWrap: "balance"
    }
  }, "Ein Gesundheits-Benefit, der Ihr Team sp\xFCrbar besser stellt."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Mit der betrieblichen Krankenversicherung (bKV) bieten Sie Ihren Mitarbeitenden private Zusatzleistungen \u2013 Vorsorge, Zahn, Sehhilfe, Krankenhaus. Steuerlich beg\xFCnstigt, einfach umzusetzen und im Wettbewerb um Fachkr\xE4fte ein echter Unterschied."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#schnellcheck",
    className: "btn btn--primary btn--lg"
  }, "Schnellcheck starten ", /*#__PURE__*/React.createElement(Icon, {
    path: I.arrowRight,
    size: 18,
    strokeWidth: 2
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Was ist das?"), /*#__PURE__*/React.createElement("h2", null, "Der Arbeitgeber als Versicherungsnehmer f\xFCr sein Team."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "1.0625rem"
    }
  }, "Bei der bKV schlie\xDFt das Unternehmen einen Gruppenvertrag bei einer privaten Krankenversicherung ab und versichert seine Mitarbeitenden ohne Gesundheitspr\xFCfung. Bis zur monatlichen Sachbezugsgrenze von 50 Euro je Besch\xE4ftigtem ist der Beitrag lohnsteuer- und sozialversicherungsfrei \u2013 netto bleibt deutlich mehr als bei einer gleich teuren Gehaltserh\xF6hung."), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Welche Leistungen sind typisch?"), /*#__PURE__*/React.createElement("div", {
    className: "coverage-grid"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Zahnersatz und Zahnreinigung"), " \u2013 die meistgenutzte Leistung")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Sehhilfen"), " \u2013 Brillen, Kontaktlinsen, LASIK")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Vorsorgeuntersuchungen"), " \u2013 \xFCber den GKV-Katalog hinaus"))), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Heilpraktiker & Naturheilverfahren"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Krankenhaus-Komfortleistungen"), " \u2013 Ein-/Zweibettzimmer, Chefarzt")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Auslandsreisekranken\xADversicherung"), " f\xFCr Gesch\xE4fts- und Privatreisen")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Warum lohnt sich die bKV?"), /*#__PURE__*/React.createElement("div", {
    className: "who-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.spark,
    strokeWidth: 1.8
  }), "Sp\xFCrbarer Netto-Mehrwert"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.users,
    strokeWidth: 1.8
  }), "St\xE4rkere Mitarbeiterbindung"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.heart,
    strokeWidth: 1.8
  }), "Positionierung als attraktiver Arbeitgeber"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.euro,
    strokeWidth: 1.8
  }), "Steuer- und sozialabgabenfrei"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.bolt,
    strokeWidth: 1.8
  }), "Einfache Umsetzung als Gruppenvertrag"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 1.8
  }), "Ohne Gesundheitspr\xFCfung"))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "fact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "Auf einen Blick"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Versicherungsnehmer"), /*#__PURE__*/React.createElement("span", null, "Arbeitgeber")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Versicherte"), /*#__PURE__*/React.createElement("span", null, "Mitarbeitende")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sachbezugsgrenze"), /*#__PURE__*/React.createElement("span", null, "50 \u20AC / Monat")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Gesundheitspr\xFCfung"), /*#__PURE__*/React.createElement("span", null, "Entf\xE4llt im Gruppenvertrag")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Was kostet das pro Mitarbeiter?"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem"
    }
  }, "\xDCbliche Modelle liegen zwischen 15 und 50 Euro pro Person und Monat, abh\xE4ngig vom gew\xE4hlten Leistungsbudget. Innerhalb der Sachbezugsgrenze tr\xE4gt der Arbeitgeber den Beitrag steuer- und abgabenfrei."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem",
      marginBottom: 0
    }
  }, "Wir zeigen Ihnen die rechnerische Wirkung im Vergleich zu einer Gehaltserh\xF6hung \u2013 netto f\xFCr den Mitarbeitenden, brutto f\xFCr Ihren Betrieb.")), /*#__PURE__*/React.createElement("a", {
    href: "#schnellcheck",
    className: "btn btn--primary btn--lg",
    style: {
      marginTop: 20,
      width: "100%"
    }
  }, "bKV-Konzept anfragen"))))), /*#__PURE__*/React.createElement(SchnellcheckSection, null), /*#__PURE__*/React.createElement(CTAStrip, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null));
