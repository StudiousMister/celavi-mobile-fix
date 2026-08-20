export type Language = 'de' | 'en'

export const LANGUAGE_STORAGE_KEY = 'cela-vi-lang'

export const LANGUAGE_LABELS: Record<Language, string> = {
  de: 'Deutsch',
  en: 'English',
}

const de = {
  nav: {
    home: 'Home',
    experience: 'Experience',
    gallery: 'Gallery',
    events: 'Events',
    about: 'Über uns',
    contact: 'Kontakt',
    requestTable: 'Tisch anfragen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schliessen',
  },
  hero: {
    badge: 'Shisha • Bar • Lounge — Zug',
    titleLine1: 'Good Vibes.',
    titleLine2: 'Great Nights.',
    titleBrand: 'CÉ LA VI.',
    description:
      'Shisha, Drinks und Atmosphäre mitten in Zug. Ein Ort zum Abschalten, Geniessen und Zusammensein.',
    ctaPrimary: 'CÉ LA VI erleben',
    ctaSecondary: 'Tisch anfragen',
    location: 'Baarerstrasse 52 · 6300 Zug',
  },
  experience: {
    badge: 'The CÉ LA VI Experience',
    title: 'Mehr als eine Shisha Lounge.',
    description:
      'CÉ LA VI verbindet ausgewählte Shishas, Drinks und eine besondere Atmosphäre zu einem Ort für entspannte Abende, gute Gespräche und unvergessliche Nächte mitten in Zug.',
    pillars: [
      {
        tag: 'Shisha',
        title: 'Premium Shisha',
        text: 'Entspanne bei deiner Lieblingsshisha in stilvollem Ambiente.',
      },
      {
        tag: 'Drinks',
        title: 'Cocktails & Drinks',
        text: 'Von erfrischenden Drinks bis zum perfekten Begleiter für deinen Abend.',
      },
      {
        tag: 'Vibes',
        title: 'Lounge Atmosphäre',
        text: 'Musik, Licht, Design und Menschen – für den richtigen CÉ LA VI Vibe.',
      },
    ],
  },
  featured: {
    title: 'Your Place. Your People. Your Vibe.',
    description:
      'Vom entspannten Afterwork bis zum langen Wochenende – CÉ LA VI ist der Treffpunkt für besondere Abende in Zug.',
  },
  gallery: {
    title: 'Ein Blick ins CÉ LA VI',
    description: 'Atmosphäre kann man schwer beschreiben. Man muss sie erleben.',
    zoomLabel: 'Foto vergrössern',
    closeLabel: 'Schliessen',
    prevLabel: 'Vorheriges Bild',
    nextLabel: 'Nächstes Bild',
    dialogLabel: 'Bildergalerie',
  },
  events: {
    badge: 'Events & Special Nights',
    title: 'Bei uns passiert mehr.',
    description:
      'Public Viewings, besondere Abende, Events und CÉ LA VI Specials – entdecke, was als Nächstes ansteht.',
    featuredLabel: 'Featured Event',
    eventTitle: 'WM 2026 im CÉ LA VI',
    eventText:
      'Bestes Public Viewing in Zug – 200 Plätze indoor & outdoor. Alle Spiele live bei uns, begleitet von Shisha, Drinks und Food.',
    cta: 'Aktuelle Events entdecken',
  },
  about: {
    badge: 'CÉ LA VI Zug',
    title: 'Eine Adresse. Unzählige Erinnerungen.',
    description:
      'CÉ LA VI gehört seit Jahren zur Shisha- und Lounge-Szene in Zug. Unser Anspruch ist einfach: eine besondere Atmosphäre schaffen, in der man gerne bleibt, Freunde trifft und den Abend geniesst.',
    highlights: ['Shisha', 'Drinks', 'Good Vibes'],
  },
  socialProof: {
    title: 'Von unseren Gästen geschätzt.',
    ratingBasis: 'Basierend auf rund 190 Google Bewertungen',
    cta: 'Bewertungen ansehen',
  },
  instagram: {
    title: 'Follow the Vibe.',
    description: 'Neue Eindrücke, Events und CÉ LA VI Moments findest du auf Instagram.',
    handle: '@celavizug',
    ctaInstagram: 'Auf Instagram folgen',
    ctaFacebook: 'Auf Facebook folgen',
    viewOnInstagram: 'Auf Instagram ansehen',
  },
  visit: {
    title: 'See you at CÉ LA VI.',
    addressLabel: 'Adresse',
    addressLines: ['Baarerstrasse 52', '6300 Zug', 'Switzerland'],
    phoneLabel: 'Telefon',
    hoursLabel: 'Öffnungszeiten',
    hours: [
      { days: 'Montag – Donnerstag', time: '15:00 – 00:00' },
      { days: 'Freitag – Samstag', time: '15:00 – 03:00' },
      { days: 'Sonntag', time: '15:00 – 00:00' },
    ],
    ageNote: 'Einlass ab 18 Jahren',
    ctaRoute: 'Route öffnen',
    ctaCall: 'Jetzt anrufen',
    mapTitle: 'CÉ LA VI Standort Karte, Baarerstrasse 52, 6300 Zug',
  },
  finalCta: {
    title: 'Dein Abend beginnt hier.',
    description: 'Shisha. Drinks. Freunde. CÉ LA VI.',
    ctaTable: 'Tisch anfragen',
    ctaInstagram: 'Instagram',
    ctaFacebook: 'Facebook',
  },
  footer: {
    tagline: 'Shisha • Bar • Lounge',
    contactLabel: 'Kontakt',
    navigationLabel: 'Navigation',
    legalLabel: 'Rechtliches',
    cookieSettings: 'Cookie-Einstellungen',
    copyright: '© 2026 CÉ LA VI. Alle Rechte vorbehalten.',
  },
  cookieBanner: {
    title: 'Wir verwenden Cookies',
    description:
      'Wir nutzen notwendige Cookies für den Betrieb dieser Website. Mit deiner Zustimmung nutzen wir zusätzlich Cookies zur Analyse der Website-Nutzung. Mehr dazu in unserer Datenschutzerklärung.',
    acceptAll: 'Alle akzeptieren',
    necessaryOnly: 'Nur notwendige',
    settings: 'Einstellungen',
    privacyLink: 'Datenschutz',
    legalLink: 'Impressum',
  },
  cookieSettings: {
    title: 'Cookie-Einstellungen',
    description:
      'Wähle aus, welche Cookie-Kategorien du zulassen möchtest. Notwendige Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.',
    necessaryTitle: 'Notwendig',
    necessaryText:
      'Erforderlich für grundlegende Funktionen der Website, z. B. Navigation und Sicherheit. Diese Cookies können nicht deaktiviert werden.',
    functionalTitle: 'Funktional',
    functionalText:
      'Ermöglichen erweiterte Funktionen und Personalisierung, z. B. das Speichern deiner Spracheinstellung.',
    analyticsTitle: 'Analyse',
    analyticsText:
      'Helfen uns zu verstehen, wie Besucher die Website nutzen, damit wir sie verbessern können (Vercel Web Analytics).',
    marketingTitle: 'Marketing',
    marketingText:
      'Werden verwendet, um Besuchern relevante Werbung und Kampagnen anzuzeigen. Aktuell nutzen wir keine Marketing-Cookies.',
    alwaysOn: 'Immer aktiv',
    save: 'Auswahl speichern',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Alle ablehnen',
    close: 'Schliessen',
  },
  legalPage: {
    heading: 'Impressum',
    backLink: 'Zurück zur Startseite',
    operatorLabel: 'Betreiber',
    addressLabel: 'Adresse',
    contactLabel: 'Kontakt',
    phoneLabel: 'Telefon',
    socialLabel: 'Social Media',
  },
  privacyPage: {
    heading: 'Datenschutz',
    backLink: 'Zurück zur Startseite',
    lastUpdated: 'Stand: August 2026',
    sections: [
      {
        title: '1. Allgemeine Hinweise',
        body: [
          'Der Schutz deiner persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert dich darüber, welche Daten beim Besuch dieser Website erhoben werden, wie sie verwendet werden und welche Rechte dir zustehen.',
        ],
      },
      {
        title: '2. Verantwortliche Stelle',
        body: [
          'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
          'CÉ LA VI — Shisha • Bar • Lounge, Baarerstrasse 52, 6300 Zug, Schweiz.',
          'Telefon: +41 78 800 26 61.',
          'Handelsregister-/UID-Nummer: [falls vorhanden, hier ergänzen].',
        ],
      },
      {
        title: '3. Daten beim Besuch der Website',
        body: [
          'Beim Aufruf dieser Website werden durch den verwendeten Browser automatisch Informationen an den Server unserer Website gesendet und temporär in einem Logfile gespeichert. Dazu zählen üblicherweise: IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version, verwendetes Betriebssystem sowie die zuvor besuchte Seite (Referrer-URL). Diese Daten dienen der technischen Auslieferung der Website und der Erkennung von Störungen.',
        ],
      },
      {
        title: '4. Hosting',
        body: [
          'Diese Website wird bei einem externen Hosting-Anbieter betrieben. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosting-Anbieters gespeichert. Der Hosting-Anbieter verarbeitet Daten ausschliesslich in dem Umfang, der zur Erbringung der Hosting-Leistung erforderlich ist.',
        ],
      },
      {
        title: '5. Cookies',
        body: [
          'Diese Website verwendet Cookies. Notwendige Cookies sind für den Betrieb der Website erforderlich. Zusätzliche Cookies (z. B. für Analyse) werden nur mit deiner Einwilligung gesetzt. Du kannst deine Einwilligung jederzeit über die Cookie-Einstellungen anpassen oder widerrufen.',
        ],
        hasCookieSettingsButton: true,
      },
      {
        title: '6. Kontaktaufnahme',
        body: [
          'Wenn du per Telefon, E-Mail oder Social Media mit uns Kontakt aufnimmst, werden deine Angaben zur Bearbeitung deiner Anfrage sowie für mögliche Anschlussfragen bei uns gespeichert und verarbeitet.',
        ],
      },
      {
        title: '7. Tischanfragen',
        body: [
          'Für Tischreservierungen bieten wir dir auf dieser Website einen direkten Telefon- bzw. Kontaktlink an. Es findet dabei keine Speicherung deiner Anfrage in einer eigenen Datenbank durch diese Website statt – die Anfrage wird direkt an uns übermittelt (z. B. per Telefon).',
        ],
      },
      {
        title: '8. Analyse (Vercel Web Analytics)',
        body: [
          'Sofern du der Analyse-Kategorie in den Cookie-Einstellungen zustimmst, nutzen wir Vercel Web Analytics, um anonymisierte, aggregierte Nutzungsstatistiken über den Besuch dieser Website zu erhalten. Es werden keine individuellen Profile erstellt.',
        ],
      },
      {
        title: '9. Instagram',
        body: [
          'Auf dieser Website verlinken wir auf unser Instagram-Profil (@celavizug). Beim Klick auf diesen Link verlässt du unsere Website und es gelten die Datenschutzbestimmungen von Meta / Instagram.',
        ],
      },
      {
        title: '10. Facebook',
        body: [
          'Auf dieser Website verlinken wir auf unsere Facebook-Seite. Beim Klick auf diesen Link verlässt du unsere Website und es gelten die Datenschutzbestimmungen von Meta / Facebook.',
        ],
      },
      {
        title: '11. Externe Links',
        body: [
          'Diese Website enthält Links zu externen Websites Dritter (z. B. Google Maps, Google-Bewertungen, Social-Media-Plattformen). Auf die Inhalte dieser verlinkten Seiten haben wir keinen Einfluss und übernehmen keine Verantwortung dafür.',
        ],
      },
      {
        title: '12. Speicherdauer',
        body: [
          'Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.',
        ],
      },
      {
        title: '13. Deine Rechte',
        body: [
          'Du hast das Recht auf Auskunft über die von uns verarbeiteten Daten, auf Berichtigung, Löschung und Einschränkung der Verarbeitung sowie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Wende dich dazu an die oben genannte Kontaktadresse.',
        ],
      },
      {
        title: '14. Datensicherheit',
        body: [
          'Wir treffen angemessene technische und organisatorische Massnahmen, um deine Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Eine vollständige Sicherheit gegen alle Risiken kann jedoch nicht garantiert werden.',
        ],
      },
      {
        title: '15. Änderungen dieser Datenschutzerklärung',
        body: [
          'Wir können diese Datenschutzerklärung anpassen, um sie an geänderte rechtliche Rahmenbedingungen oder Änderungen unseres Angebots anzupassen. Es gilt jeweils die auf dieser Seite veröffentlichte, aktuelle Version.',
        ],
      },
    ],
  },
} as const

