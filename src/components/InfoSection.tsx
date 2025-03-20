// src/components/ChiSiamoSection.tsx
export default function InfoSection() {
    return (
      <section id="info" className="bg-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl text-black font-fugaz">INFO</h2>
          <p className="mt-4 text-2xl text-gray-900 max-w-2xl mx-auto">
            Per <span className="font-bold">prenotare</span> questo spazio invia un <span className="font-bold">messaggio</span> {" "}
            <a href="https://wa.me/393717665575" target="_blank" className="text-blue-600 hover:underline">
              WhatsApp
            </a>{" "} o {" "}
            <a href="sms:+393717665575" className="text-blue-600 hover:underline">
              SMS
            </a>{" "} al numero {" "}
            <a href="https://wa.me/393717665575" target="_blank" className="text-blue-600 hover:underline">
             +39 371 766 5575
            </a><br/><br/>
            Altrimenti invia una <span className="font-bold">mail</span> all'indirizzo {" "}
            <a href="mailto:spazioaiciompi@gmail.com" className="text-blue-600 hover:underline">
              spazioaiciompi@gmail.com
            </a><br/><br/>
            La <span className="font-bold">stanza principale</span> ha una superficie di <span className="font-bold">40mq</span> <br/><br/> Lo spazio dispone inoltre dei <span className="font-bold">servizi</span> e di un ulteriore <span className="font-bold">spazio separato</span> per la preparazione di cibi freddi e bevande <br/><br/>
            Disponibile per la prenotazione <span className="font-bold">tutti i giorni</span> della settimana <br/><br/>
            L'orario di utilizzo è dalle <span className="font-bold">10:00</span> alle <span className="font-bold">23:00</span>
          </p>
        </div>
      </section>
    );
  }
  