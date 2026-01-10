import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fffbe6_60%,_#fdf6e3_100%)] text-[#1f1b18]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-10">
        <nav className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[#6f645b]">
          <span className="rounded-full border border-[#d9d1c8] px-4 py-2">
            UW Mechanical Engineering
          </span>
          <Link className="hover:text-[#1f1b18]" href="/class-profile">
            Class Profile
          </Link>
        </nav>

        <div className="mt-20 grid flex-1 items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-8 items-start justify-center pl-0">
            <p className="text-base sm:text-lg lg:text-xl font-semibold uppercase tracking-[0.32em] text-[#8c7f73] pl-2">
              University of Waterloo - Mechanical Engineering
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg text-left ml-[-0.5rem]"
              style={{ fontFamily: 'Quicksand, Nunito, \"Segoe UI Rounded\", Arial, sans-serif' }}
            >
              <span style={{ color: '#2d1e5e' }}>MECH ENG 30</span>
              <br />
              <span style={{ color: '#9575cd' }}>CLASS PROFILE</span>
            </h1>
            <div className="flex flex-wrap gap-5 mt-4">
              <Link
                className="rounded-full border-4 border-[#1f1b18] px-8 py-4 text-base font-bold uppercase tracking-[0.22em] text-[#1f1b18] bg-transparent transition hover:bg-[#f4f2ef] hover:-translate-y-1"
                href="/class-profile"
              >
                View Class Profile
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#e1dbd4] bg-white shadow-[0_24px_48px_rgba(60,50,40,0.08)]">
            <img
              src="/home-placeholder.svg"
              alt="Placeholder preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <footer className="mt-16 text-xs uppercase tracking-[0.3em] text-[#8c7f73]">
          Mechanical Engineering Class of 2030
        </footer>
      </div>
    </div>
  );
}
