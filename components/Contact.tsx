import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-warm-dark/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-bakery-800 mb-4">
          Contactanos
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          Hace tu pedido por WhatsApp o pasate por el local. Te esperamos.
        </p>
        <a
          href="https://wa.me/5493456000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}
