"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { profiles, streams } from "../data/profiles";

const streamLabels: Record<4 | 8, string> = {
  4: "Stream 4",
  8: "Stream 8",
};

const socialIcons: Record<string, JSX.Element> = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.83.1-.65.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.1.4-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .85-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.68-4.58 4.94.36.31.69.92.69 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21H9z"
      />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm5.25-4.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
      />
    </svg>
  ),
  Discord: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4.5a16 16 0 0 0-4.13-1.3l-.2.4a11.5 11.5 0 0 1 3.6 1.3 12.6 12.6 0 0 0-4.7-1.5 15 15 0 0 0-5.12 0 12.6 12.6 0 0 0-4.7 1.5 11.5 11.5 0 0 1 3.6-1.3l-.2-.4A16 16 0 0 0 4 4.5C2.14 7.1 1.4 9.6 1.5 12.2c2.1 1.6 4.2 2.6 6.3 3.2l.5-.6a9.4 9.4 0 0 1-2.7-1.3c.2-.15.4-.3.6-.47a12.4 12.4 0 0 0 11.6 0c.2.17.4.32.6.47a9.4 9.4 0 0 1-2.7 1.3l.5.6c2.1-.6 4.2-1.6 6.3-3.2.1-2.6-.6-5.1-2.4-7.7zM9.2 13a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm5.6 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z"
      />
    </svg>
  ),
  Portfolio: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm0 4h6V5H9z"
      />
    </svg>
  ),
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
        <section id="directory" className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Link
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c7f73]"
                href="/"
              >
                ← back home
              </Link>
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

          <div className="rounded-[28px] border border-[#e1dbd4] bg-white px-5 py-3 shadow-[0_18px_40px_rgba(60,50,40,0.08)]">
            <div className="flex flex-wrap items-center gap-4">
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
              <div
                key={profile.slug}
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
                      <Link
                        className="hover:underline"
                        href={`/profiles/${profile.slug}`}
                      >
                        {profile.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#6f645b]">
                      {streamLabels[profile.stream]} - Mechanical Engineering
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#544b43]">
                  {profile.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b18]">
                  {profile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d1c8] text-[#1f1b18] transition hover:border-[#1f1b18]"
                      aria-label={link.label}
                      title={link.label}
                    >
                      {socialIcons[link.label] ?? link.label}
                    </a>
                  ))}
                </div>
              </div>
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
                    External links (optional)
                  </label>
                  <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="GitHub"
                  />
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="LinkedIn"
                  />
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="Instagram"
                  />
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="Discord"
                  />
                  <input
                    type="url"
                    className="rounded-2xl border border-[#d9d1c8] bg-white px-4 py-3 text-sm text-[#1f1b18]"
                    placeholder="Portfolio"
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
