const {
  Icon,
  I,
  Header,
  Footer,
  SchnellcheckSection,
  CTAStrip
} = window.fides;
const HERO_IMG = "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80')";
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: "bhf"
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
  }, "Leistung \xB7 Berufshaftpflicht"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textWrap: "balance"
    }
  }, "Berufshaftpflicht: Schutz, wenn ein Fehler bares Geld kostet."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Wo Beratung, Planung oder Gutachten zur Hauptleistung geh\xF6ren, drohen reine Verm\xF6gens\xADsch\xE4den \u2013 also finanzielle Folgen ohne vorausgehende Personen- oder Sachsch\xE4den. Genau hier greift die Berufshaftpflicht und sch\xFCtzt Ihre Existenz."), /*#__PURE__*/React.createElement("div", {
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
  }, "Was ist das?"), /*#__PURE__*/React.createElement("h2", null, "Absicherung von Verm\xF6gens\xADsch\xE4den aus Ihrer beruflichen T\xE4tigkeit."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "1.0625rem"
    }
  }, "Die Berufshaftpflicht (auch Verm\xF6gensschaden-Haftpflicht) erg\xE4nzt die Betriebshaftpflicht um Sch\xE4den, die rein finanziell entstehen \u2013 etwa durch einen Beratungs- oder Berechnungsfehler. F\xFCr viele freie Berufe und Beratungst\xE4tigkeiten ist sie gesetzlich oder kammerrechtlich vorgeschrieben."), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Was deckt der Vertrag ab?"), /*#__PURE__*/React.createElement("div", {
    className: "coverage-grid"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Verm\xF6genssch\xE4den"), " aus Beratung, Planung, Begutachtung oder Vermittlung")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Rechtskosten"), " bei berechtigten und unberechtigten Forderungen")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Erstrisikoversicherung"), " f\xFCr typische T\xE4tigkeitsfelder"))), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Cyber-Bausteine"), " \u2013 auf Wunsch erg\xE4nzbar")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "T\xE4tigkeit als Subunternehmer"), " \u2013 nach Vereinbarung mitversichert")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Vorsorgeversicherung"), " f\xFCr neu hinzukommende T\xE4tigkeiten")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "F\xFCr wen ist sie Pflicht oder dringend zu empfehlen?"), /*#__PURE__*/React.createElement("div", {
    className: "who-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.doc,
    strokeWidth: 1.8
  }), "Architekten & Ingenieure"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.doc,
    strokeWidth: 1.8
  }), "Steuerberater & Wirtschaftspr\xFCfer"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.doc,
    strokeWidth: 1.8
  }), "Rechtsanw\xE4lte & Notare"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.doc,
    strokeWidth: 1.8
  }), "Heilberufe & Therapeuten"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.doc,
    strokeWidth: 1.8
  }), "IT- & Unternehmens\xADberatung"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.doc,
    strokeWidth: 1.8
  }), "Immobilienmakler & Verwalter"))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "fact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "Auf einen Blick"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sch\xFCtzt vor"), /*#__PURE__*/React.createElement("span", null, "Verm\xF6genssch\xE4den")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Pflicht?"), /*#__PURE__*/React.createElement("span", null, "F\xFCr viele Berufe ja")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Typische Summe"), /*#__PURE__*/React.createElement("span", null, "250 Tsd. \u2013 5 Mio. \u20AC")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Selbstbeteiligung"), /*#__PURE__*/React.createElement("span", null, "Optional, beitragssenkend")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Was kostet das?"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem"
    }
  }, "Der Beitrag richtet sich nach Beruf, Honorarvolumen, gew\xE4hlter Deckungssumme und Selbstbeteiligung. Solo-Selbst\xE4ndige in beratenden T\xE4tigkeiten finden passende Vertr\xE4ge im niedrigen dreistelligen Bereich pro Jahr, kammerpflichtige Berufe liegen je nach Risiko deutlich h\xF6her."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem",
      marginBottom: 0
    }
  }, "Wir pr\xFCfen, welche Bedingungswerke wirklich zu Ihrer T\xE4tigkeit passen \u2013 nicht jeder g\xFCnstige Tarif schlie\xDFt alle relevanten T\xE4tigkeitsfelder mit ein.")), /*#__PURE__*/React.createElement("a", {
    href: "#schnellcheck",
    className: "btn btn--primary btn--lg",
    style: {
      marginTop: 20,
      width: "100%"
    }
  }, "Vergleich anfordern"))))), /*#__PURE__*/React.createElement(SchnellcheckSection, null), /*#__PURE__*/React.createElement(CTAStrip, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null));
