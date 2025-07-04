function loadStartHTML() {
  document.getElementById("contentDiv").innerHTML = "";
  document.getElementById("contentDiv").innerHTML = `
            <div class="container my-5">
            <div class="text-center mb-4">
                <h2 class="mb-3">Willkommen beim Bürgerfonds Waldbrunn</h2>
                <p class="lead">
                    Der Bürgerfonds ist eine Initiative zur Unterstützung von Mitbürgerinnen und Mitbürgern in
                    schwierigen Lebenslagen – schnell, unbürokratisch und solidarisch.
                </p>
                <img src="bilder/Logo.jpg" alt="Logo"
                    class="img-fluid my-3" style="max-height: 300px;">
                <p class="fst-italic">Teilen – für ein besseres Miteinander</p>
            </div>
        </div>
    `;
  window.scrollTo(0, 0);
}

function loadPage(site) {
  switch (site.toLowerCase()) {
    case "startseite":
      loadStartHTML();
      break;
    case "bürgerfonds":
      loadBuergerfondsHTML();
      break;
    case "unterstützen":
      loadUnterstuetzenHTML();
      break;
    case "ansprechpartner":
      loadAnsprechpartnerHTML();
      break;
    case "anlaufstellen":
      loadAnlaufstellenHTML();
      break;
    case "impressum":
      loadImpressumHTML();
      break;
    case "datenschutz":
      loadDatenschutzHTML();
      break;
    case "satzung":
      loadSatzungHTML();
      break;
    case "grußwort":
      loadGrußwortHTML();
      break;
    case "mitglied":
      loadMitgliedHTML();
      break;
  }

  setReiter(site);
}

function setReiter(reiter) {
  reiterArray = [
    "Startseite",
    "Grußwort",
    "Bürgerfonds",
    "Unterstützen",
    "Ansprechpartner",
    "Anlaufstellen"
  ];
  reiterArray.forEach((element) => {
    document.getElementById(element).style.fontWeight = "normal";
  });
  document.getElementById(reiter).style.fontWeight = "bold";

}

function loadAnlaufstellenHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="text-center mb-4">
                <h2 class="mb-3">Weitere Anlaufstellen für Hilfsbedürftige</h2>
                <p class="lead">
                    Der Bürgerfonds Waldbrunn e.V. empfiehlt bei weiterem Unterstützungsbedarf unter anderem folgende Anlaufstellen:
                </p>
                <ul class="list-unstyled fs-5" style="line-height: 2;">
                    <li>• Mehrgenerationenhaus WABE</li>
                    <li>• Bundesagentur für Arbeit</li>
                    <li>• Beratungs- und Eingliederungszentrum für Arbeitssuchende</li>
                    <li>• Schuldnerberatung</li>
                    <li>• Allgemeiner Sozialdienst</li>
                    <li>• Suchtberatung</li>
                    <li>• Christliche Kirchen</li>
                    <li>• Höchberger Tafel</li>
                </ul>
                <p class="mt-4">
                    Zu den oben genannten Institutionen stellen wir bei Bedarf für Sie den Kontakt her.
                    Wenn Sie dies wünschen, kann dieser Kontakt auch vorerst anonym über uns erfolgen.
                    Auch zu anderen, hier nicht aufgeführten Einrichtungen haben wir möglicherweise Verbindungen und arbeiten mit ihnen zusammen.
                </p>
            </div>
        </div>
    `;
  window.scrollTo(0, 0);
}

function loadImpressumHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5 d-flex justify-content-center">
            <div class="text-center" style="max-width: 600px;">
                <h2 class="mb-4">Impressum</h2>
                <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                <p>
                    Bürgerfonds Waldbrunn e.V.<br>
                    vertreten durch den Vorstand
                </p>
                <p>
                    Vorsitzender: Hans Fiederling<br>
                    Telefon: 09306 - 1880<br>
                    E-Mail: hans.fiederling@Bürgerfonds-Waldbrunn.de
                    Internet: www.bürgerfonds-waldbrunn.de
                </p>
                <p>
                    Eintragung im Vereinsregister<br>
                    Registernummer: 201495<br>
                    Sitz des Vereins: Waldbrunn<br>
                    Registergericht: Amtgericht Würzburg
                </p>
                <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
                    Hans Fiederling<br>
                    E-Mail: hans.fiederling@Bürgerfonds-Waldbrunn.de
                </p>
            </div>
        </div>
        <br>
        <br>
        <br>
    `;
  window.scrollTo(0, 0);
}

function loadDatenschutzHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <h2 class="mb-4 text-center">Datenschutzerklärung</h2>
            <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).</p>
            <br>
            <br>

            <h5 class="mt-4">1. Kontaktaufnahme</h5>
            <p>Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <br>

            <h5 class="mt-4">2. Speicherung von Zugriffsdaten</h5>
            <p>Beim Besuch unserer Webseite werden automatisch Informationen allgemeiner Natur erfasst (z.B. IP-Adresse, Uhrzeit, verwendeter Browser). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen nur zur Sicherstellung eines störungsfreien Betriebs.</p>
            <br>

            <h5 class="mt-4">3. Ihre Rechte</h5>
            <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, kontaktieren Sie uns bitte.</p>
            <br>

            <p class="mt-4"><strong>Kontakt für Datenschutzanfragen:</strong><br>
            Hans Fiederling<br>
            Telefon: 09306 - 1880<br>
            E-Mail: Hans.Fiederling@Bürgerfonds-Waldbrunn.de</p>
        </div>
    `;
  window.scrollTo(0, 0);
}

function loadBuergerfondsHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="card shadow-sm border-0 bg-light">
                        <div class="card-body p-4">
                            <h2 class="card-title text-center mb-4">Was ist der Bürgerfonds Waldbrunn e.V.?</h2>
                            <p>
                                Der <strong>Bürgerfonds Waldbrunn e.V.</strong> ist eine solidarische Initiative, die Menschen, wohnhaft in Waldbrunn, in einer aktuellen Notlage unterstützt –
                                schnell, vertraulich und unbürokratisch. Er wurde gegründet, um dort zu helfen, wo staatliche Hilfen zu spät greifen oder gar nicht vorgesehen sind.
                            </p>
                            <p>
                                Wer Hilfe benötigt, kann sich vertrauensvoll an ein Mitglied des Vorstands wenden. Das Anliegen wird <strong>anonymisiert</strong> an eine
                                unabhängige <strong>fünfköpfige Vergabekommission</strong> weitergeleitet. Nach Prüfung erfolgt eine Entscheidung, die dann zurück
                                an den Vorstand übermittelt wird.
                            </p>
                            <p>
                                Die Unterstützung erfolgt ausschließlich durch <strong>Spenden und freiwillige Beiträge</strong> aus der Bevölkerung und von Unternehmen.
                                Alle Mittel werden direkt für Hilfsmaßnahmen verwendet – es entstehen keine Verwaltungskosten.
                            </p>

                            <p class="text-center mt-4 fst-italic text-success">
                                „Gemeinsam helfen – wenn es darauf ankommt.“
                            </p>
                    <div class="text-center mt-4">
                        <img src="bilder/händeGruppe.jpg" alt="GruppenBild" class="img-fluid rounded shadow-sm" style="max-width: 75%; height: auto;">
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  window.scrollTo(0, 0);
}

function loadUnterstuetzenHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="row justify-content-center mb-4">
                <div class="col-lg-10">
                    <div class="card shadow-sm border-0 bg-light">
                        <div class="card-body p-4">
                           <h2 class="card-title text-center mb-4">Wie Sie den Bürgerfonds unterstützen können</h2>
                            <p>
                              Mit einem <strong>regelmäßigen Mitgliedsbeitrag</strong> oder einer einmaligen Spende, ob groß oder klein, leisten Sie einen wertvollen Beitrag für unsere Gemeinschaft.
                              Jeder Euro zählt und kommt dort an, wo er gebraucht wird.
                            </p>
                            <p>
                              Der Bürgerfonds ist damit ein Zeichen für gelebte Nächstenliebe und Zusammenhalt in unserer Gemeinde.
                              Er ergänzt bestehende soziale Angebote und schließt Lücken, wo schnelle Hilfe notwendig ist.
                            </p>
                            <p class="mt-3">
                              💡 <strong>Tipp:</strong> Sie können uns auch unterstützen, indem Sie Mitglied im Bürgerfonds werden.
                              <a href="#" onclick="loadMitgliedHTML()" style="color: #a3c814;">Hier erfahren Sie, wie das geht.</a>
                            </p>
                            <p class="text-center mt-4 fst-italic text-success">
                              „Helfen Sie mit – damit niemand in Waldbrunn allein gelassen wird.“
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-success shadow-sm">
                        <div class="card-body text-center">
                            <h4 class="card-title mb-3 text-success">Bankverbindung</h4>
                            <p class="mb-1"><strong>Empfänger:</strong> Bürgerfonds Waldbrunn e.V.</p>
                            <p class="mb-1"><strong>Bank:</strong> Raiffeisenbank Höchberg eG</p>
                            <p class="mb-1"><strong>IBAN:</strong> DE22 7906 3122 0000 0025 93</p>
                            <p class="mb-1"><strong>BIC:</strong> GENODEF1HBG</p>
                            <p class="mt-3 fst-italic">Auf Wunsch stellen wir Ihnen gerne eine Spendenquittung aus.</p>
                        </div>
                    </div>
                </div>
            </div>
              <div class="text-center mt-4">
                        <img src="bilder/handHerz.jpg" alt="handHerz" class="img-fluid rounded shadow-sm" style="max-width: 45%; height: auto;">
              </div>
        </div>
    `;
  window.scrollTo(0, 0);
}

