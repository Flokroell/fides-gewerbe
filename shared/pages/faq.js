function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Icon,
  I,
  Header,
  Footer,
  CTAStrip
} = window.fides;
const faqs = [{
  q: "Was kostet eine Betriebshaftpflicht­versicherung für mein Gewerbe?",
  a: "Die Jahresprämie richtet sich nach Branche, Umsatz, Mitarbeiterzahl und gewünschten Deckungs­bausteinen. Kleinbetriebe und Solo-Selbständige starten häufig im niedrigen dreistelligen Bereich pro Jahr, mittelständische Handwerks- oder Gastronomiebetriebe liegen meist im mittleren bis hohen dreistelligen Bereich. Eine seriöse Aussage ist nur nach Vergleich konkreter Angebote möglich – pauschale Online-Werte führen oft in die Irre, weil sie wichtige Bausteine ausblenden."
}, {
  q: "Brauche ich als Solo-Selbständiger überhaupt eine Gewerbeversicherung?",
  a: "In den meisten Fällen ja. Sobald Sie geschäftlich Kontakt zu Kunden, Lieferanten oder gemieteten Räumen haben, können bereits kleinere Pannen zu existenz­gefährdenden Forderungen führen – ein umgestoßener Laptop in der Kundenwohnung oder ein gestürzter Kunde im Ladengeschäft reichen aus. Welche Bausteine nötig sind, hängt von Ihrer Tätigkeit ab; Beratungs- und Planungsberufe benötigen zusätzlich eine Berufshaftpflicht für reine Vermögensschäden."
}, {
  q: "Was ist der Unterschied zwischen Versicherungsmakler und Versicherungsvertreter?",
  a: "Ein Vertreter arbeitet im Auftrag eines bestimmten Versicherers und vermittelt dessen Produkte. Ein Makler arbeitet im Auftrag des Kunden, ist gesetzlich zur Marktbeobachtung verpflichtet und vergleicht Angebote vieler Gesellschaften. Wir empfehlen den Tarif, der Ihren Bedarf am besten abdeckt – nicht den, der die beste Provision zahlt. Im Schadenfall vertritt der Makler darüber hinaus Ihre Interessen gegenüber dem Versicherer."
}, {
  q: "Wie funktioniert die betriebliche Krankenversicherung (bKV) konkret?",
  a: "Der Arbeitgeber schließt einen Gruppen­vertrag bei einem privaten Krankenversicherer ab und versichert seine Mitarbeitenden ohne individuelle Gesundheitsprüfung. Bis zur monatlichen Sachbezugs­grenze von 50 Euro je Beschäftigtem ist der Beitrag steuer- und sozialabgabenfrei. Die Mitarbeitenden nutzen die Leistungen direkt bei Ärzten, Zahnärzten oder Optikern – typisch sind Zahnersatz, Sehhilfen, Vorsorge­untersuchungen und Krankenhaus-Komfortleistungen."
}, {
  q: "Welche Versicherungen sind für Handwerksbetriebe in Bayern besonders wichtig?",
  a: "Faktisch unverzichtbar ist die Betriebshaftpflicht – viele Innungen und Auftraggeber verlangen einen Nachweis. Ergänzend lohnen sich in der Regel Inhalts- und Geschäftsgebäude­versicherung, eine Werkverkehrs- oder Maschinen­versicherung sowie bei Beschäftigten zunehmend die betriebliche Krankenversicherung. Welche Bausteine sich rechnen, prüfen wir individuell – Pauschal­empfehlungen wären unseriös und führen häufig zu Über- oder Unterversicherung."
}, {
  q: "Wie läuft eine Schadenmeldung bei fides ab?",
  a: "Sie melden den Schaden direkt bei uns – per Telefon, E-Mail oder persönlich im Büro. Wir nehmen alle relevanten Informationen auf, leiten den Schaden mit unserer fachlichen Einschätzung an den Versicherer weiter und übernehmen die Kommunikation. Bei Bedarf koordinieren wir Gutachter, Anwälte oder Sachverständige. Sie haben einen festen Ansprech­partner bis zur abschließenden Regulierung und müssen nicht selbst gegenüber dem Versicherer argumentieren."
}, {
  q: "Lohnt es sich, mehrere Verträge bei einem Versicherer zu bündeln?",
  a: "Oft ja: Mehrere Risiken aus einer Hand können günstigere Konditionen und eine konsistente Schadenbearbeitung bedeuten. Allerdings ist Bündelung kein Selbstzweck – wenn ein Wettbewerber im Einzelbaustein deutlich bessere Bedingungen hat, empfehlen wir diesen. Was sich für Sie wirklich rechnet, zeigen wir transparent im Angebotsvergleich und nennen sowohl die Vor- als auch die Nachteile eines Bündels."
}, {
  q: "Können Sie mir auch in Landsberg am Lech oder Weilheim weiterhelfen?",
  a: "Ja. Unser Büro steht in Schongau, betreut werden Gewerbekunden im gesamten Pfaffenwinkel, im Landkreis Weilheim-Schongau, in Landsberg am Lech, Penzberg, Murnau und den angrenzenden Regionen. Termine sind vor Ort in Schongau, bei Ihnen im Betrieb oder per Video möglich – wir passen uns Ihrem Arbeitsalltag an."
}, {
  q: "Wie lange dauert es, bis ich nach dem Schnellcheck eine Auswertung erhalte?",
  a: "Der Schnellcheck selbst nimmt ungefähr 60 Sekunden in Anspruch. Wir melden uns innerhalb eines Werktages telefonisch oder per E-Mail mit einer ersten Einschätzung. Wenn wir anschließend konkrete Angebote vorbereiten, dauert das je nach Komplexität und Branche ein bis fünf Werktage – Sie erhalten den Vergleich übersichtlich aufbereitet, inklusive klarer Empfehlung."
}, {
  q: "Kostet die Beratung etwas?",
  a: "Nein. Die Erstberatung und der Marktvergleich sind für Sie unverbindlich und kostenfrei. Als Makler erhalten wir unsere Vergütung über die Courtage des Versicherers, mit dem Sie sich am Ende für einen Vertrag entscheiden – ohne Aufschlag auf Ihre Prämie. Reine Honorarberatung bieten wir auf Wunsch ebenfalls an; in diesem Fall wird das Honorar offen ausgewiesen und mit der Courtage verrechnet."
}];
function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    active: "faq"
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
  }, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      textWrap: "balance"
    }
  }, "Klare Antworten zu Gewerbe\xADversicherungen."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Die zehn Fragen, die wir von Gewerbekunden am h\xE4ufigsten h\xF6ren \u2013 kompakt beantwortet. Wenn Ihre Frage nicht dabei ist, melden Sie sich gern direkt bei uns."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("details", _extends({
    key: i,
    className: "faq-item"
  }, i === 0 ? {
    open: true
  } : {}), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement(Icon, {
    path: I.chev,
    className: "chev icon",
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    className: "answer"
  }, /*#__PURE__*/React.createElement("p", null, f.a))))))), /*#__PURE__*/React.createElement(CTAStrip, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Page, null));
