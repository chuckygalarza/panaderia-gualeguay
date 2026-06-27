import Image from "next/image";

const products = [
  {
    name: "Pan Criollo",
    description: "El clásico de todos los días. Corteza dorada y miga suave.",
    image:
      "https://images.unsplash.com/photo-1549931319-a5457534679f?w=600&q=80",
  },
  {
    name: "Facturas",
    description:
      "Vigilantes, cañoncitos, sacramentos y más. La merienda de siempre.",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e00548442?w=600&q=80",
  },
  {
    name: "Medialunas",
    description:
      "Hojaldradas y suaves. De manteca o grasa, horneadas al amanecer.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
  },
  {
    name: "Bizcochos",
    description:
      "Salados, ideales para el mate de cada tarde. Crujientes y sabrosos.",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
  },
  {
    name: "Pan de Campo",
    description: "Horneado en horno de barro. Sabor ahumado y corteza rústica.",
    image:
      "https://images.unsplash.com/photo-1585478259715-87668ddead8c?w=600&q=80",
  },
  {
    name: "Tortas y Pasteles",
    description:
      "Tortas caseras, pastafrola, chajá y más. El postre de la abuela.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-warm-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-bakery-800 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todo lo que horneamos con amor, día a día, para vos
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-bakery-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
