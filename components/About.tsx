import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555507036-ab1f4038025a?w=800&q=80"
            alt="Panadero artesanal trabajando"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl font-bold text-bakery-800 mb-6">
            Hechos con amor, desde Gualeguay
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            En Panadería Gualeguay honramos la tradición panadera de nuestro
            pueblo. Cada mañana, antes de que salga el sol, nuestras manos
            artesanas amasan con dedicación los mejores ingredientes para llevar
            a tu mesa el pan de cada día.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Usamos harinas de la región, fermentación lenta y recetas que pasan
            de generación en generación. Acá no hay atajos: solo el verdadero
            sabor a pan de pueblo.
          </p>
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-bakery-600">
                +50
              </p>
              <p className="text-gray-600 text-sm">años de tradición</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-bakery-600">
                +30
              </p>
              <p className="text-gray-600 text-sm">variedades de pan</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-bakery-600">
                100%
              </p>
              <p className="text-gray-600 text-sm">artesanal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
