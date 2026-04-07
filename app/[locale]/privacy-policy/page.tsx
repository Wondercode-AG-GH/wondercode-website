import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";

  const title = isGerman
    ? "Datenschutzerklärung | Wondercode"
    : "Privacy Policy | Wondercode";

  return {
    title,
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        en: "/en/privacy-policy",
        de: "/de/privacy-policy",
      },
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isGerman = locale === "de";

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00CC66]/30">
      <div className="pt-18 pb-16 px-6 container mx-auto max-w-4xl">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Link
            href={`/${locale}`}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/Wondercode_logo.png"
              alt="Wondercode Logo"
              width={280}
              height={42}
              className="w-[220px] sm:w-[260px] h-auto drop-shadow-[0_0_15px_rgba(0,204,102,0.3)]"
              priority
            />
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white border-b border-white/10 pb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose-static max-w-none text-gray-300">
          <p>
            <em>Stand: April 2026</em>
          </p>

          <h2>1. Verantwortliche Stelle</h2>
          <p>
            Wondercode AG
            <br />
            Auf der Mauer 7<br />
            8001 Zürich
            <br />
            Schweiz
            <br />
            E-Mail: <a href="mailto:info@wondercode.ch">info@wondercode.ch</a>
          </p>
          <p>
            Verantwortlich für die Datenbearbeitung ist Bayram Sahin,
            Geschäftsführer.
          </p>

          <h2>2. Allgemeines</h2>
          <p>
            Diese Datenschutzerklärung erläutert, wie die Wondercode AG
            (nachfolgend «wir» oder «Wondercode») Personendaten im Zusammenhang
            mit der Website wondercode.ch erhebt, bearbeitet und nutzt. Sie
            richtet sich nach dem Schweizer Bundesgesetz über den Datenschutz
            (DSG) und der Verordnung über den Datenschutz (DSV).
          </p>
          <p>
            Unter Personendaten verstehen wir alle Angaben, die sich auf eine
            bestimmte oder bestimmbare natürliche Person beziehen.
          </p>

          <h2>3. Welche Daten wir erheben</h2>

          <h3>3.1 Beim Besuch unserer Website</h3>
          <p>
            Beim Aufruf unserer Website werden automatisch technische Daten
            erfasst, die dein Browser an unseren Server übermittelt. Dazu
            gehören:
          </p>
          <ul>
            <li>
              IP-Adresse (anonymisiert oder gekürzt, soweit technisch möglich)
            </li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL (die zuvor besuchte Seite)</li>
          </ul>
          <p>
            Diese Daten sind technisch notwendig, um die Website korrekt
            auszuliefern, und werden nicht mit anderen Datenquellen
            zusammengeführt.
          </p>

          <h3>3.2 Terminbuchung</h3>
          <p>
            Unsere Website bietet die Möglichkeit, über Google Calendar
            Appointment Scheduling einen Termin mit uns zu buchen. Dabei werden
            die von dir eingegebenen Daten (Name, E-Mail-Adresse, gegebenenfalls
            Telefonnummer und Nachricht) direkt an Google Ireland Ltd.
            übermittelt und dort verarbeitet. Die Buchung erfolgt über die
            Infrastruktur von Google. Es gelten zusätzlich die
            Datenschutzhinweise von Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>

          <h2>4. Zweck der Datenbearbeitung</h2>
          <p>Wir bearbeiten Personendaten für folgende Zwecke:</p>
          <ul>
            <li>Bereitstellung und Betrieb der Website</li>
            <li>Bearbeitung von Terminanfragen und Kontaktaufnahmen</li>
            <li>Gewährleistung der IT-Sicherheit und des Betriebs</li>
          </ul>

          <h2>5. Rechtsgrundlage</h2>
          <p>
            Die Bearbeitung erfolgt gestützt auf berechtigte Interessen (Art. 31
            Abs. 1 DSG) im Rahmen unserer Geschäftstätigkeit, insbesondere zur
            Bereitstellung unserer Website und zur Kommunikation mit
            Interessierten und Kunden. Soweit du uns über die Terminbuchung
            kontaktierst hat, bearbeiten wir deine Daten zur Durchführung
            vorvertraglicher Massnahmen.
          </p>

          <h2>6. Hosting und Infrastruktur</h2>

          <h3>6.1 Vercel</h3>
          <p>
            Unsere Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut,
            CA 91789, USA) gehostet. Beim Besuch der Website werden technische
            Daten (vgl. Abschnitt 3.1) an Server von Vercel übermittelt. Dies
            kann eine Datenübermittlung in die USA beinhalten. Vercel unterzieht
            sich dem EU-U.S. Data Privacy Framework. Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com/legal/privacy-policy
            </a>
          </p>

          <h3>6.2 Replit</h3>
          <p>
            Für bestimmte Entwicklungs- und Testumgebungen nutzen wir Dienste
            von Replit Inc. (San Francisco, USA). Dabei können technische Daten
            an Server in den USA übermittelt werden. Weitere Informationen:{" "}
            <a
              href="https://replit.com/site/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://replit.com/site/privacy
            </a>
          </p>

          <h2>7. Datenübermittlung ins Ausland</h2>
          <p>
            Durch den Einsatz von Vercel, Replit und Google Calendar Appointment
            Scheduling werden Personendaten in die USA übermittelt. Die USA
            verfügen nicht über ein Datenschutzniveau, das dem Schweizer Recht
            gleichwertig ist. Wir stellen den Schutz der übermittelten Daten
            durch geeignete Garantien sicher, insbesondere durch die Verwendung
            von Anbietern, die unter dem EU-U.S. Data Privacy Framework
            zertifiziert sind oder die Standardvertragsklauseln (SCC)
            abgeschlossen haben.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Unsere Website setzt aktuell keine eigenen Cookies ein.
            Drittanbieter (z.B. Google im Rahmen der Terminbuchung) können
            eigene Cookies setzen. Näheres dazu findest du in den jeweiligen
            Datenschutzhinweisen der Anbieter.
          </p>

          <h2>9. Analysetools</h2>
          <p>Wir setzen aktuell keine Web-Analyse-Tools ein.</p>

          <h2>10. Deine Rechte</h2>
          <p>
            Du hast das Recht, jederzeit Auskunft über die von uns bearbeiteten
            Personendaten zu verlangen. Darüber hinaus kannst du die
            Berichtigung, Löschung oder Einschränkung der Bearbeitung deiner
            Daten verlangen und der Datenbearbeitung widersprechen, soweit
            gesetzlich vorgesehen.
          </p>
          <p>Richte Anfragen bitte schriftlich oder per E-Mail an:</p>
          <p>
            Wondercode AG
            <br />
            Auf der Mauer 7<br />
            8001 Zürich
            <br />
            <a href="mailto:info@wondercode.ch">info@wondercode.ch</a>
          </p>
          <p>
            Solltest du der Ansicht sein, dass die Bearbeitung deiner
            Personendaten gegen das Datenschutzrecht verstösst, kannst du dich
            beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
            (EDÖB) beschweren:{" "}
            <a
              href="https://www.edoeb.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.edoeb.admin.ch
            </a>
          </p>

          <h2>11. Aufbewahrung</h2>
          <p>
            Wir bewahren Personendaten nur so lange auf, wie es für die
            Erfüllung der in dieser Datenschutzerklärung beschriebenen Zwecke
            erforderlich ist oder gesetzliche Aufbewahrungspflichten dies
            verlangen.
          </p>

          <h2>12. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung jederzeit
            anzupassen. Die jeweils aktuelle Fassung ist auf dieser Seite
            abrufbar. Wir empfehlen, die Datenschutzerklärung regelmäßig zu
            konsultieren.
          </p>
        </div>
      </div>
    </main>
  );
}
