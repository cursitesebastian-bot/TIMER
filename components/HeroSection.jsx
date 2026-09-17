"use client";

import { useState } from "react";

export default function HeroSection() {
  const [slide] = useState(1);
  const totalSlides = 10;

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black text-white">
      {/* 1. Background photo */}
      <img
        src="/images/pyramids.jpg"
        alt="The pyramids of Giza at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 2. Darkening gradient so text/nav stay readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

      {/* 3. Giant background typography */}
      <h1
        className="pointer-events-none absolute left-1/2 top-[14%] w-full -translate-x-1/2
                   text-center font-extrabold uppercase leading-none tracking-tight
                   text-white/15 select-none"
        style={{ fontSize: "clamp(4rem, 16vw, 13rem)" }}
      >
        Egypt
      </h1>

      {/* 4. Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-red-500">✳</span> Winzy
        </div>
        <ul className="hidden items-center gap-8 text-sm text-white/90 md:flex">
          <li className="flex items-center gap-1">Stays <Chevron /></li>
          <li className="flex items-center gap-1">Experiences <Chevron /></li>
          <li>Blog</li>
          <li>About</li>
          <li>Become a Host</li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="text-sm text-white/90">Log in</button>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
            Sign up
          </button>
        </div>
      </nav>

      {/* 5. Bottom content block */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-12 md:pb-14">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex gap-10">
              <Stat number="20K+" label="Happy Travellers" />
              <Stat number="2K+" label="Custom Tours" />
              <Stat number="5K+" label="Arranged Stays" />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
                Book Now <span aria-hidden="true">↗</span>
              </button>
              <p className="max-w-xs text-sm text-white/80">
                Book unique stays that bring travelers and locals
                together — your gateway to shared adventures
              </p>
            </div>
          </div>

          <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-52">
            <img
              src="/images/pyramids-thumb.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-2 left-3 flex items-center gap-2 text-xs">
              <span>0{slide}/{totalSlides}</span>
              <div className="h-[2px] w-8 rounded bg-white/40">
                <div
                  className="h-full rounded bg-white"
                  style={{ width: `${(slide / totalSlides) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl font-bold md:text-4xl">{number}</p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
