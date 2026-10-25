
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { decrementquntity, incrementquantity, removecart } from "../../state/Cartslice";



const CartItem = ({product}) => {
  let disptach = useDispatch();
  

  return (
    <div className="flex flex-col gap-5 border-b border-white/10 py-6 sm:flex-row sm:items-center">
      <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-[#161b22] sm:h-28 sm:w-28">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-400">
            {product.title}
          </p>

          <h3 className="mt-2 text-base font-semibold">{product.name}</h3>

          <p className="mt-1 text-sm text-gray-500">{product.variant}</p>

          <button 
          onClick={()=>disptach(removecart(product))}
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-500 transition hover:text-red-400">
            <Trash2 size={13} />
            Remove
          </button>
        </div>

        <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
          <div className="flex items-center rounded-lg border border-white/10 bg-[#0b0f17]">
            <button 
            disabled={product.quantity === 0}
            onClick={()=>disptach(decrementquntity(product))}
            className="p-2.5 text-gray-400 hover:text-white">
              <Minus size={14} />
            </button>

            <span className="min-w-8 text-center text-sm">{product.quantity}</span>

            <button 
            disabled={product .quantity == 10}
            onClick={()=>disptach(incrementquantity(product))}
            className="p-2.5 text-gray-400 hover:text-white">
              <Plus size={14} />
            </button>
          </div>

          <p className="text-lg font-semibold">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