function loadAnsprechpartnerHTML() {
  document.getElementById("contentDiv").innerHTML = `
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="card shadow-sm border-0 bg-light">
                        <div class="card-body p-4">
                            <h2 class="text-center mb-4">Ansprechpartner für weitere Informationen</h2>
                            <div class="row row-cols-1 row-cols-md-2 g-4">

                                ${[
      {
        name: "Hans Fiederling",
        rolle: "Vorsitzender",
        tel: "09306 - 1880",
        mail: "Hans.Fiederling@Bürgerfonds-Waldbrunn.de",
        icon: "✉️    "
      },
      {
        name: "Ludwig Götzelmann",
        rolle: "Stellv. Vorsitzender",
        tel: "09306 - 1539",
        mail: "Ludwig.Goetzelmann@Bürgerfonds-Waldbrunn.de",
        icon: "✉️    "
      },
      {
        name: "Regina Schneider",
        rolle: "Stellv. Vorsitzende",
        tel: "09306 - 8435",
        mail: "Regina.Schneider@Bürgerfonds-Waldbrunn.de",
        icon: "✉️    "
      },
      {
        name: "Norbert Postberg",
        rolle: "Schriftführer",
        tel: "09306 - 2740",
        mail: "Norbert.Postberg@Bürgerfonds-Waldbrunn.de",
        icon: "✉️    "
      },
      {
        name: "Paula Heller",
        rolle: "Kassiererin",
        tel: "09306 - 8541",
        mail: "",
        icon: ""
      },
      {
        name: "Martina Kronenberger",
        rolle: "Stellv. Kassiererin",
        tel: "09306 - 984573",
        mail: "",
        icon: ""
      }
    ].map(p => `
                                    <div class="col">
                                        <div class="border rounded p-3 h-100 shadow-sm bg-white">
                                            <h5 class="mb-1">${p.name}</h5>
                                            <p class="mb-1"><strong>${p.rolle}</strong></p>
                                            <p class="mb-1">📞 ${p.tel}</p>
                                            <p class="mb-0">${p.icon} <a href="mailto:${p.mail}" style="color: #a3c814; font-size: auto;">${p.mail}</a></p>
                                        </div>
                                    </div>
                                `).join('')}

                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <img src="bilder/GruppenBild.jpg" alt="GruppenBild" class="img-fluid rounded shadow-sm" style="max-width: 100%; height: auto;">
                    </div>
                </div>
            </div>
        </div>
    `;
  window.scrollTo(0, 0);
}

