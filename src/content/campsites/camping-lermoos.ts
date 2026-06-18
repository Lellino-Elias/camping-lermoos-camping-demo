import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-lermoos";

const campingLermoos: CampsiteConfig = {
  name: "Happy Camp Lermoos",
  shortName: "Happy Camp",
  slug: "camping-lermoos",
  ort: "Lermoos",
  region: "Tirol",
  brandKind: "Camping & Gästehaus",
  regionLong: "Lermoos · Tiroler Zugspitz Arena · Österreich",

  heroVariant: "center",

  claim: "Dein Bergurlaub mit Zugspitzblick in Lermoos",
  claimEmphasis: "mit Zugspitzblick",
  emailDetail: "der freie Blick auf die Zugspitze direkt vom Platz",
  intro:
    "Ein parkähnlicher Campingplatz und ein gemütliches Gästehaus, eingebettet in viel Grün und nur fünf Gehminuten vom Ortszentrum. Vor dir die Zugspitze, ringsum Wanderwege und Loipen direkt ab Platz.",

  statement: {
    text: "Wanderwege und Loipen starten direkt am Platz — die Skilifte erreichst du bequem zu Fuß.",
    emphasis: "direkt am Platz",
  },

  pillars: [
    {
      title: "Freier Zugspitzblick",
      text: "Vom ganzen Platz blickst du frei auf die Zugspitze und das weite Bergpanorama von Lermoos.",
      image: { src: `${IMG}/gallery-b9160fc87d.webp`, alt: "Blick auf das Zugspitzmassiv bei Lermoos" },
    },
    {
      title: "Parkähnlicher Campingplatz",
      text: "Großzügige Stellplätze in grüner, ruhiger Lage — eingebettet in Pflanzen und alte Bäume.",
      image: { src: `${IMG}/amenity-27d536a787.webp`, alt: "Stellplätze am Happy Camp mit Bergkulisse" },
    },
    {
      title: "Gästehaus mit Frühstück",
      text: "Standard- und Komfortzimmer inklusive Frühstück, einige mit Balkon und Blick auf die Zugspitze.",
      image: { src: `${IMG}/gallery-d5462196f7.webp`, alt: "Gästehaus des Happy Camp mit Blumenbalkonen" },
    },
  ],

  usps: [
    "Freier Zugspitzblick",
    "5 Gehminuten ins Zentrum",
    "Spielplatz direkt nebenan",
    "Wanderwege & Loipen ab Platz",
    "Hunde willkommen",
    "Gästehaus mit Frühstück",
  ],

  trust: {
    heading: "Ruhig gelegen, mitten in der Zugspitz Arena",
    headingEmphasis: "Zugspitz Arena",
    intro:
      "Ein persönlich geführter Platz am Fuß der Zugspitze: kurze Wege ins Ortszentrum, Wanderungen und Loipen direkt ab Platz und für die Kinder ein großer Abenteuerspielplatz gleich nebenan.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-096d4b6d63.webp`, alt: "Lermoos mit Kirchturm vor dem Bergpanorama" },
  },

  breather: {
    image: { src: `${IMG}/gallery-59e5104edf.webp`, alt: "Bergpanorama vom Balkon des Gästehauses in Lermoos" },
    line: "Morgens öffnet sich der Blick auf die ganze Bergwelt.",
  },

  camping: {
    heading: "Naturverbundenes Camping in Lermoos",
    intro:
      "Großzügige, ebene Stellplätze in parkähnlicher, ruhiger Lage — mit allem, was ein entspannter Campingtag in den Bergen braucht.",
    features: [
      {
        title: "Großzügige Stellplätze",
        text: "Weite, ebene Plätze auf gepflegter Wiese, mit freiem Blick auf die Berge rundherum.",
        image: { src: `${IMG}/amenity-e4c8ef4da2.webp`, alt: "Stellplatz mit Wohnwagen vor dem Zugspitzmassiv am Happy Camp" },
      },
      {
        title: "Stellplätze mit Bergblick",
        text: "Schattige Plätze unter alten Bäumen, dahinter das markante Gipfelpanorama von Lermoos.",
        image: { src: `${IMG}/amenity-c4542eb410.webp`, alt: "Stellplatzgasse unter Bäumen mit Bergblick" },
      },
      {
        title: "Sanitär & Waschräume",
        text: "Gepflegte Waschräume mit Spülküche und Einzelwaschkabinen — hell und sauber gehalten.",
        image: { src: `${IMG}/gallery-5d368413c1.webp`, alt: "Heller Waschraum mit Spülbecken am Campingplatz" },
      },
      {
        title: "Strom, Gas & Wasser",
        text: "Jeder Bereich mit Anschluss für Strom, Gas, Wasser und Abwasser, dazu ein Trockenraum.",
        image: { src: `${IMG}/amenity-89bba76967.webp`, alt: "Weitläufige Stellfläche am Happy Camp Lermoos" },
      },
      {
        title: "Ruhig am Ortsrand",
        text: "Absolut ruhige Lage — und doch in fünf Gehminuten mitten im Ortszentrum von Lermoos.",
        image: { src: `${IMG}/amenity-81a1e714e3.webp`, alt: "Ruhige Stellplätze mit Bergpanorama in Lermoos" },
      },
      {
        title: "Mitten im Grünen",
        text: "Pflanzen und Bäume rundherum, dazwischen die gepflegten Stellplätze — viel Raum zum Durchatmen.",
        image: { src: `${IMG}/amenity-ebd5c1b5d9.webp`, alt: "Gepflegter Stellplatz mit Wohnwagen und Hütte vor Bergpanorama" },
      },
    ],
  },

  kinder: {
    heading: "Spielplatz gleich nebenan",
    intro:
      "Der neue Abenteuerspielplatz liegt direkt neben dem Platz — die Kinder spielen in Sichtweite, während du entspannst.",
    features: [
      {
        title: "Klettern & Rutschen",
        text: "Klettergerüst, Kletterpyramide und Rutsche warten auf dem Abenteuerspielplatz nebenan.",
        image: { src: `${IMG}/kids-14dde46774.webp`, alt: "Klettergerüst und Rutsche am Abenteuerspielplatz" },
      },
      {
        title: "Schaukeln mit Bergblick",
        text: "Schaukeln, Karussell und ganz viel Platz zum Toben — dahinter das weite Bergpanorama.",
        image: { src: `${IMG}/kids-5c21f165f3.webp`, alt: "Schaukeln am Spielplatz vor Bergkulisse" },
      },
      {
        title: "Pumptrack & Soccer",
        text: "Ein Pumptrack, ein Mini-Flying-Fox und ein Soccerplatz für die größeren Abenteurer.",
        image: { src: `${IMG}/kids-21ca585e2e.webp`, alt: "Pumptrack am Spielplatz in Lermoos" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg in die Zugspitz Arena",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Fernpassstraße (B179) bis Lermoos; das Ortszentrum erreichst du in wenigen Minuten.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Lermoos an der Außerfernbahn (Garmisch–Reutte), vom Platz nur wenige Minuten ins Zentrum.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Nächste Flughäfen sind Innsbruck (rund 1 Stunde) und München (rund 1,5 Stunden).",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Happy Camp",
    headingEmphasis: "Happy Camp",
    intro:
      "Vom Stellplatz unter Bäumen bis zum Gästehaus mit Bergblick — ein paar Eindrücke von Platz und Umgebung.",
    tag: "Lermoos · Tirol",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-7db81ec8a1.webp`, alt: "Campingplatz mit Gästehaus vor dem Bergpanorama" },
      { src: `${IMG}/gallery-e728da0858.webp`, alt: "Zimmer im Gästehaus mit Sitzecke" },
      { src: `${IMG}/gallery-7cf00e5281.webp`, alt: "Gemütliche Gaststube im Gästehaus" },
      { src: `${IMG}/gallery-67c5237e33.webp`, alt: "Terrasse am Gästehaus des Happy Camp" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Lermoos",
    headingEmphasis: "in Lermoos",
    intro:
      "Wähle Zeitraum und Kategorie — wir melden uns persönlich mit deiner Verfügbarkeit für Stellplatz oder Gästehaus.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz inkl. Platzgebühr + 2 Personen · Zimmer inkl. Frühstück · zzgl. Kurtaxe € 3,00 p. P./Nacht · Sommerpreise",
    highlight: {
      title: "Panoramabad gratis",
      text: "Freier Eintritt ins Panoramabad Lermoos für unsere Gäste.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 36.7, perExtraGuest: 11.9 },
      { id: "standardzimmer", label: "Standardzimmer", perNight: 74.9 },
      { id: "komfortzimmer", label: "Komfortzimmer", perNight: 93.9 },
    ],
  },

  kontakt: {
    coords: { lat: 47.402719, lng: 10.887111 },
    tel: "+43 5673 2980",
    telHref: "tel:004356732980",
    mail: "info@camping-lermoos.com",
    adresse: "Garmischer Str. 21 · 6631 Lermoos · Tirol",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
      ],
    },
    { label: "Spielplatz", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingLermoos;
