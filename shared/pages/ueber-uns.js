const {
  Icon,
  I,
  Header,
  Footer,
  CTAStrip
} = window.fides;
const leadership = [{
  name: "Stefan Feyerabend",
  role: "Geschäftsführer",
  qual: "Finanzfachwirt (FH)",
  lead: true
}, {
  name: "Marvin Feyerabend",
  role: "Geschäftsführer",
  qual: "Versicherungsfachmann IHK · Immobilienmakler IHK",
  lead: true
}];
const team = [{
  name: "Janine Westbomke",
  role: "Innendienstleiterin",
  qual: "Versicherungskauffrau IHK"
}, {
  name: "Simone Backes",
  role: "Versicherungsmaklerin",
  qual: "Versicherungsfachwirtin IHK"
}, {
  name: "Lena Weindl",
  role: "Vertriebsassistentin",
  qual: "Versicherungsfachfrau IHK"
}, {
  name: "Andreas Welzmiller",
  role: "Versicherungsmakler",
  qual: "Versicherungsfachmann IHK"
}, {
  name: "Manuel Suder",
  role: "Versicherungsmakler",
  qual: "Versicherungsfachmann IHK"
}, {
  name: "Andreas Ikier",
  role: "Versicherungsmakler",
  qual: "Versicherungsfachmann IHK"
}, {
  name: "Thomas Weiß",
  role: "Versicherungsmakler",
  qual: "Versicherungsfachmann IHK"
}];
const initials = n => n.split(" ").map(p => p[0]).slice(0, 2).join("");
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: "ueber"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "#C8DCA0"
    }
  }, "\xDCber uns"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textWrap: "balance"
    }
  }, "Versicherungsmakler aus \xDCberzeugung \u2013 im Pfaffenwinkel zu Hause."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "fides ist ein inhabergef\xFChrtes Maklerb\xFCro in Schongau. Wir betreuen Handwerk, Gastronomie, Dienstleister und Einzelhandel in Bayern \u2013 pers�nlich, langfristig und mit einem Team, das sowohl die Region als auch den Versicherungsmarkt seit Jahren kennt."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head section-head--left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Gesch\xE4ftsf\xFChrung"), /*#__PURE__*/React.createElement("h2", null, "Inhabergef\xFChrt von Stefan und Marvin Feyerabend.")), /*#__PURE__*/React.createElement("div", {
    className: "team-grid",
    style: {
      gridTemplateColumns: "repeat(2, 1fr)"
    }
  }, leadership.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "person person--lead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "person__avatar"
  }, initials(p.name)), /*#__PURE__*/React.createElement("h4", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, p.role), /*#__PURE__*/React.createElement("div", {
    className: "qual"
  }, p.qual)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head section-head--left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Das Team"), /*#__PURE__*/React.createElement("h2", null, "Innen- und Au\xDFendienst, der Sie wirklich kennt."), /*#__PURE__*/React.createElement("p", null, "Vom Erstgespr\xE4ch bis zur Schadenabwicklung haben Sie bei fides feste Ansprechpartner. Das gesamte Team verf\xFCgt \xFCber anerkannte IHK-Abschl\xFCsse im Versicherungswesen.")), /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, team.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "person__avatar"
  }, initials(p.name)), /*#__PURE__*/React.createElement("h4", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, p.role), /*#__PURE__*/React.createElement("div", {
    className: "qual"
  }, p.qual)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Warum fides"), /*#__PURE__*/React.createElement("h2", null, "Was Sie als Gewerbekunde von uns erwarten d\xFCrfen.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card why"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.scale,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", null, "Echter Makler\xADstatus"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "Wir sind nach \xA7 34d GewO als Versicherungsmakler zugelassen und arbeiten im Auftrag unserer Kundinnen und Kunden \u2013 nicht im Auftrag einer einzelnen Versicherungsgesellschaft.")), /*#__PURE__*/React.createElement("div", {
    className: "card why"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.mapPin,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", null, "Region & Pers\xF6nlichkeit"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "Unser B\xFCro in Schongau ist pers\xF6nlich erreichbar. Termine vor Ort, im Betrieb oder per Video \u2013 Sie entscheiden, wie wir am besten zusammenarbeiten.")), /*#__PURE__*/React.createElement("div", {
    className: "card why"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.shield,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", null, "Begleitung im Schadenfall"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "Wenn es darauf ankommt, \xFCbernehmen wir die Kommunikation mit dem Versicherer \u2013 bis die Regulierung steht. Das ist f\xFCr uns kein Zusatz, sondern Teil unserer Aufgabe.")), /*#__PURE__*/React.createElement("div", {
    className: "card why"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.spark,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", null, "Moderne Prozesse"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "Mit dem digitalen Schnellcheck verk\xFCrzen wir die Vorqualifizierung auf 60 Sekunden. So bleibt mehr Zeit f\xFCr das, was wirklich z\xE4hlt: das pers\xF6nliche Gespr\xE4ch.")), /*#__PURE__*/React.createElement("div", {
    className: "card why"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.users,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", null, "Eingespieltes Team"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "Innendienst und Au\xDFendienst arbeiten Hand in Hand. Sie haben einen Hauptansprech\xADpartner, aber im Hintergrund ein gesamtes Team, das Ihre Vertr\xE4ge kennt.")), /*#__PURE__*/React.createElement("div", {
    className: "card why"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.globe,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("h3", null, "Schwesterbetrieb f\xFCr Privates"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "\xDCber ", /*#__PURE__*/React.createElement("a", {
    href: "https://fides-finanz.de",
    target: "_blank",
    rel: "noopener"
  }, "fides-finanz.de"), " ", "betreuen wir auch Ihre privaten Themen \u2013 Vorsorge, Altersversorgung, Finanzierung. Beides aus einer Hand, sauber getrennt gef\xFChrt."))))), /*#__PURE__*/React.createElement(CTAStrip, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null));
