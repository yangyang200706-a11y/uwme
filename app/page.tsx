import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f2ef] text-[#1f1b18]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-10">
        <nav className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[#6f645b]">
          <span className="rounded-full border border-[#d9d1c8] px-4 py-2">
            UW Mechanical Engineering
          </span>
          <Link className="hover:text-[#1f1b18]" href="/class-profile">
            Class Profile
          </Link>
        </nav>

        <div className="mt-16 grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7f73]">
              Class of 2030
            </p>
            <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-tight text-[#1f1b18] sm:text-5xl lg:text-6xl">
              Mechanical Engineering student profiles.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#5c5249]">
              A focused directory of the class, organized by stream, with
              personal stories and external links. Search and filter tools live
              inside the profile hub.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[#1f1b18] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4f2ef] transition hover:-translate-y-0.5"
                href="/class-profile"
              >
                Enter Class Profile
              </Link>
              <Link
                className="rounded-full border border-[#1f1b18] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f1b18] transition hover:-translate-y-0.5"
                href="/class-profile#directory"
              >
                Browse Directory
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
