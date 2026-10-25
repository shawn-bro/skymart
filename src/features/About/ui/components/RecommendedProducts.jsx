
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";

const recommendations = [
  {
    id: 1,
    name: "Everyday Essentials",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 2,
    name: "Classic Streetwear",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500",
  },
];

const RecommendedProducts = () => {
  let navigate = useNavigate();
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-400">
            Curated for you
          </p>
          <h2 className="mt-2 text-xl font-semibold">
            You may also like
          </h2>
        </div>

        <a
          onClick={()=>navigate("/home/shop")}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-emerald-400 cursor-pointer"
        >
          View all <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {recommendations.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-3 transition hover:border-emerald-400/30"
          >
            <div className="aspect-square overflow-hidden rounded-xl bg-[#161b22]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-sm font-medium">{product.name}</h3>

            <p className="mt-2 text-sm font-semibold text-emerald-400">
              {product.price}
            </p>

            <button className="mt-4 w-full rounded-lg border border-white/10 py-2.5 text-sm transition hover:border-emerald-400 hover:text-emerald-400">
              View Product
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
