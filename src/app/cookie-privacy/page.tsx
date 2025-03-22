"use client";

export default function CookiePrivacyPolicy() {
  return (
    <section className="bg-white font-poppins text-gray-900 py-16 px-6 max-w-3xl mx-auto pt-30">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#2A7FAA]">Privacy & Cookie Policy</h1>

      {/* SEZIONE PRIVACY POLICY */}
      <h2 className="text-2xl font-bold mt-8 text-[#D48B5C]">\ud83d\udd39 Privacy Policy</h2>
      <p className="text-lg mb-4">
        Questa pagina descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati <span className="text-[#2A7FAA]">(GDPR - Regolamento UE 2016/679)</span>.
      </p>

      <h3 className="text-xl font-bold mt-6 text-[#F5C97F]">Quali dati raccogliamo?</h3>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>Dati forniti volontariamente (es. email, nome quando ci contatti).</li>
        <li>Dati di navigazione (es. indirizzi IP, dati analitici, cookies).</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-[#7A956B]">Perché raccogliamo questi dati?</h3>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li>Rispondere a richieste e contatti.</li>
        <li>Analizzare le visite al sito per migliorarne il funzionamento.</li>
        <li>Integrare servizi esterni come Google Maps.</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-[#D48B5C]">Google Maps e dati di terze parti</h3>
      <p className="text-lg mb-4">
        Questo sito utilizza <span className="text-[#2A7FAA] font-bold">Google Maps</span> per mostrare la posizione della sede. Google potrebbe raccogliere informazioni sugli utenti che interagiscono con la mappa, tra cui **indirizzi IP e dati di localizzazione**.
        <a href="https://policies.google.com/privacy" target="_blank" className="text-[#2A7FAA] hover:underline"> Privacy Policy di Google</a>.
      </p>

      <h3 className="text-xl font-bold mt-6 text-[#F5C97F]">Diritti degli utenti</h3>
      <p className="text-lg mb-4">
        Ai sensi del GDPR, hai il diritto di accedere, modificare o cancellare i tuoi dati. Per richieste, contattaci a <a href="mailto:spazioaiciompi@gmail.com" className="text-[#2A7FAA] hover:underline">spazioaiciompi@gmail.com</a>.
      </p>

      {/* SEZIONE COOKIE POLICY */}
      <h2 className="text-2xl font-bold mt-10 text-[#D48B5C]">\ud83d\udd39 Cookie Policy</h2>
      <p className="text-lg mb-4">
        Questo sito utilizza <span className="text-[#2A7FAA] font-bold">cookie</span> per migliorare l esperienza di navigazione e per raccogliere dati statistici.
      </p>

      <h3 className="text-xl font-bold mt-6 text-[#7A956B]">Tipologie di cookie utilizzati</h3>
      <ul className="list-disc pl-6 text-lg mb-4">
        <li><strong>Cookie essenziali:</strong> necessari per il funzionamento del sito.</li>
        <li><strong>Cookie analitici:</strong> raccolgono dati anonimi sulle visite (es. Google Analytics).</li>
        <li><strong>Cookie di terze parti:</strong> usati da servizi esterni come Google Maps.</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-[#F5C97F]">Come gestire i cookie?</h3>
      <p className="text-lg mb-4">
        Puoi disabilitare i cookie dalle impostazioni del tuo browser:
      </p>
      <ul className="list-disc pl-6 text-lg">
        <li>
          <a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" className="text-[#2A7FAA] hover:underline">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" className="text-[#2A7FAA] hover:underline">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/it-it/HT201265" target="_blank" className="text-[#2A7FAA] hover:underline">
            Safari
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-6 text-[#D48B5C]">Contatti</h3>
      <p className="text-lg">
        Per domande sulla Privacy o sui Cookie, scrivici a <a href="mailto:spazioaiciompi@gmail.com" className="text-[#2A7FAA] hover:underline">spazioaiciompi@gmail.com</a>
      </p>
    </section>
  );
}
