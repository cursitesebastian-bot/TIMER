"use client";

export default function CollageHero() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-end justify-center overflow-hidden bg-[#8a2f1c] text-[#f4ede0]">
      {/* 1. Background color splash (SVG blob instead of a flat rectangle) */}
      <svg
        className="pointer-events-none absolute -top-10 left-1/2 h-[110%] w-[110%] -translate-x-1/2 opacity-90"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fill="#a8391f"
          d="M420,60 C560,40 700,140 740,280 C780,420 720,560 600,650 C480,740 300,760 180,680 C60,600 20,440 60,300 C100,160 280,80 420,60 Z"
        />
      </svg>

      {/* 2. Torn top edge so the color block reads as a paper layer, not a rectangle */}
      <div
        className="absolute inset-x-0 top-0 h-10 bg-[#f4ede0]"
        style={{
          clipPath:
            "polygon(0% 0%,100% 0%,100% 40%,92% 60%,85% 30%,78% 70%,70% 20%,62% 55%,54% 15%,46% 65%,38% 25%,30% 60%,22% 10%,14% 50%,6% 20%,0% 45%)",
        }}
      />

      {/* 3. Nav */}
      <nav className="absolute inset-x-0 top-6 z-30 flex items-center justify-between px-6 md:px-12">
        <div className="text-sm font-semibold tracking-wide">Winzy</div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-[#f4ede0]/60 px-4 py-1.5 text-xs">
            Log in
          </button>
          <button className="rounded-full bg-[#f4ede0] px-4 py-1.5 text-xs font-medium text-[#3a1a14]">
            Sign up
          </button>
        </div>
      </nav>

      {/* 4. Giant background text — sits BEHIND the cutout */}
      <h1
        className="pointer-events-none absolute left-1/2 top-[20%] z-10 -translate-x-1/2 select-none
                   text-center font-extrabold uppercase leading-[0.85] tracking-tight text-[#f4ede0]"
        style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
      >
        Real
        <br />
        Egypt
      </h1>

      {/* 5. Corner tagline, top right, like "REFRESH YOUR WORLD" */}
      <p className="absolute right-6 top-24 z-30 max-w-[9rem] text-right text-xs font-semibold uppercase leading-snug md:right-12">
        Wander your world
      </p>

      {/* 6. Rotated sticker badges scattered around */}
      <img
        src="/images/badge-est.png"
        alt=""
        className="pointer-events-none absolute left-6 top-1/3 z-30 w-20 -rotate-12 md:left-12 md:w-24"
      />
      <img
        src="/images/badge-explore.png"
        alt=""
        className="pointer-events-none absolute bottom-40 right-6 z-30 w-20 rotate-6 md:right-16 md:w-24"
      />

      {/* small hand-drawn style marks */}
      <span className="pointer-events-none absolute right-10 top-1/2 z-30 text-3xl">✳</span>
      <span className="pointer-events-none absolute left-10 bottom-1/3 z-30 text-2xl">＋</span>

      {/* 7. Subject cutout — sits ABOVE the text, blocking part of it */}
      <img
        src="/images/traveler-cutout.png"
        alt="Traveler exploring Egypt"
        className="pointer-events-none relative z-20 h-[85%] w-auto max-w-none translate-y-2 object-contain"
      />

      {/* 8. Bottom content strip */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-8 md:px-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#f4ede0]/70">Since 2020</p>
          <p className="text-xs uppercase tracking-widest text-[#f4ede0]/70">Egypt</p>
        </div>
        <button className="rounded-full bg-[#f4ede0] px-6 py-3 text-sm font-medium text-[#3a1a14]">
          Book Now ↗
        </button>
      </div>
    </section>
  );
}