const en: typeof de = {
  nav: {
    home: 'Home',
    experience: 'Experience',
    gallery: 'Gallery',
    events: 'Events',
    about: 'About',
    contact: 'Contact',
    requestTable: 'Request a Table',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    badge: 'Shisha • Bar • Lounge — Zug',
    titleLine1: 'Good Vibes.',
    titleLine2: 'Great Nights.',
    titleBrand: 'CÉ LA VI.',
    description:
      'Shisha, drinks and atmosphere right in the heart of Zug. A place to unwind, enjoy and be together.',
    ctaPrimary: 'Experience CÉ LA VI',
    ctaSecondary: 'Request a Table',
    location: 'Baarerstrasse 52 · 6300 Zug',
  },
  experience: {
    badge: 'The CÉ LA VI Experience',
    title: 'More than a shisha lounge.',
    description:
      'CÉ LA VI brings together curated shishas, drinks and a distinct atmosphere for relaxed evenings, good conversations and unforgettable nights in the heart of Zug.',
    pillars: [
      {
        tag: 'Shisha',
        title: 'Premium Shisha',
        text: 'Relax with your favorite shisha in a stylish setting.',
      },
      {
        tag: 'Drinks',
        title: 'Cocktails & Drinks',
        text: 'From refreshing drinks to the perfect companion for your evening.',
      },
      {
        tag: 'Vibes',
        title: 'Lounge Atmosphere',
        text: 'Music, light, design and people – for the true CÉ LA VI vibe.',
      },
    ],
  },
  featured: {
    title: 'Your Place. Your People. Your Vibe.',
    description:
      'From a relaxed afterwork drink to a long weekend – CÉ LA VI is the meeting point for special nights in Zug.',
  },
  gallery: {
    title: 'A Look Inside CÉ LA VI',
    description: "Atmosphere is hard to describe. You have to experience it.",
    zoomLabel: 'Enlarge photo',
    closeLabel: 'Close',
    prevLabel: 'Previous image',
    nextLabel: 'Next image',
    dialogLabel: 'Photo gallery',
  },
  events: {
    badge: 'Events & Special Nights',
    title: 'There is always more happening.',
    description:
      'Public viewings, special nights, events and CÉ LA VI specials – discover what is coming up next.',
    featuredLabel: 'Featured Event',
    eventTitle: 'World Cup 2026 at CÉ LA VI',
    eventText:
      'The best public viewing in Zug – 200 seats indoor & outdoor. Every match live with us, paired with shisha, drinks and food.',
    cta: 'Discover current events',
  },
  about: {
    badge: 'CÉ LA VI Zug',
    title: 'One address. Countless memories.',
    description:
      "CÉ LA VI has been part of Zug's shisha and lounge scene for years. Our aim is simple: create a special atmosphere where people love to stay, meet friends and enjoy the evening.",
    highlights: ['Shisha', 'Drinks', 'Good Vibes'],
  },
  socialProof: {
    title: 'Loved by our guests.',
    ratingBasis: 'Based on around 190 Google reviews',
    cta: 'View reviews',
  },
  instagram: {
    title: 'Follow the Vibe.',
    description: 'Find new impressions, events and CÉ LA VI moments on Instagram.',
    handle: '@celavizug',
    ctaInstagram: 'Follow on Instagram',
    ctaFacebook: 'Follow on Facebook',
    viewOnInstagram: 'View on Instagram',
  },
  visit: {
    title: 'See you at CÉ LA VI.',
    addressLabel: 'Address',
    addressLines: ['Baarerstrasse 52', '6300 Zug', 'Switzerland'],
    phoneLabel: 'Phone',
    hoursLabel: 'Opening Hours',
    hours: [
      { days: 'Monday – Thursday', time: '15:00 – 00:00' },
      { days: 'Friday – Saturday', time: '15:00 – 03:00' },
      { days: 'Sunday', time: '15:00 – 00:00' },
    ],
    ageNote: 'Admission from 18 years',
    ctaRoute: 'Open route',
    ctaCall: 'Call now',
    mapTitle: 'CÉ LA VI location map, Baarerstrasse 52, 6300 Zug',
  },
  finalCta: {
    title: 'Your evening starts here.',
    description: 'Shisha. Drinks. Friends. CÉ LA VI.',
    ctaTable: 'Request a Table',
    ctaInstagram: 'Instagram',
    ctaFacebook: 'Facebook',
  },
  footer: {
    tagline: 'Shisha • Bar • Lounge',
    contactLabel: 'Contact',
    navigationLabel: 'Navigation',
    legalLabel: 'Legal',
    cookieSettings: 'Cookie Settings',
    copyright: '© 2026 CÉ LA VI. All rights reserved.',
  },
  cookieBanner: {
    title: 'We use cookies',
    description:
      'We use necessary cookies to operate this website. With your consent, we also use cookies to analyze site usage. Learn more in our privacy policy.',
    acceptAll: 'Accept all',
    necessaryOnly: 'Necessary only',
    settings: 'Settings',
    privacyLink: 'Privacy Policy',
    legalLink: 'Legal Notice',
  },
  cookieSettings: {
    title: 'Cookie Settings',
    description:
      'Choose which cookie categories you want to allow. Necessary cookies are required for the website to function and cannot be disabled.',
    necessaryTitle: 'Necessary',
    necessaryText:
      'Required for core website functions such as navigation and security. These cookies cannot be disabled.',
    functionalTitle: 'Functional',
    functionalText:
      'Enable enhanced functionality and personalization, e.g. remembering your language preference.',
    analyticsTitle: 'Analytics',
    analyticsText:
      'Help us understand how visitors use the website so we can improve it (Vercel Web Analytics).',
    marketingTitle: 'Marketing',
    marketingText:
      'Used to show visitors relevant advertising and campaigns. We currently do not use any marketing cookies.',
    alwaysOn: 'Always active',
    save: 'Save selection',
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    close: 'Close',
  },
  legalPage: {
    heading: 'Legal Notice',
    backLink: 'Back to homepage',
    operatorLabel: 'Operator',
    addressLabel: 'Address',
    contactLabel: 'Contact',
    phoneLabel: 'Phone',
    socialLabel: 'Social Media',
  },
  privacyPage: {
    heading: 'Privacy Policy',
    backLink: 'Back to homepage',
    lastUpdated: 'Last updated: August 2026',
    sections: [
      {
        title: '1. General Information',
        body: [
          'Protecting your personal data is important to us. This privacy policy explains what data is collected when you visit this website, how it is used, and what rights you have.',
        ],
      },
      {
        title: '2. Data Controller',
        body: [
          'The party responsible for data processing on this website is:',
          'CÉ LA VI — Shisha • Bar • Lounge, Baarerstrasse 52, 6300 Zug, Switzerland.',
          'Phone: +41 78 800 26 61.',
          'Commercial register / UID number: [to be added if applicable].',
        ],
      },
      {
        title: '3. Data Collected When Visiting the Website',
        body: [
          'When you access this website, your browser automatically sends information to our server, which is temporarily stored in a log file. This typically includes: IP address, date and time of the request, browser type and version, operating system used, and the referring page (referrer URL). This data is used to technically deliver the website and detect faults.',
        ],
      },
      {
        title: '4. Hosting',
        body: [
          'This website is operated with an external hosting provider. Personal data collected on this website is stored on the hosting provider\'s servers. The hosting provider processes data only to the extent necessary to provide the hosting service.',
        ],
      },
      {
        title: '5. Cookies',
        body: [
          'This website uses cookies. Necessary cookies are required for the website to function. Additional cookies (e.g. for analytics) are only set with your consent. You can adjust or withdraw your consent at any time via the cookie settings.',
        ],
        hasCookieSettingsButton: true,
      },
      {
        title: '6. Contacting Us',
        body: [
          'If you contact us by phone, email or social media, we store and process the information you provide in order to handle your inquiry and any follow-up questions.',
        ],
      },
      {
        title: '7. Table Requests',
        body: [
          'For table reservations, this website provides a direct phone or contact link. No inquiry is stored in a dedicated database by this website — the request is sent directly to us (e.g. by phone).',
        ],
      },
      {
        title: '8. Analytics (Vercel Web Analytics)',
        body: [
          'If you consent to the analytics category in the cookie settings, we use Vercel Web Analytics to obtain anonymized, aggregated usage statistics about visits to this website. No individual profiles are created.',
        ],
      },
      {
        title: '9. Instagram',
        body: [
          'This website links to our Instagram profile (@celavizug). Clicking this link takes you away from our website, and the privacy policy of Meta / Instagram applies.',
        ],
      },
      {
        title: '10. Facebook',
        body: [
          "This website links to our Facebook page. Clicking this link takes you away from our website, and the privacy policy of Meta / Facebook applies.",
        ],
      },
      {
        title: '11. External Links',
        body: [
          'This website contains links to third-party websites (e.g. Google Maps, Google reviews, social media platforms). We have no influence over the content of these linked pages and accept no responsibility for them.',
        ],
      },
      {
        title: '12. Data Retention',
        body: [
          'We only store personal data for as long as necessary for the respective purpose or as required by statutory retention obligations.',
        ],
      },
      {
        title: '13. Your Rights',
        body: [
          'You have the right to obtain information about the data we process about you, to have it corrected or deleted, to restrict its processing, and to withdraw any consent given at any time. Please contact us using the address above.',
        ],
      },
      {
        title: '14. Data Security',
        body: [
          'We take appropriate technical and organizational measures to protect your data against loss, misuse and unauthorized access. However, complete security against all risks cannot be guaranteed.',
        ],
      },
      {
        title: '15. Changes to this Privacy Policy',
        body: [
          'We may update this privacy policy to reflect changes in legal requirements or our services. The version published on this page is always the current one.',
        ],
      },
    ],
  },
}

export const dictionaries = { de, en }

export type Dictionary = typeof de
