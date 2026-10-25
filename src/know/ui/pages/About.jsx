import React from "react";
import {
  ShoppingBag,
  Heart,
  ShieldCheck,
  Sparkles,
  Truck,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const About = () => {
  const highlights = [
    { icon: Heart, title: "Made for You", text: "A shopping experience that feels personal." },
    { icon: ShieldCheck, title: "Shop with Confidence", text: "A simple and transparent experience." },
    { icon: Sparkles, title: "Everyday Discoveries", text: "Find something you'll love." },
    { icon: Truck, title: "Convenience First", text: "A smoother way to explore and shop." },
  ];

  const messages = [
    "A little joy in every discovery",
    "Your style, your choices",
    "Simple shopping, better experiences",
    "Discover more with SkyMart",
    "Thoughtfully curated, made for you",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b10] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs tracking-wide text-emerald-300">
              <Sparkles size={15} />
              GET TO KNOW US
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              More than shopping.
              <span className="mt-2 block text-emerald-400">
                It's your experience.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Welcome to SkyMart, your space to explore everyday essentials
              and discover things you love. We believe shopping should feel
              simple, enjoyable, and made around you.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              From discovering something new to finding your next favourite,
              SkyMart is here to make your online shopping journey feel
              effortless.
            </p>

            <NavLink
              to="/home/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-[#080b10] transition hover:bg-emerald-300"
            >
              Explore SkyMart
              <ArrowRight size={17} />
            </NavLink>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-[90px]" />

            <div className="relative rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#14241f] to-[#0d1117] p-8 sm:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
                <ShoppingBag size={30} strokeWidth={1.5} />
              </div>

              <p className="mt-10 text-xs tracking-[0.25em] text-emerald-300">
                THE SKYMART PROMISE
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-snug sm:text-4xl">
                Good finds.
                <br />
                Good feelings.
                <br />
                <span className="text-emerald-400">Your kind of shopping.</span>
              </h2>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm text-gray-400">
                  Thoughtfully curated. Made for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.25em] text-emerald-400">
            WHAT MATTERS TO US
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Shopping with a little more heart.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
            We're all about making your experience enjoyable, convenient,
            and easy to navigate.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.07] bg-[#0d1117] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/[0.08] text-emerald-300">
                  <Icon size={22} />
                </div>

                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Moving marquee */}
      <section className="py-16">
        <div className="mb-8 px-5 text-center">
          <p className="text-xs tracking-[0.25em] text-emerald-400">
            THE GOOD WORD
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            The things we want you to feel.
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            A little positivity goes a long way.
          </p>
        </div>

        <div className="group relative overflow-hidden border-y border-white/[0.07] bg-[#0d1117] py-6">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...messages, ...messages].map((message, index) => (
              <div
                key={`${message}-${index}`}
                className="mx-3 flex items-center gap-4 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-6 py-4"
              >
                <Heart
                  size={17}
                  className="shrink-0 fill-emerald-400/20 text-emerald-400"
                />
                <span className="whitespace-nowrap text-sm font-medium text-gray-200">
                  {message}
                </span>
                <span className="ml-3 text-emerald-400">✦</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-600">
          Pause the moving messages by hovering over them.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-r from-emerald-400/[0.09] to-[#0d1117] px-6 py-12 text-center sm:px-12 sm:py-16">
          <Sparkles className="mx-auto text-emerald-300" size={28} />

          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Your next discovery starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-400">
            Come explore, find your favourites, and make SkyMart part of
            your everyday.
          </p>

          <NavLink
            to="/home/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-[#080b10] transition hover:bg-emerald-300"
          >
            Start exploring
            <ArrowRight size={17} />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;