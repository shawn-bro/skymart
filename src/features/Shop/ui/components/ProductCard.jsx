import react, { useState } from "react";
import { usecart } from "../../../About/hook/useCart";


function ProductCard({ product, onAddToCart }) {
  let [isadded,setisadded] = useState(false);
  const {addtocart} = usecart();

  const {
    id,
    title,
    brand,
    category,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    thumbnail,
  } = product;

const discountedPrice = (
    price - (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] text-white transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5">

      {/* Product Image */}
      <div className="relative flex h-52 items-center justify-center bg-[#0b0f17] p-5">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
          {category}
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-red-500/15 px-2.5 py-1 text-xs font-semibold text-red-400">
          -{discountPercentage}%
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            {brand || category}
          </p>

          <h2 className="mt-1 line-clamp-1 text-lg font-semibold">
            {title}
          </h2>

          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-400">
            {description}
          </p>
        </div>

        {/* Rating and Stock */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-amber-400">
            ★ {rating}
          </span>

          <span
            className={
              stock > 0
                ? "text-emerald-400"
                : "text-red-400"
            }
          >
            {availabilityStatus}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            ${discountedPrice}
          </span>

          <span className="text-sm text-gray-500 line-through">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={()=>{
          addtocart(product)
          setisadded(true)
          }}
          type="button"
          disabled={isadded || (stock <= 0)}
          className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
        >
          {stock < 0 ? "out of stock" : isadded? "added to cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;