function loadSatzungHTML() {
  document.getElementById("contentDiv").innerHTML = `
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card shadow-sm border-0 bg-light">
            <div class="card-body p-4">
              <h2 class="text-center mb-4">Satzung Bürgerfonds Waldbrunn e. V.</h2>

              <h5>§ 1 Name und Sitz, Eintragung</h5>
              <p>1. Der Name des Vereins lautet: Bürgerfonds Waldbrunn e.V.</p>
              <p>2. Der Sitz des Vereins ist Waldbrunn.</p>
              <p>3. Der Verein soll ins Vereinsregister eingetragen werden.</p>
              <p>4. Das Geschäftsjahr ist das Kalenderjahr.</p>

              <h5 class="mt-4">§ 2 Zweck des Vereins</h5>
              <p>1. Der Verein verfolgt ausschließlich und unmittelbar mildtätige Zwecke im Sinne des Abschnitts Steuerbegünstigte Zwecke" der Abgabenordnung. Zweck des Vereins ist die Unterstützung hilfsbedürftiger Personen innerhalb des Gemeindegebietes. Dies erfolgt zum Einem durch die Unterstützung persönlich bedürftiger Personen, welche gemäß § 53 Nr. 1 Abgabenordnung (AO) infolge ihres körperlichen, geistigen oder seelischen Zustandes auf die Hilfe anderer angewiesen sind, und zum Anderen durch die Unterstützung von Personen, deren wirtschaftliche Lage aus besonderen Gründen zu einer Notlage geworden ist. Die Unterstützung erfolgt freiwillig. Es besteht kein Rechtsanspruch auf Unterstützung durch den Verein.</p>
              <p>2. Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.</p>
              <p>3. Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.</p>

              <h5 class="mt-4">§ 3 Erwerb der Mitgliedschaft</h5>
              <p>1. Mitglied des Vereins kann jede natürliche Person nach Vollendung des 16. Lebensjahres und jede juristische Person werden.</p>
              <p>2. Wer die Mitgliedschaft erwerben will, hat an den Verein ein schriftliches Aufnahmegesuch zu richten.</p>
              <p>3. Über die Ablehnung oder Annahme des Aufnahmegesuches entscheidet der Vorstandsvorsitzende Gegen die Ablehnung des Aufnahmeantrages kann der Bewerber innerhalb eines Monats nach Bekanntgabe der Ablehnung beim Vorstand schriftlich Berufung einlegen. Über die Berufung entscheidet die erweiterte Vorstandschaft (§ 8 Ziff. 1) abschließend.</p>
              <p>4. Ein Aufnahmeanspruch besteht nicht.</p>

              <h5 class="mt-4">§ 4 Beendigung der Mitgliedschaft</h5>
              <p>1. Die Mitgliedschaft endet durch Tod, Ausschluss, Streichung von der Mitgliederliste oder Austritt aus dem Verein.</p>
              <p>2. Der Austritt erfolgt durch schriftliche Erklärung gegenüber dem Vorstand. Der Austritt kann nur zum Jahresende erklärt werden, wobei eine Kündigungsfrist von drei Monaten einzuhalten ist.</p>
              <p>3. Ein Mitglied kann durch Beschluss des Vorstands von der Mitgliederliste gestrichen werden, wenn es mit der Zahlung von Mitgliedsbeiträgen im Rückstand ist. Die Streichung darf erst beschlossen werden, wenn auch nach schriftlicher Mahnung der Zahlungsrückstand nicht innerhalb von drei Monaten ausgeglichen wird. Auf diese Rechtsfolge ist in der Mahmung hinzuweisen. Eine Streichung ist auch möglich, wenn keine Zahlung erfolgt und der Aufenthaltsort (Adresse) des Mitglieds innerhalb von drei Monaten nicht ermittelt werden kann.</p>
              <p>4. Wenn ein Mitglied schuldhaft in grober Weise die Interessen des Vereins verletzt, kann es durch Beschluss des Vorstands aus dem Verein ausgeschlossen werden. Vor der Beschlussfassung muss der Vorstand dem Mitglied Gelegenheit zur Stellungnahme geben, verbunden mit der Aufforderung. sich binnen einer Frist von zwei Wochen schriftlich zu erklären. Der Beschluss des Vorstands ist schriftlich zu begründen und dem Mitglied zuzusenden. Gegen den Beschluss kann das Mitglied Berufung an die erweiterte Vorstandschaft (§ 8 Ziff. 1) einlegen. Die Berufung ist innerhalb eines Monats nach Zugang des Beschlusses beim Vorstandsvorsitzenden einzulegen. Über die Berufung entscheidet die erweiterte Vorstandschaft (§ 8 Ziff. 1) abschließend. Bis zur Entscheidung der erweiterten Vorstandschaft ruhen die Mitgliedschaftsrechte.</p>
              
              <h5 class="mt-4">§ 5 Mitgliedschaftspflichten</h5>
              <p>1. Es ist ein jährlicher Mitgliedschaftsbeitrag zu leisten.</p>
              <p>2. Die Höhe des Mitgliedschaftsbeitrags bestimmt die Mitgliederversammlung durch Beschluss mit einfacher Mehrheit der anwesenden Mitglieder.</p>
              <p>3. Der Beitrag ist zu Beginn des Kalenderjahres im Voraus fällig</p>
              
              <h5 class="mt-4">§ 6 Mitgliedsrechte </h5>
              <p>1. Mitglieder, die geschäftsunfähig sind, haben kein Stimmrecht.</p>
              <p>2. Als Mitglied eines Vereinsorgans können gewählt werden: natürliche Personen, die volljährig und vollgeschäftsfähig" sind.</p>
              <p>3. Sie müssen Vereinsmitglied sein. </p>

              <h5 class="mt-4">§ 7 Organe des Vereins</h5>
              <p>Organe des Vereins sind:</p>
              <ul>
                <li>1. Der Vorstand.</li>
                <li>2. Die Mitgliederversammlung. </li>
                <li>3. Die Vergabekommission.</li>
              </ul>

              <h5 class="mt-4">§ 8 Der Vorstand </h5>
              <p>1. Der erweiterte Vorstand besteht aus dem ersten Vorsitzenden, zwei stellvertretenden Vorsitzenden, dem Kassier und dem Schriftführer. Die stellvertretenden Vorsitzenden können je auch das Vorstandsamt des Kassierers oder des Schriftführers übertragen erhalten. Der Vorstand besteht aus mindestens drei Personen. </p>
              <p>2. Der Verein wird vom ersten Vorsitzenden allein oder den beiden Stellvertretern gemeinsam vertreten. Im Innenverhältnis gilt, dass der Verein nur bei Verhinderung des 1. Vorsitzenden von beiden Stellvertretern gemeinsam vertreten wird. Der Vorsitzende und die beiden Stellvertreter sind Vorstände im Sinne des 26 BGB.</p>
              <p>3. Der Vorstand wird durch Beschluss der Mitgliederversammlung auf die Dauer von drei Jahren gewählt und bestellt. Er bleibt bis zur ordnungsgemäßen Neubestellung des Nachfolgevorstands im Amt.</p>
              <p>4. Das Amt eines Mitglieds des Vorstandes endet außerdem mit seinem Ausscheiden aus dem Verein. mit seiner Abberufung durch die Mitgliederversammlung oder mit seiner Erklärung, dass er das Amt niederlegt.</p>
              <p>5. Dem Vorstand obliegt die gerichtliche und außergerichtliche Vertretung des Vereins nach außen</p>

              <h5 class="mt-4">§9 Die Vergabekommission </h5>
              <p>1. Über die Vergabe von Mitteln (Geld oder Sachwerte) entscheidet die Vergabekommission.</p>
              <p>2. Die Vergabekommission besteht aus fünf Mitgliedern. Diese werden durch Beschluss der Mitgliederversammlung auf die Dauer von drei Jahren gewählt und bestellt. Die Kommission bleibt bis zur ordnungsgemäßen Neubestellung der Nachfolgekommission im Amt.</p>
              <p>3. An der Beschlussfassung über die Vergabe von Mitteln müssen mindestens drei Mitglieder mitwirken. Im Zweifel entscheidet die Mehrheit der Kommissionsmitglieder, ein Rechtsanspruch besteht nicht</p>
              <p>4. Die Mitglieder der Vergabekommission sind zur absoluten Geheimhaltung der ihnen bekannt werdenden Verhältnisse der Hilfsempfänger verpflichtet, dies gilt nicht gegenüber dem Vorstand und den Revisoren.</p>
              <p>5. Die Pflicht zur Verschwiegenheit gilt lebenslang und wirkt auch nach Ausscheiden aus der Vergabekommission bzw. nach Ausscheiden aus dem Verein fort.</p>

              <h5 class="mt-4">§10 Einberufung von Sitzungen </h5>
              <p>1. Sitzungen des Vorstandes sind je nach Bedarf, jedenfalls aber auf Antrag eines Mitglieds des jeweiligen Organs einzuberufen.</p>
              <p>2. Die Einberufung geschieht durch den Vorsitzenden, bei dessen Verhinderung durch einen der Stellvertreter.</p>

              <h5 class="mt-4">§ 11 Revisoren</h5>
              <p>1. Über das abgelaufene Geschäftsjahr muss durch Revisoren eine Kassenprüfung erfolgen. Das Prüfungsergebnis ist der ordentlichen Mitgliederversammlung vorzulegen.</p>
              <p>2. Die Mitgliederversammlung wählt für die Dauer von drei Jahren drei Revisoren.</p>

              <h5 class="mt-4">§ 12 Die ordentliche Mitgliederversammlung</h5>
              <p>1. Mindestens einmal im Jahr, möglichst im ersten Quartal, findet eine ordentliche Mitgliederversammlung statt.</p>
              <p>2. Die Einberufung zu jeder Mitgliederversammlung mit Angabe der Tagesordnung erfolgt mindestens zwei Wochen vorher durch schriftliche Einladung (per Brief oder E-Mail) durch den Vorstand. Die Frist beginnt mit dem auf die Absendung des Einladungsschreibens folgenden Tag. Das Einladungsschreiben gilt dem Mitglied als zugegangen, wenn es an die letzte vom Mitglied dem Verein schriftlich bekannt gegebene Adresse gerichtet ist. Außerdem erfolgt eine öffentliche Bekanntmachung im Waldbrunner Mitteilungsblatt.</p>
              <p>3. Die Tagesordnung setzt der Vorstand fest. Jedes Mitglied kann bis spätestens eine Woche vor einer Mitgliederversammlung beim Vorstand schriftlich eine Ergänzung der Tagesordnung beantragen. Der Versammlungsleiter kann zu Beginn der Mitgliederversammlung die Ergänzung bekannt geben. Über Anträge auf Ergänzung der Tagesordnung, die in der Mitgliederversammlung gestellt werden, beschließt die Mitgliederversammlung.</p>

              <h5 class="mt-4">§ 13 Außerordentliche Mitgliederversammlung und Beschlussfassung außerhalb der Mitgliederversammlung</h5>
              <p>Eine außerordentliche Mitgliederversammlung ist vom Vorstand einzuberufen, wenn das Interesse des Vereins es erfordert (§ 36 BGB) oder wenn ein Fünftel der Mitglieder dies schriftlich unter Angabe des Zweckes und der Gründe beantragt</p>

              <h5 class="mt-4">§ 14 Die Zuständigkeit der Mitgliederversammlung</h5>
              <p>Die Mitgliederversammlung ist für die in dieser Satzung ihr ausdrücklich zur Beschlussfassung übertragenen Vereinsangelegenheiten zuständig. Insbesondere:</p>
              <ul>
                <li>1. Wahl der Vorstandschaft und der Vergabekommission</li>
                <li>2. Entgegennahme des Jahresberichtes des Vorstandes und Entlastung des Vorstandes</li>
                <li>3. Beschlussfassung über Änderung der Satzung und über die Auflösung des Vereins</li>
                <li>4. Festsetzung der Mitgliedsbeiträge</li>
                <li>5. Wahl der Revisoren</li>
                <li>6. Festlegung der Vergaberichtlinien</li>
              </ul>

              <h5 class="mt-4">§ 15 Beschlussfassung der Mitgliederversammlung</h5>
              <p>1. Die Mitgliederversammlung wird vom Vorsitzenden, bei dessen Verhinderung vom einem stellvertretenden Vorstand geleitet. Ist kein Vorstandsmitglied anwesend, bestimmt die Versammlung einen Versammlungsleiter.</p>
              <p>2. Die Mitgliederversammlung ist beschlussfähig ohne Rücksicht auf die Zahl der erschienenen Mitglieder.</p>
              <p>3. Die Art der Abstimmung bestimmt der Versammlungsleiter. Die Abstimmung muss schriftlich durchgeführt werden, wenn ein Drittel der stimmberechtigten Mitglieder dies beantragt. Wird über die Aufnahme neuer Mitglieder oder über den Ausschluss von Mitgliedern abgestimmt, so hat die Abstimmung schriftlich zu erfolgen. Das auszuschließende Mitglied hat bei der Beschlussfassung kein Stimmrecht.</p>
              <p>4. In der Mitgliederversammlung hat jedes Mitglied eine Stimme.</p>
              <p>5. Die Mitgliederversammlung fasst Beschlüsse im Allgemeinen mit einfacher Mehrheit der abgegebenen gültigen Stimmen. Stimmenthaltungen gelten als ungültige Stimmen. Zur Änderung der Satzung ist jedoch eine Mehrheit von zwei Drittel der abgegebenen gültigen Stimmen, zur Auflösung des Vereins oder zur Änderung des Zwecks eine solche von vier Fünfteln erforderlich.</p>
              <p>6. Über Beschlüsse der Mitgliederversammlung ist ein Protokoll zu führen. Dieses ist vom Leiter der Mitgliederversammlung zu unterschreiben.</p>

              <h5 class="mt-4">§ 16 Auflösung des Vereins</h5>
              <p>1. Bei Auflösung des Vereins erfolgt die Liquidation durch den bei der Auflösung bestehenden Vorstand.</p>
              <p>2. Bei Auflösung des Vereins oder bei Wegfall des bisherigen Zweckes fällt das Vereinsvermögen an die Gemeinde Waldbrunn. Diese hat es zu gemeinnützigen Zwecken im Sinne des Vereins zu verwenden.</p>
              <br>
              <p>Waldbrunn, den 2.10.2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function loadGrußwortHTML() {
  document.getElementById("contentDiv").innerHTML = `
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card bg-light border-0 shadow-sm">
            <div class="card-body">
              <h2 class="mb-1">Grußwort von Bürgermeister</h2>
              <h4 class="mb-4">Markus Haberstumpf</h4>
              <div class="row">
                <div class="col-md-4 text-center mb-3">
                  <img src="bilder/Bürgermeister.png" class="img-fluid rounded shadow-sm" alt="Bürgermeister">
                </div>
                <div class="col-md-8">
                  <p><strong>gemeinsam · hilfsbereit · sozial</strong></p>
                  <p>Es gibt viele Begriffe, mit denen man eine Unterstützung unverschuldet in Not geratener Mitbürgerinnen und Mitbürger beschreiben könnte.</p>
                  <p>Entscheidend ist jedoch, dass solchen Worten im Bedarfsfall auch Taten folgen. Aus diesem Grund hat sich der Bürgerfonds Waldbrunn e.V. gegründet.</p>
                  <p>Ein ehrenamtliches und soziales Engagement aus der Mitte unseres Ortes, um Waldbrunnerinnen und Waldbrunnern dann helfen zu können, wenn es angemessen und notwendig ist. Eine solche Initiative verdient Anerkennung und Unterstützung.</p>
                  <p>Tragen auch Sie mit Großherzigkeit und Mitverantwortung dazu bei, ein starkes finanzielles Fundament für unseren Bürgerfonds zu schaffen, um Waldbrunn weiter positiv zu entwickeln.</p>
                  <p class="mb-1">Herzlichen Dank!</p>
                  <p><em>Ihr Erster Bürgermeister Markus Haberstumpf</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function loadMitgliedHTML() {
  document.getElementById("contentDiv").innerHTML = `
<div class="container my-5">
  <div class="text-center mb-4">
    <h2 class="mb-3">Mitglied werden</h2>

    <!-- kurze Einleitung -->
    <p class="lead">
      Sie möchten den Bürgerfonds Waldbrunn e.V. unterstützen und Mitglied werden?  
      Füllen Sie unseren Mitgliedsantrag aus und geben Sie ihn <strong>im Rathaus, in der WABE oder direkt bei einem Vorstandsmitglied</strong> ab.
    </p>

    <!-- etwas mehr Substanz -->
    <p>
      <strong>So funktioniert’s in drei einfachen Schritten:</strong>
    </p>
    <ol class="text-start" style="max-width: 700px; margin: 0 auto; font-size: 1.25rem;">
      <li>Laden Sie den Antrag als PDF herunter.</li>
      <li>Füllen Sie ihn aus – handschriftlich <em>oder</em> digital in Ihrem PDF-Viewer.</li>
      <li>Reichen Sie das ausgefüllte Formular ein: persönlich (Rathaus / WABE / Vorstand) oder per E-Mail als PDF-Anhang.</li>
    </ol>

    <!-- Beitragsinfo -->
    <p class="mt-3">
      Der jährliche Mitgliedsbeitrag beträgt <strong>mindestens 12 €</strong>. Höhere Beträge sind natürlich jederzeit willkommen.
    </p>

    <!-- Download-Button -->
    <a href="pdf/Mitgliedsantrag.pdf" class="btn btn-success btn-lg mt-3" target="_blank">
      📄 Mitgliedsantrag herunterladen
    </a>

    <!-- Kontakt -->
    <p class="mt-4 mb-0">
      Fragen? Schreiben Sie uns einfach eine Mail an&nbsp;
      <a href="mailto:kontakt@buergerfonds-waldbrunn.de">kontakt@buergerfonds-waldbrunn.de</a>
    </p>

    <!-- Datenschutz-Hinweis -->
    <p class="fst-italic small mt-2">
      Ihre Angaben werden vertraulich und gemäß den gesetzlichen Datenschutz­bestimmungen behandelt.
    </p>
  </div>
</div>
  `;
  window.scrollTo(0, 0);
}
