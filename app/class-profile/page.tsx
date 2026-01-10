"use client";

import React, { JSX } from "react";

import Link from "next/link";
import { useMemo, useState } from "react";
import profilesData from "../data/profiles.json";

type ProfileLink = {
  label: string;
  href: string;
};

type Profile = {
  slug: string;
  name: string;
  stream: 4 | 8;
  photo: string;
  description: string;
  highSchool: string;
  links: ProfileLink[];
};

const { profiles, streams } = profilesData as {
  profiles: Profile[];
  streams: Array<4 | 8>;
};

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
        d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495a18.364 18.364 0 0 0-5.4872 0 12.635 12.635 0 0 0-.6177-1.2495.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0304a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057 13.107 13.107 0 0 1-1.8722-.8936.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.793 8.18 1.793 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.299 12.299 0 0 1-1.873.8926.0766.0766 0 0 0-.0407.1067c.3604.698 0.7719 1.3629 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6076 3.9495-1.5228 6.0023-3.0304a.077.077 0 0 0 .0302-.0561c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0276zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3333-.9555 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3333-.946 2.419-2.1568 2.419z"
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
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fffbe6_60%,_#fdf6e3_100%)] text-[#1f1b18]">
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
                    <p className="text-sm text-[#6f645b] flex items-center gap-2">
                      {profile.stream === 4 ? 'S4' : 'S8'}
                      <span className="inline-flex items-center gap-1 ml-2">
                        {/* School icon (graduation cap) */}
                        <svg className="h-4 w-4 text-[#8c7f73]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10 2C9.7 2 9.4 2.1 9.2 2.3L1.2 6.8c-.6.3-.6 1.1 0 1.4l1.3.7V12c0 2.2 3.6 4 8 4s8-1.8 8-4V8.9l.3-.2c.6-.3.6-1.1 0-1.4l-8-4.5C10.6 2.1 10.3 2 10 2zm0 2.2l7.1 4-7.1 4-7.1-4 7.1-4zm7 6.1V12c0 1.1-2.7 3-7 3s-7-1.9-7-3V8.3l6.7 3.8c.6.3 1.3.3 1.9 0l6.7-3.8z" />
                        </svg>
                        <span className="text-xs text-[#8c7f73]">{profile.highSchool}</span>
                      </span>
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#544b43]">
                  {profile.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b18]">
                  {profile.links.map((link) => {
                    let href = link.href;
                    if (link.label === "LinkedIn") {
                      href = link.href.startsWith("https://linkedin.com") ? link.href : `https://linkedin.com/in/${link.href}`;
                    } else if (link.label === "Portfolio" || link.label === "Website") {
                      href = link.href;
                    }
                    if (link.label === "Discord" || link.label === "Instagram") {
                      // Not a hyperlink, show username from JSON on hover ONLY when hovering the icon circle
                      return (
                        <span
                          key={link.label}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d1c8] text-[#1f1b18] relative text-[11px] font-normal hover:z-10"
                          aria-label={link.label}
                          title={link.label}
                        >
                          <span className="group flex items-center justify-center w-full h-full">
                            {socialIcons[link.label] ?? link.label}
                            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-[#1f1b18] px-2 py-1 text-[11px] text-white opacity-0 group-hover:opacity-100 transition">
                              <span className="block text-[11px] font-normal" style={{ textTransform: "none" }}>{link.href}</span>
                            </span>
                          </span>
                        </span>
                      );
                    }
                    // Default: hyperlink chip
                    return (
                      <a
                        key={link.label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d1c8] text-[#1f1b18] transition hover:border-[#1f1b18] relative group text-[11px] font-normal"
                        aria-label={link.label}
                        title={link.label}
                      >
                        {socialIcons[link.label] ?? link.label}
                      </a>
                    );
                  })}
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

      </div>
    </div>
  );
}
