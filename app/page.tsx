import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-[#1f1b18]"
      style={{ backgroundImage: 'url("/BACKGROUND.jpg")' }}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-12">

        {/* Main content */}
        <main className="flex flex-1 flex-col justify-between py-8 sm:py-10 lg:py-12">

          {/* Top row */}
          <div className="flex items-start justify-between gap-6">

            {/* Waterloo branding */}
            <div className="flex min-w-0 items-center gap-2">
              <img
                src="/waterloo.png"
                alt="University of Waterloo Logo"
                className="h-12 w-auto sm:h-16 lg:h-20"
              />

              <p className="text-xs font-semibold uppercase leading-tight tracking-[0.07em] text-white sm:text-sm lg:text-lg">
                University of Waterloo
                <br />
                Faculty of Engineering
              </p>
            </div>

            {/* UWME Logo */}
            <Link
              href="/class-profile"
              className="shrink-0 transition-opacity hover:opacity-80"
            >
              <div className="text-center">
                <img
                  src="/uwmelogo.png"
                  alt="University of Waterloo Mech Eng Logo"
                  className="h-24 w-28 object-contain sm:h-32 sm:w-36 lg:h-40 lg:w-48"
                />

                <p className="mt-1 text-[10px] font-bold text-black sm:text-xs">
                  Temporary logo — new logo coming soon
                </p>
              </div>
            </Link>
          </div>

          {/* Center content */}
          <div className="flex flex-col items-start py-12 sm:py-16 lg:py-20">

            <Link href="/mech-eng-31" className="group">
              <h1
                className="text-left font-extrabold tracking-tight drop-shadow-lg"
                style={{
                  fontFamily:
                    '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                <span
                  className="block text-4xl transition-transform group-hover:-translate-y-0.5 sm:text-6xl lg:text-7xl"
                  style={{ color: "#2d1e5e" }}
                >
                  MECH ENG ’31
                </span>

                <span
                  className="block text-3xl transition-transform group-hover:-translate-y-0.5 sm:text-5xl lg:text-6xl"
                  style={{ color: "#9575cd" }}
                >
                  CLASS PROFILES
                </span>
              </h1>
            </Link>

            <Link
              href="/class-profile"
              className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F0E8] transition hover:text-white sm:mt-8 sm:text-sm sm:tracking-[0.2em]"
            >
              Mech Eng ’30 Profiles
            </Link>
          </div>

        </main>

        {/* Footer */}
        <footer className="pb-6 text-[9px] uppercase tracking-[0.2em] text-[#8c7f73] sm:pb-8 sm:text-xs sm:tracking-[0.3em]">
          <p>
            Mechanical Engineering Class of 2030 - Logo by Myles Seckler
          </p>

          <p className="mt-2 normal-case tracking-normal">
            Background photo by{" "}
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=86543830"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-70"
            >
              Maplefirst
            </a>{" "}
            — Own work,{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-70"
            >
              CC BY-SA 4.0
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}