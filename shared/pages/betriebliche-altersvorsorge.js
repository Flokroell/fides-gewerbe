const {
  Icon,
  I,
  Header,
  Footer,
  SchnellcheckSection,
  CTAStrip
} = window.fides;
const HERO_IMG = "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80')";
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: "bav"
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
  }, "Leistung \xB7 Betriebliche Altersvorsorge"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textWrap: "balance"
    }
  }, "Betriebsrente: Mitarbeiter finden und binden im \u201EWar for Talents\"."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Heute reichen ein abwechslungsreicher Job und ein gutes Gehalt nicht mehr aus, um Fachkr\xE4fte langfristig zu halten. Mit einer durchdachten betrieblichen Altersvorsorge schenken Sie Ihrem Team echte finanzielle Sicherheit \u2013 und positionieren sich als attraktiver Arbeitgeber im Pfaffenwinkel."), /*#__PURE__*/React.createElement("div", {
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
  }, "Was ist das?"), /*#__PURE__*/React.createElement("h2", null, "Vom Arbeitgeber zugesagte Versorgungsleistungen f\xFCr Alter, Tod und Invalidit\xE4t."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "1.0625rem"
    }
  }, "Die betriebliche Altersvorsorge (bAV) umfasst alle finanziellen Leistungen, die Sie als Arbeitgeber Ihren Mitarbeitenden zur Altersversorgung, zur Versorgung von Hinterbliebenen im Todesfall oder zur Invalidit\xE4tsversorgung bei Erwerbs- oder Berufsunf\xE4higkeit zusagen. F\xFCr viele Arbeitnehmer ist die Betriebsrente eine sinnvolle Erg\xE4nzung zur gesetzlichen Rente \u2013 f\xFCr Sie als Arbeitgeber ein steuerlich gef\xF6rdertes Instrument, das Loyalit\xE4t schafft."), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Welche Vorteile haben Sie als Arbeitgeber?"), /*#__PURE__*/React.createElement("div", {
    className: "coverage-grid"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Mitarbeiterbindung"), " \u2013 Benefits, die im Bewerbungsgespr\xE4ch den Unterschied machen")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Sozialabgabenersparnis"), " \u2013 bei Entgeltumwandlung sparen Sie Lohnnebenkosten")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Pflichtzuschuss erf\xFCllt"), " \u2013 seit 2022 f\xFCr alle Neu- und Altvertr\xE4ge gesetzlich vorgeschrieben"))), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Steuerlich attraktiv"), " \u2013 Beitr\xE4ge sind als Betriebs\xADausgabe abzugsf\xE4hig")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Bilanzneutrale Gestaltung"), " m\xF6glich \u2013 je nach Durchf\xFChrungsweg")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    path: I.check,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Image als attraktiver Arbeitgeber"), " \u2013 gerade f\xFCr mittelst\xE4ndische Betriebe in der Region")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Vorteile f\xFCr Ihre Mitarbeitenden"), /*#__PURE__*/React.createElement("div", {
    className: "who-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.spark,
    strokeWidth: 1.8
  }), "Steuer- und sozialabgabenbeg\xFCnstigt"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.shield,
    strokeWidth: 1.8
  }), "Insolvenzschutz \xFCber den PSV"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.heart,
    strokeWidth: 1.8
  }), "Hinterbliebenen- und BU-Schutz integrierbar"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.users,
    strokeWidth: 1.8
  }), "Portabel beim Arbeitgeberwechsel"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.euro,
    strokeWidth: 1.8
  }), "Echte zus\xE4tzliche Rente f\xFCrs Alter"), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    path: I.bolt,
    strokeWidth: 1.8
  }), "Einfache Entgeltumwandlung")), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40
    }
  }, "Welche Durchf\xFChrungswege gibt es?"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Direktversicherung, Pensionskasse, Pensionsfonds, Unterst\xFCtzungs\xADkasse und Direktzusage \u2013 jeder Weg hat eigene steuerliche, bilanzielle und arbeitsrechtliche Konsequenzen. Wir analysieren mit Ihnen, welches Modell zu Ihrer Unternehmens\xADgr\xF6\xDFe, Belegschaft und Liquidit\xE4t passt \u2013 und welche Versicherer aktuell die attraktivsten Konditionen bieten.")), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "fact-card"
  }, /*#__PURE__*/React.createElement("h4", null, "Auf einen Blick"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Versicherungsnehmer"), /*#__PURE__*/React.createElement("span", null, "Arbeitgeber")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Versicherte"), /*#__PURE__*/React.createElement("span", null, "Mitarbeitende")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Pflichtzuschuss"), /*#__PURE__*/React.createElement("span", null, "15 % bei Entgeltumwandlung")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "F\xF6rderung"), /*#__PURE__*/React.createElement("span", null, "\xA7 3 Nr. 63 EStG")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Was kostet das den Betrieb?"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem"
    }
  }, "Bei der Entgeltumwandlung tr\xE4gt der Mitarbeitende den Hauptbeitrag selbst \u2013 Sie als Arbeitgeber leisten den Pflichtzuschuss von mindestens 15 % der umgewandelten Betr\xE4ge. Arbeitgeber\xADfinanzierte Modelle starten je nach Konzept ab etwa 50 Euro pro Mitarbeitendem und Monat, sind aber steuer- und sozialabgaben\xADbeg\xFCnstigt."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: "0.9375rem",
      marginBottom: 0
    }
  }, "Wir zeigen Ihnen die echte Nettowirkung \u2013 f\xFCr den Mitarbeitenden, f\xFCr Ihr Unternehmen und f\xFCr Ihre Bilanz.")), /*#__PURE__*/React.createElement("a", {
    href: "#schnellcheck",
    className: "btn btn--primary btn--lg",
    style: {
      marginTop: 20,
      width: "100%"
    }
  }, "bAV-Konzept anfragen"))))), /*#__PURE__*/React.createElement(SchnellcheckSection, null), /*#__PURE__*/React.createElement(CTAStrip, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null));
