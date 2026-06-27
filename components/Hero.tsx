import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80"
        alt="Pan artesanal recién horneado"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
          Panadería Gualeguay
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10">
          El sabor de lo artesanal, horneado con tradición todos los días en el
          corazón de Gualeguay
        </p>
        <a
          href="#products"
          className="inline-block bg-bakery-600 hover:bg-bakery-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Conocé nuestros productos
        </a>
      </div>
    </section>
  );
}
