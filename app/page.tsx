import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-200
 text-[#1f1b18]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-10">
        <div className="mt-20 grid flex-1 items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-8 items-start justify-center pl-0">
            <div className="flex flex-row gap-2 items-center">
              <img src="/waterloo.png" alt="University of Waterloo Logo" className="h-20 w-auto" />
              <p className="text-base sm:text-lg lg:text-xl font-semibold uppercase tracking-[0.07em] text-[#6f6f6f] pl-2">
                University of Waterloo <br /> Faculty of Engineering
              </p>
            </div>
            <Link href="/mech-eng-31" className="group">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg text-left ml-[-0.5rem]
               transition group-hover:opacity-90"
style={{ fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif' }}






              >
                <span
                  className="block whitespace-nowrap text-[1em] sm:text-[1.05em]
             transition-transform group-hover:-translate-y-0.5"
                  style={{ color: '#2d1e5e' }}
                >
                  MECH ENG ’31 TEST
                </span>

                <span
                  className="block whitespace-nowrap text-[0.95em] sm:text-[1em]
             transition-transform group-hover:-translate-y-0.5"
                  style={{ color: '#9575cd' }}
                >
                  CLASS PROFILES
                </span>
              </h1>
            </Link>
            <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
              <Link
                href="/class-profile"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#244d3a] transition hover:text-[#193b2c]"
              >
                Mech Eng ’30 Profiles
              </Link>
            </div>

          </div>

          {/* UWME Logo */}
          <Link href="/class-profile">
            <div className="cursor-pointer">
              <img
                src="/uwmelogo.png"
                alt="University of Waterloo Mech Eng Logo"
                className="h-full w-full object-contain" 
              />
            </div>
          </Link>

        </div>

        <footer className="mt-16 text-xs uppercase tracking-[0.3em] text-[#8c7f73]">
          Mechanical Engineering Class of 2030 - Logo by Myles Seckler
        </footer>
      </div>
    </div>
  );
}
