
import { ArrowRight, ShieldCheck, Tag, Truck } from "lucide-react";
import { useNavigate } from "react-router";
import { clearcart } from "../../state/Cartslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const OrderSummary = ({products}) => {
  
  
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let discount = products.reduce((sum,item)=>sum + item.discountedPrice,0);
let grandtotal = products.reduce((sum,data)=>sum+data.quantity*data.total,0).toFixed(2);





  return (
    <aside className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 sm:p-7 lg:sticky lg:top-8">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <p className="mt-2 text-sm text-gray-500">
        Review your order before checkout.
      </p>

      <div className="mt-7 flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-[#080b10] px-3">
          <Tag size={16} className="text-gray-500" />
          <span className="text-sm text-gray-500">Promo code</span>
        </div>

        <button className="rounded-xl border border-emerald-400/30 px-4 text-sm font-medium text-emerald-400 transition hover:bg-emerald-400/10">
          Apply
        </button>
      </div>

      <div className="mt-7 space-y-4 border-b border-white/10 pb-6 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span className="text-white">₹{grandtotal}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Shipping</span>
          <span className="text-emerald-400">Free</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Discount</span>
          <span className="text-emerald-400">−₹{discount}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-medium">Total</span>
        <div className="text-right">
          <p className="text-2xl font-bold tracking-tight">₹{grandtotal}</p>
          <p className="mt-1 text-xs text-gray-500">Including applicable taxes</p>
        </div>
      </div>

      <button 
      disabled={products.length === 0}
      onClick={() => {
    dispatch(clearcart());
    navigate("/home");
toast.success("placed order succesfully");
  }}
      className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-4 font-semibold text-[#080b10] transition hover:bg-emerald-300">
        Proceed to Checkout
        <ArrowRight size={18} />
      </button>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
        <ShieldCheck size={15} />
        Secure checkout
      </div>

      <div className="mt-6 rounded-xl border border-white/5 bg-[#111827] p-4">
        <div className="flex items-center gap-3">
          <Truck size={20} className="text-emerald-400" />
          <div>
            <p className="text-sm font-medium">Free delivery</p>
            <p className="mt-1 text-xs text-gray-500">
              On this order
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
