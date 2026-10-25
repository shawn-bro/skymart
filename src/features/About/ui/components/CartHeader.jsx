
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";

const CartHeader = ({data}) => {
  let navigate = useNavigate();
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <span>Shop</span>
          <span>/</span>
          <span className="text-emerald-400">Shopping Cart</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Your Cart
          <span className="ml-3 text-sm font-medium text-gray-500">
            ({data.length} items)
          </span>
        </h1>

        <p className="mt-3 text-sm text-gray-400">
          Your favorites are just one step away.
        </p>
      </div>

      <a
        onClick={()=>navigate("/home/shop")}
        className="inline-flex w-fit items-center gap-2 text-sm text-gray-300 transition hover:text-emerald-400 cursor-pointer"
      >
        <ArrowLeft size={16} />
        Continue Shopping
      </a>
    </header>
  );
};

export default CartHeader;
