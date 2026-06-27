import { MapPin, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-bakery-800 text-center mb-14">
          Encontranos
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-bakery-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-bakery-800">
                  Dirección
                </h3>
                <p className="text-gray-600">
                  Calle Principal 123
                  <br />
                  Gualeguay, Entre Ríos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-bakery-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-bakery-800">
                  Horarios
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>Lunes a sábados: 7:00 – 20:00</p>
                  <p>Domingos: 8:00 – 13:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-72 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26772.861560956352!2d-58.5135!3d-33.0093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b3b2f0b631fff7%3A0x9c7d3c0b8e1c7f8f!2sGualeguay%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Croissant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
