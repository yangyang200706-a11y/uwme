"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { profiles, streams } from "./data/profiles";

const streamLabels: Record<4 | 8, string> = {
  4: "Stream 4",
  8: "Stream 8",
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [streamFilter, setStreamFilter] = useState<"all" | "4" | "8">(
    "all",
  );

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return profiles.filter((profile) => {
      const matchesQuery = normalizedQuery
        ? profile.name.toLowerCase().includes(normalizedQuery)
        : true;
      const matchesStream =
        streamFilter === "all" || String(profile.stream) === streamFilter;
      return matchesQuery && matchesStream;
    });
  }, [query, streamFilter]);

  return (
    <div
      className="min-h-screen text-[#1d1a17]"
      style={{
        backgroundColor: "#f7f2ea",
        backgroundImage:
          "radial-gradient(circle at 12% 18%, rgba(255, 210, 160, 0.55), transparent 55%), radial-gradient(circle at 90% 20%, rgba(170, 210, 255, 0.5), transparent 50%), radial-gradient(circle at 35% 80%, rgba(255, 180, 190, 0.45), transparent 52%)",
      }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-[#fcd6a5]/60 blur-3xl" />
      <div className="relative">
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-10">
          <nav className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.2em] text-[#5a534c]">
            <span className="rounded-full border border-[#d3c7ba] px-4 py-2">
              UW Mechanical Engineering
            </span>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-[#1d1a17]" href="#directory">
                Directory
              </a>
              <a className="hover:text-[#1d1a17]" href="#admin">
                Admin Controls
              </a>
            </div>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a35f20]">
                Class Profile 2030
              </p>
              <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-tight text-[#1d1a17] sm:text-5xl lg:text-6xl">
                Mechanical Engineering students, mapped by stream and story.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#554c43]">
                Explore the Mechanical Engineering Class of 2030 and meet the
                people behind the projects. Each profile highlights a personal
                snapshot, stream placement, and links to student-owned spaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-[#1d1a17] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f2ea] transition hover:-translate-y-0.5"
                  href="#directory"
                >
                  Browse the Directory
                </a>
                <a
                  className="rounded-full border border-[#1d1a17] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1d1a17] transition hover:-translate-y-0.5"
                  href="#admin"
                >
                  Admin Workspace
                </a>
              </div>
            </div>
            <div className="rounded-[32px] border border-[#e4d6c5] bg-white/80 p-6 shadow-[0_30px_60px_rgba(50,40,30,0.12)]">
              <div className="flex flex-col gap-4">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#1d1a17]">
                  Profile Overview
                </h2>
                <ul className="grid gap-3 text-sm text-[#5a534c]">
                  <li className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-2">
                    Profile photo
                    <span className="text-[#1d1a17]">Headshot or portrait</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-2">
                    Full name
                    <span className="text-[#1d1a17]">Displayed prominently</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-2">
                    Stream label
                    <span className="text-[#1d1a17]">Stream 4 or 8</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-dashed border-[#eadfd2] pb-2">
                    Personal description
                    <span className="text-[#1d1a17]">100-250 words</span>
                  </li>
                  <li className="flex items-center justify-between">
                    External links
                    <span className="text-[#1d1a17]">Student-owned pages</span>
                  </li>
                </ul>
                <p className="text-xs uppercase tracking-[0.2em] text-[#a35f20]">
                  Total profiles: {profiles.length}
                </p>
              </div>
            </div>
          </div>
        </header>

        <section
          id="directory"
          className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a35f20]">
                Directory Page
              </p>
              <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#1d1a17] sm:text-4xl">
                Browse the class list
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#5a534c]">
                Search by name or filter by stream. Click any card to open the
                full student profile.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  Search by name
                </label>
                <input
                  className="w-60 rounded-full border border-[#d9cdbf] bg-white px-4 py-2 text-sm text-[#1d1a17] shadow-sm focus:border-[#1d1a17] focus:outline-none"
                  placeholder="Type a name"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  Filter by stream
                </label>
                <select
                  className="w-44 rounded-full border border-[#d9cdbf] bg-white px-4 py-2 text-sm text-[#1d1a17] shadow-sm focus:border-[#1d1a17] focus:outline-none"
                  value={streamFilter}
                  onChange={(event) => setStreamFilter(event.target.value as
                    | "all"
                    | "4"
                    | "8")}
                >
                  <option value="all">All streams</option>
                  {streams.map((stream) => (
                    <option key={stream} value={stream}>
                      {streamLabels[stream]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProfiles.map((profile) => (
              <Link
                key={profile.slug}
                href={`/profiles/${profile.slug}`}
                className="group flex h-full flex-col rounded-[28px] border border-[#e6dacb] bg-white/90 p-5 shadow-[0_22px_40px_rgba(50,40,30,0.12)] transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} profile photo`}
                    className="h-20 w-20 rounded-[20px] object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1d1a17]">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-[#6b6259]">
                      {streamLabels[profile.stream]} - Mechanical Engineering
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#524a41]">
                  {profile.description.slice(0, 120)}...
                </p>
                <div className="mt-auto flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#a35f20]">
                  View profile
                  <span className="transition group-hover:translate-x-1">
                    -&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#d9cdbf] bg-white/60 p-10 text-center text-sm text-[#5a534c]">
              No profiles match that search yet.
            </div>
          )}
        </section>

        <section
          id="admin"
          className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a35f20]">
              Admin Controls
            </p>
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#1d1a17] sm:text-4xl">
              Manage student profiles
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#5a534c]">
              Site owners can add, edit, or delete profiles. Students do not
              submit entries directly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="rounded-[32px] border border-[#e4d6c5] bg-white/90 p-6 shadow-[0_24px_48px_rgba(50,40,30,0.12)]">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#1d1a17]">
                Add or edit a profile
              </h3>
              <div className="mt-6 grid gap-4">
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  Profile photo
                </label>
                <input
                  type="file"
                  className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                />
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  Full name
                </label>
                <input
                  type="text"
                  className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                  placeholder="Full name"
                />
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  Stream
                </label>
                <select className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]">
                  {streams.map((stream) => (
                    <option key={stream} value={stream}>
                      {streamLabels[stream]} - Mechanical Engineering
                    </option>
                  ))}
                </select>
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  Personal description
                </label>
                <textarea
                  rows={5}
                  className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                  placeholder="Write 100-250 words."
                />
                <label className="text-xs uppercase tracking-[0.2em] text-[#5a534c]">
                  External links
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                    placeholder="LinkedIn"
                  />
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                    placeholder="GitHub"
                  />
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                    placeholder="Portfolio"
                  />
                  <input
                    type="email"
                    className="rounded-2xl border border-[#d9cdbf] bg-white px-4 py-3 text-sm text-[#1d1a17]"
                    placeholder="Email"
                  />
                </div>
              </div>
              <button
                type="button"
                className="mt-6 rounded-full bg-[#1d1a17] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f7f2ea]"
              >
                Save profile
              </button>
            </form>

            <div className="flex flex-col gap-4">
              <div className="rounded-[28px] border border-[#e4d6c5] bg-white/80 p-6">
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#1d1a17]">
                  Manage existing profiles
                </h3>
                <p className="mt-2 text-sm text-[#5a534c]">
                  Use the controls below to edit or remove profiles.
                </p>
                <div className="mt-6 grid gap-3">
                  {profiles.slice(0, 4).map((profile) => (
                    <div
                      key={profile.slug}
                      className="flex items-center justify-between rounded-2xl border border-[#eadfd2] bg-white px-4 py-3 text-sm"
                    >
                      <div>
                        <p className="font-semibold text-[#1d1a17]">
                          {profile.name}
                        </p>
                        <p className="text-xs text-[#6b6259]">
                          {streamLabels[profile.stream]} - Mechanical Engineering
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="rounded-full border border-[#1d1a17] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d1a17]"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="rounded-full border border-[#a35f20] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#a35f20]"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-[#e4d6c5] bg-[#1d1a17] p-6 text-[#f7f2ea]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#fcd6a5]">
                  External Links
                </p>
                <h3 className="font-[var(--font-display)] mt-3 text-2xl font-semibold">
                  LinkedIn, GitHub, portfolio, email
                </h3>
                <p className="mt-3 text-sm text-[#e9ddcf]">
                  Links should be labeled clearly and open in new tabs so each
                  profile can live on student-owned platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
