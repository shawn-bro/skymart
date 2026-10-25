
import CartItem from "./CartItem";


const CartItemList = ({products}) => {
    

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0d1117] px-5 sm:px-7">
      <div className="flex items-center justify-between border-b border-white/10 py-5">
        <h2 className="font-semibold">Cart Items</h2>
        <span className="text-xs text-gray-500">Price</span>
      </div>

      {products.map((product) => (
        <CartItem key={product.id} product = {product} />
      ))}

      <div className="flex items-center gap-2 py-5 text-xs text-gray-500">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Free shipping available on eligible orders
      </div>
    </section>
  );
};

export default CartItemList;
