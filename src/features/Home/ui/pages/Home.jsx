import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Heart,
  ShieldCheck,
  Truck,
  Clock,
  Star,
} from "lucide-react";

const Home = () => {
  const { login } = useSelector((store) => store.auth);

  const username =
    login?.user?.name 

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b10] text-white">
      {/* Welcome Section */}
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="mb-8 flex items-center gap-2 text-sm text-emerald-300">
          <Sparkles size={16} />
          <span>Your personal shopping space</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium tracking-wide text-gray-400">
  WELCOME BACK,
 <span className="text-emerald-400">
  {username?.toUpperCase() || "THERE"}
</span>
</p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Good things are
              <span className="block text-emerald-400">
                waiting for you.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              Take a moment for yourself. Discover things you'll love,
              find your next favourite, and make every shopping experience
              feel a little more special.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/home/shop"
                className="inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-[#080b10] transition hover:bg-emerald-300"
              >
                Explore SkyMart
                <ArrowRight size={18} />
              </NavLink>

              <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] px-5 py-3.5 text-sm text-gray-300">
                <Heart size={17} className="text-emerald-400" />
                Made for your style
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#080b10] bg-emerald-400/20 text-xs text-emerald-300">
                  <Heart size={15} />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#080b10] bg-sky-400/20 text-xs text-sky-300">
                  <Star size={15} />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#080b10] bg-purple-400/20 text-xs text-purple-300">
                  <Sparkles size={15} />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                A little inspiration goes a long way.
              </p>
            </div>
          </div>

          {/* Decorative Hero Panel */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-emerald-400/[0.06] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#14241f] via-[#101820] to-[#0d1117] p-7 sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-emerald-400/10" />
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-emerald-400/10" />

              <div className="relative flex min-h-[300px] flex-col justify-between sm:min-h-[350px]">
                <div className="flex items-center justify-between">
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] p-3 text-emerald-300">
                    <ShoppingBag size={24} />
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.18em] text-gray-400">
                    YOUR SPACE
                  </span>
                </div>

                <div className="py-10">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-emerald-300">
                    A better way to shop
                  </p>

                  <h2 className="max-w-sm text-3xl font-medium leading-tight sm:text-4xl">
                    Find joy in the little things.
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                    Your next great find is only a few clicks away.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="text-xs text-gray-500">
                    Thoughtfully curated for you
                  </span>
                  <Sparkles size={18} className="text-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Experience Highlights */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
            The SkyMart experience
          </p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Shopping, made more enjoyable.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Less hassle, more discovery. Enjoy a shopping experience designed
            around what matters to you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Discover something new",
              description:
                "Explore at your own pace and find something that catches your eye.",
            },
            {
              icon: ShieldCheck,
              title: "Shop with confidence",
              description:
                "Enjoy a clear, simple shopping experience from start to finish.",
            },
            {
              icon: Heart,
              title: "Make it yours",
              description:
                "Build your own shopping journey around the things you love.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#0d1117] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07] text-emerald-300 transition group-hover:bg-emerald-400/[0.12]">
                  <Icon size={21} />
                </div>

                <h3 className="text-base font-medium">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-[1440px] px-5 pb-12 pt-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-emerald-400/15 bg-gradient-to-r from-emerald-400/[0.08] to-transparent p-7 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              Ready when you are
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Your next discovery starts here.
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              Take a look around and enjoy the experience.
            </p>
          </div>

          <NavLink
            to="/home/shop"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#080b10] transition hover:bg-emerald-300"
          >
            Start exploring
            <ArrowRight size={17} />
          </NavLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-5 py-6 text-center sm:px-8">
        <p className="text-xs tracking-wide text-gray-500">
          SkyMart <span className="text-emerald-400">.</span> Thoughtfully
          curated. Made for you.
        </p>
      </footer>
    </div>
  );
};

export default Home;