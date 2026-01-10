import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen text-[#1d1a17]"
      style={{
        backgroundColor: "#f7f2ea",
        backgroundImage:
          "linear-gradient(130deg, rgba(255, 210, 160, 0.35), transparent 60%), radial-gradient(circle at 85% 15%, rgba(170, 210, 255, 0.35), transparent 55%)",
      }}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-10">
        <nav className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-[#5a534c]">
          <span className="rounded-full border border-[#d3c7ba] px-4 py-2">
            UW Mechanical Engineering
          </span>
          <Link className="hover:text-[#1d1a17]" href="/class-profile">
            Class Profile
          </Link>
        </nav>

        <div className="mt-16 grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a35f20]">
              Class of 2030
            </p>
            <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-tight text-[#1d1a17] sm:text-5xl lg:text-6xl">
              Mechanical Engineering student profiles.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#554c43]">
              A focused directory of the class, organized by stream, with
              personal stories and external links. Search and filter tools live
              inside the profile hub.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-[#1d1a17] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f2ea] transition hover:-translate-y-0.5"
                href="/class-profile"
              >
                Enter Class Profile
              </Link>
              <Link
                className="rounded-full border border-[#1d1a17] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1d1a17] transition hover:-translate-y-0.5"
                href="/class-profile#directory"
              >
                Browse Directory
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e4d6c5] bg-white/80 p-8 shadow-[0_30px_60px_rgba(50,40,30,0.12)]">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#1d1a17]">
              What you will find
            </h2>
            <div className="mt-6 grid gap-4 text-sm text-[#5a534c]">
              <div className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-3">
                Stream sorting
                <span className="text-[#1d1a17]">4 or 8</span>
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-3">
                Search by name
                <span className="text-[#1d1a17]">Quick filtering</span>
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-3">
                Individual profiles
                <span className="text-[#1d1a17]">Stories + links</span>
              </div>
              <div className="flex items-center justify-between">
                Admin workspace
                <span className="text-[#1d1a17]">Add, edit, delete</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-xs uppercase tracking-[0.3em] text-[#a35f20]">
          Mechanical Engineering Class of 2030
        </footer>
      </div>
    </div>
  );
}
