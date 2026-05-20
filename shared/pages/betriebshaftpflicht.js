const {
  Icon,
  I,
  Header,
  Footer,
  SchnellcheckSection,
  CTAStrip
} = window.fides;
const HERO_IMG = "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80')";
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: "bhv"
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
  }, "Leistung \xB7 Betriebshaftpflicht"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textWrap: "balance"
    }
  }, "Betriebshaftpflicht: Der Grundschutz f\xFCr jeden Betrieb."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Ein Kunde rutscht in Ihrem Gesch\xE4ft aus, eine Lieferung besch\xE4digt fremdes Eigentum, ein Mitarbeiter verursacht einen Fehler bei der Arbeit beim Kunden \u2013 die Betriebshaftpflicht \xFCbernimmt berechtigte Anspr\xFCche und wehrt unberechtigte ab."), /*#__PURE__*/React.createElement("div", {
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
  }, "Was ist das?"), /*#__PURE__*/React.createElement("h2", null, "Schutz vor Schadenersatz\xADanspr\xFCchen Dritter."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "1.0625rem"
    }
  }, "Die Betriebshaftpflicht ist f\xFCr Unternehmen das, was die Privathaftpflicht f\xFCr Privatpersonen ist: Sie reguliert Sch\xE4den, die Sie oder Ihre Mitarbeitenden im Rahmen der betrieblichen T\xE4tigkeit verursachen. Im Schadenfall pr\xFCft der Versicherer den Anspruch, zahlt berechtigte Forderungen und wehrt unberechtigte \u2013 notfalls vor Gericht \u2013 auf eigene Kosten ab."), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Was ist abgedeckt?"), /*#__PURE__*/React.createElement("div", {
    className: "coverage-grid"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Personensch\xE4den"), " \u2013 etwa Verletzungen von Kunden, Lieferanten oder Passanten")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Sachsch\xE4den"), " \u2013 an fremdem Eigentum, von der Werkstatt bis zur Kundenwohnung")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Folgesch\xE4den"), " \u2013 wirtschaftliche Sch\xE4den, die aus Personen- oder Sachsch\xE4den entstehen"))), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "T\xE4tigkeitssch\xE4den"), " \u2013 Sch\xE4den an Objekten, an denen Sie gerade arbeiten")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Mietsachsch\xE4den"), " \u2013 an gemieteten Gesch\xE4ftsr\xE4umen und Inventar")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Abwehrkostenschutz"), " \u2013 Rechtsverteidigung bei unberechtigten Forderungen")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Wer braucht sie?"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Praktisch jedes Gewerbe profitiert von einer Betriebshaftpflicht \u2013 in vielen Branchen ist sie \xFCber die Berufsgenossenschaft, Innung oder den Vermieter sogar faktisch verpflichtend."), /*#__PURE__*/React.createElement("div", {
    className: "who-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.building,
    strokeWidth: 1.8
  }), "Handwerksbetriebe"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.building,
    strokeWidth: 1.8
  }), "Gastronomie & Hotellerie"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.building,
    strokeWidth: 1.8
  }), "Einzelhandel"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.building,
    strokeWidth: 1.8
  }), "Dienstleister mit Kundenkontakt"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.building,
    strokeWidth: 1.8
  }), "Produktion & Werkst\xE4tten"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.building,
    strokeWidth: 1.8
  }), "Vereine & Veranstaltungen"))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "fact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "Auf einen Blick"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Wer?"), /*#__PURE__*/React.createElement("span", null, "Alle Gewerbebetriebe")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sch\xFCtzt vor"), /*#__PURE__*/React.createElement("span", null, "Personen- & Sachsch\xE4den")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Pflicht?"), /*#__PURE__*/React.createElement("span", null, "Branchenabh\xE4ngig")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Typische Summe"), /*#__PURE__*/React.createElement("span", null, "3\u201310 Mio. \u20AC")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Was kostet eine Betriebshaftpflicht?"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem"
    }
  }, "Eine pauschale Antwort w\xE4re unseri\xF6s \u2013 der Beitrag richtet sich nach Branche, Umsatz, Mitarbeiterzahl und gew\xFCnschten Deckungsbausteinen. Kleinbetriebe starten oft im niedrigen dreistelligen Bereich pro Jahr, mittlere Handwerks- oder Gastronomiebetriebe liegen meist im mittleren bis hohen dreistelligen Bereich."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem",
      marginBottom: 0
    }
  }, "Wir vergleichen f\xFCr Sie konkrete Angebote \u2013 ohne Kostenfalle, ohne Lockpr\xE4mie.")), /*#__PURE__*/React.createElement("a", {
    href: "#schnellcheck",
    className: "btn btn--primary btn--lg",
    style: {
      marginTop: 20,
      width: "100%"
    }
  }, "Beitrag berechnen lassen"))))), /*#__PURE__*/React.createElement(SchnellcheckSection, null), /*#__PURE__*/React.createElement(CTAStrip, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null));
