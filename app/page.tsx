
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-[#1f1b18]"
      style={{ backgroundImage: 'url("/BACKGROUND.jpg")' }}
    >
      <div className="flex min-h-screen w-full flex-col px-[4vw] sm:px-[5vw]">

        {/* Main content */}
        <main className="flex flex-1 flex-col justify-start py-[3vh]">

          {/* Top row */}
          <div className="flex w-full items-start justify-between gap-3">

            {/* Waterloo branding — top left */}
            <div className="flex min-w-0 items-center gap-[1vw]">
              <img
                src="/waterloo.png"
                alt="University of Waterloo Logo"
                className="h-[clamp(2.5rem,6vw,5rem)] w-auto shrink-0"
              />

              <p className="text-[clamp(0.55rem,1.2vw,1.1rem)] font-semibold uppercase leading-tight tracking-[0.07em] text-white">
                University of Waterloo
                <br />
                Faculty of Engineering
              </p>
            </div>

            {/* UWME Logo — top right */}
            <Link
              href="/class-profile"
              className="shrink-0 text-center transition-opacity hover:opacity-80"
            >
              <img
                src="/uwmelogo.png"
                alt="University of Waterloo Mech Eng Logo"
                className="h-[clamp(4rem,10vw,10rem)] w-[clamp(4.5rem,12vw,12rem)] object-contain"
              />

              <p className="mt-1 text-[clamp(0.45rem,0.8vw,0.75rem)] font-bold text-black">
                Temporary logo — new logo coming soon
              </p>
            </Link>
          </div>

          {/* Main heading */}
          <div className="flex flex-col items-start -mt-[10vh] pb-[4vh]">
            <Link href="/mech-eng-31" className="group max-w-full">
              <h1
                className="text-left font-extrabold tracking-tight drop-shadow-lg"
                style={{
                  fontFamily:
                    '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                <span
                  className="block text-[clamp(2rem,5.5vw,5rem)] transition-transform group-hover:-translate-y-0.5"
                  style={{ color: "#2d1e5e" }}
                >
                  MECH ENG ’31
                </span>

                <span
                  className="block text-[clamp(1.5rem,4.5vw,4rem)] transition-transform group-hover:-translate-y-0.5"
                  style={{ color: "#9575cd" }}
                >
                  CLASS PROFILES
                </span>
              </h1>
            </Link>

            <Link
              href="/class-profile"
              className="mt-[3vh] text-[clamp(0.6rem,1vw,0.9rem)] font-semibold uppercase tracking-[0.15em] text-[#F5F0E8] transition hover:text-white"
            >
              Mech Eng ’30 Profiles
            </Link>
          </div>

        </main>

        {/* Footer */}
        <footer className="pb-[3vh] text-[clamp(0.5rem,0.85vw,0.75rem)] uppercase tracking-[0.15em] text-[#8c7f73]">
          <p>
            Mechanical Engineering Class of 2030 - Logo by Myles Seckler
          </p>
          
          <p className="mt-2 normal-case tracking-normal">
            Background photo by uwfroshmedia
          </p>

        </footer>
      </div>
    </div>
  );
}
