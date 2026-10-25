
import React from "react";
import { Trash2 } from "lucide-react";

function CartItem({ product, quantity }) {
    return (
        <div className="flex gap-4 rounded-xl border border-[#252b35] bg-[#11151d] p-4">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-3">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="min-w-0 flex-1 space-y-2">
                <h3 className="line-clamp-2 text-sm font-semibold text-white">
                    {product.title}
                </h3>

                <p className="text-xs capitalize text-gray-400">
                    {product.category}
                </p>

                <p className="text-sm text-gray-300">
                    Quantity: {quantity}
                </p>

                <p className="font-bold text-emerald-400">
                    ${(product.price * quantity).toFixed(2)}
                </p>
            </div>

            <button
                type="button"
                aria-label="Remove item"
                className="h-fit rounded-lg p-2 text-gray-500 hover:bg-red-500/10 hover:text-red-400"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
}

export default CartItem;
