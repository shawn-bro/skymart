import react from 'react'
import CartHeader from '../components/CartHeader';
import CartItemList from '../components/CartItemList';
import OrderSummary from '../components/OrderSummary';
import { useSelector } from 'react-redux';



const Cartpage = () => {
  const cart = useSelector((store) => store.cart.cart);

    
  return (
    <div className="min-h-screen bg-[#080b10] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:py-12">
        <CartHeader data={cart}/>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <CartItemList  products = {cart}/>
          </div>
          <div className="lg:col-span-1">
            <OrderSummary products = {cart}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
