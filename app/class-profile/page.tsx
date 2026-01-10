"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { profiles, streams } from "../data/profiles";

const streamLabels: Record<4 | 8, string> = {
  4: "Stream 4",
  8: "Stream 8",
};

export default function ClassProfilePage() {
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
    <div className="min-h-screen bg-[#f4f2ef] text-[#1f1b18]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-10">
        <header className="relative overflow-hidden rounded-[32px] border border-[#e1dbd4]">
          <div className="absolute inset-0 bg-[#d9d2ca]" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url('/class-hero.jpg')",
            }}
          />
          <div className="relative z-10 flex flex-col gap-5 px-6 py-10 text-white sm:px-10 sm:py-12">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80"
            >
              &lt;- back home
            </Link>
            <div className="max-w-xl">
              <h1 className="font-[var(--font-display)] text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
                UWME Class '30
              </h1>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/80">
                University of Waterloo - Mechanical Engineering
              </p>
            </div>
          </div>
        </header>

        <section id="directory" className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7f73]">
                Directory
              </p>
              <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#1f1b18] sm:text-4xl">
                Browse UWME class profiles
              </h2>
            </div>
            <Link
              className="rounded-full border border-[#1f1b18] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
              href="#admin"
            >
              Admin controls
            </Link>
          </div>

          <div className="rounded-[28px] border border-[#e1dbd4] bg-white p-5 shadow-[0_18px_40px_rgba(60,50,40,0.08)]">
            <div className="flex flex-wrap items-end gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7f73]">
                Filters
              </span>
              <div className="flex flex-wrap gap-3">
                <input
                  className="w-60 rounded-full border border-[#d9d1c8] bg-white px-4 py-2 text-sm text-[#1f1b18] shadow-sm focus:border-[#1f1b18] focus:outline-none"
                  placeholder="Search by name"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <select
                  className="w-44 rounded-full border border-[#d9d1c8] bg-white px-4 py-2 text-sm text-[#1f1b18] shadow-sm focus:border-[#1f1b18] focus:outline-none"
                  value={streamFilter}
                  onChange={(event) =>
                    setStreamFilter(event.target.value as "all" | "4" | "8")
                  }
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
                className="group flex h-full flex-col rounded-[24px] border border-[#e1dbd4] bg-white p-5 shadow-[0_14px_30px_rgba(60,50,40,0.08)] transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} profile photo`}
                    className="h-20 w-20 rounded-[18px] object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f1b18]">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-[#6f645b]">
                      {streamLabels[profile.stream]} - Mechanical Engineering
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#544b43]">
                  {profile.description.slice(0, 120)}...
                </p>
                <div className="mt-auto flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c7f73]">
                  View profile
                  <span className="transition group-hover:translate-x-1">
                    -&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#d9d1c8] bg-white/70 p-10 text-center text-sm text-[#6f645b]">
              No profiles match that search yet.
            </div>
          )}
        </section>

        <section
          id="admin"
          className="rounded-[28px] border border-[#e1dbd4] bg-white p-6 shadow-[0_18px_40px_rgba(60,50,40,0.08)]"
        >
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7f73]">
                Admin Controls
              </p>
              <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#1f1b18] sm:text-4xl">
                Manage student profiles
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[#6f645b]">
                Site owners can add, edit, or delete profiles. Students do not
                submit entries directly.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <form className="rounded-[24px] border border-[#e1dbd4] bg-[#f7f5f2] p-6">
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#1f1b18]">
                  Add or edit a profile
                </h3>
                <div className="mt-6 grid gap-4">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6f645b]">
                    Profile photo
                  </label>
                  <input
                    type="file"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                  />
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6f645b]">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="Full name"
                  />
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6f645b]">
                    Stream
                  </label>
                  <select className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]">
                    {streams.map((stream) => (
                      <option key={stream} value={stream}>
                        {streamLabels[stream]} - Mechanical Engineering
                      </option>
                    ))}
                  </select>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6f645b]">
                    Personal description
                  </label>
                  <textarea
                    rows={5}
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="Write 100-250 words."
                  />
                  <label className="text-xs uppercase tracking-[0.2em] text-[#6f645b]">
                    External links
                  </label>
                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      type="url"
                      className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                      placeholder="LinkedIn"
                    />
                    <input
                      type="url"
                      className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                      placeholder="GitHub"
                    />
                    <input
                      type="url"
                      className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                      placeholder="Portfolio"
                    />
                    <input
                      type="email"
                      className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-6 rounded-full bg-[#1f1b18] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f4f2ef]"
                >
                  Save profile
                </button>
              </form>

              <div className="flex flex-col gap-4">
                <div className="rounded-[24px] border border-[#e1dbd4] bg-[#f7f5f2] p-6">
                  <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#1f1b18]">
                    Manage existing profiles
                  </h3>
                  <p className="mt-2 text-sm text-[#6f645b]">
                    Use the controls below to edit or remove profiles.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {profiles.slice(0, 4).map((profile) => (
                      <div
                        key={profile.slug}
                        className="flex items-center justify-between rounded-2xl border border-[#e7e0d7] bg-white px-4 py-3 text-sm"
                      >
                        <div>
                          <p className="font-semibold text-[#1f1b18]">
                            {profile.name}
                          </p>
                          <p className="text-xs text-[#6f645b]">
                            {streamLabels[profile.stream]} - Mechanical Engineering
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="rounded-full border border-[#1f1b18] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f1b18]"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="rounded-full border border-[#b86a3a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b86a3a]"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#1f1b18] bg-[#1f1b18] p-6 text-[#f4f2ef]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d7b089]">
                    External Links
                  </p>
                  <h3 className="font-[var(--font-display)] mt-3 text-2xl font-semibold">
                    LinkedIn, GitHub, portfolio, email
                  </h3>
                  <p className="mt-3 text-sm text-[#e5ddd4]">
                    Links should be labeled clearly and open in new tabs so each
                    profile can live on student-owned platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
