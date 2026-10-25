import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";
import {
  ShoppingBag,
  Search,
  Heart,
  Menu,
  X,
  ArrowUpRight,
  LogOut,
} from "lucide-react";
import { useProduct } from "../../features/Shop/hook/useProduct";
import { removeuser, reset } from "../../features/auth/state/authslice";

function Mainlayout() {
  const [open, setOpen] = useState(false);
  let {navigate,dispatch} = useProduct();

  const links = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/home/shop" },
    {name:"cart",path:"/home/cart"},
    {name:"about",path:"/home/about"}
  ];

  return (
    <div className="min-h-screen bg-[#080b10] text-white">
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080b10]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <NavLink to="/home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300 transition-all duration-500 group-hover:rotate-[-12deg] group-hover:border-emerald-400/50 group-hover:bg-emerald-400/15">
              <ShoppingBag size={19} strokeWidth={1.5} />
            </div>

            <div>
              <h1 className="text-[19px] font-semibold tracking-[0.12em]">
                SkyMart<span className="text-emerald-400">.</span>
              </h1>
              <p className="mt-0.5 text-[9px] tracking-[0.24em] text-gray-500">
                MODERN ESSENTIALS
              </p>
            </div>
          </NavLink>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative py-2 text-[13px] tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-300"
                      : "text-gray-400 hover:text-white"
                      
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-emerald-400 transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            <button
            onClick={()=>navigate("/home/shop")}
              aria-label="Shopping bag"
              className="group relative rounded-full border border-white/10 p-2.5 text-gray-300 transition-all duration-300 hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400 transition-shadow group-hover:shadow-[0_0_8px_#34d399]" />
            </button>

            <button
            onClick={() => {
  dispatch(removeuser());
  navigate("/", { replace: true });
}}
              aria-label="Shopping bag"
              className="group relative rounded-full border border-white/10 p-2.5 text-gray-300 transition-all duration-300 hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <LogOut size={18} strokeWidth={1.6} />
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400 transition-shadow group-hover:shadow-[0_0_8px_#34d399]" />
            </button>

            

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="ml-1 rounded-full border border-white/10 p-2.5 text-gray-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-300 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav className="min-h-0">
            <div className="space-y-1 border-t border-white/[0.06] px-5 py-4">
              {links.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-400/[0.07] text-emerald-300"
                        : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                    }`
                  }
                >
                  {link.name}
                  <ArrowUpRight size={15} />
                </NavLink>
              ))}

              <p className="px-4 pt-3 text-[10px] tracking-[0.18em] text-gray-600">
                THOUGHTFULLY CURATED. MADE FOR YOU.
              </p>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;