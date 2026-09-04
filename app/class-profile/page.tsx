"use client";

import React, { JSX } from "react";

import Link from "next/link";
import { useMemo, useState } from "react";
import profilesData from "../data/profiles.json";

const LinkIcon = (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1 1" />
    <path d="M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l1-1" />
  </svg>
);

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
  hometown: string | null;
  links: ProfileLink[];
};

export type ProfilesData = {
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

const academicRepNames = new Set([
  "Marissa Elliott",
  "Jessica Cafiso",
  "Tem Ninvoraskul",
  "Kobe",
]);

const academicRepFirstNames = new Set(["Marissa", "Jessica", "Tem", "Kobe"]);

const engSocRepNames = new Set(["Huaitian Zhang", "Huaitian"]);

export function ClassProfileDirectory({
  data,
}: {
  data?: ProfilesData;
}) {
  const { profiles, streams } = (data ?? profilesData) as ProfilesData;
  const [query, setQuery] = useState("");
  const [streamFilter, setStreamFilter] = useState<"all" | "4" | "8">("all");

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
  }, [profiles, query, streamFilter]);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8f6ff_0%,_#f1f7ff_80%)]text-[#1f1b18]">
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

          <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.slug}
                className="group flex h-full flex-col rounded-[24px] border border-[#c1b8be] bg-white p-5 shadow-[0_14px_30px_rgba(60,50,40,0.08)] transition hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} profile photo`}
                    className="h-20 w-20 rounded-[18px] object-cover"
                  />
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-[#1f1b18]">
                      <span>{profile.name}</span>
                      {engSocRepNames.has(profile.name) && (
                        <span
                          className="inline-flex items-center text-purple-500"
                          aria-label="EngSoc Rep"
                          title="EngSoc Rep"
                        >
                          ★
                        </span>
                      )}
                      {(academicRepNames.has(profile.name) ||
                        academicRepFirstNames.has(
                          profile.name.split(" ")[0] ?? ""
                        )) && (
                        <span
                          className="inline-flex items-center text-[#d4a017]"
                          aria-label="Academic Rep"
                          title="Academic Rep"
                        >
                          ★
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-[#6f645b] flex items-center gap-2">
                      {profile.stream === 4 ? "S4" : "S8"}
                      <span className="inline-flex items-center gap-1 ml-2">
                        {/* School icon (graduation cap) */}
                        {profile.highSchool && (
                          <svg
                            viewBox="0 0 128 128"
                            width={28}
                            height={28}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--noto"
                            preserveAspectRatio="xMidYMid meet"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M99.06 91.42S83.95 105.6 63.97 105.6S28.89 91.42 28.89 91.42s-2.81-13.49 4.45-36.78c3.83-12.28 58.33-13.53 62.6-2.79c7.26 18.23 3.12 39.57 3.12 39.57z"
                                fill="#424242"
                              ></path>
                              <path
                                d="M28.89 91.42l4.79 3.84s-.04-7.6 2.31-14.69c.88-2.65 4.02-3.76 6.38-2.27l18.29 11.47a6.389 6.389 0 0 0 6.7.05c8.74-5.3 31.54-19.17 32.58-20.02c0 0 0-1.71-.43-3.89L28.63 66l.26 25.42z"
                                fill="#212121"
                              ></path>
                              <path
                                d="M122.81 52.03l-56.8 33.83c-1.24.74-2.79.74-4.04 0L5.19 52.03c-1.58-.94-1.58-3.23 0-4.17l56.8-33.83c1.24-.74 2.79-.74 4.04 0l56.8 33.83c1.57.94 1.57 3.23-.02 4.17z"
                                fill="#424242"
                              ></path>
                              <path
                                d="M64.04 83.38c-.01 0-.03.01-.04.01c-.16 0-.32-.04-.46-.13L4.18 49.04s-.29.55 0 1.54c.3.99.76 1.31 1.01 1.46l56.8 33.83c.62.37 1.32.56 2.02.56h.04v-3.05z"
                                fill="#9e9e9e"
                              ></path>
                              <path
                                d="M64 83.38c.01 0 .03.01.04.01c.16 0 .32-.04.46-.13l59.36-34.22s.29.55 0 1.54c-.3.99-.76 1.31-1.01 1.46l-56.8 33.83c-.62.37-1.32.56-2.02.56h-.04v-3.05z"
                                fill="#616161"
                              ></path>
                              <path
                                d="M35.45 70.06l.32-2.81S60.28 53.92 62.7 52.52c2.42-1.4 4.96-2.96 6.09-4.21c2-2.2.56-3.58.56-3.58s-1.58 2.56-5.35 2.11c-2.16-.26-4.97-2.01-5.44-2.83s-27.67 19.9-27.67 19.9l-.19 3.33l4.75 2.82z"
                                fill="#424242"
                              ></path>
                              <path
                                d="M69.35 44.74c-2.62 3.66-7.06 2.06-7.06 2.06s-13.91 6.67-14.43 5.66s11.49-7.19 11.49-7.19s-.67-2.46-.6-3.51c0 0-21.72 13.82-29.87 18.47c-4.27 2.44-5.18 4.74-5.17 7.98c0 1.42.02 6.03.04 8.78c0 .51-.22.99-.61 1.31a5.162 5.162 0 0 0-1.89 3.99c0 1.53.67 2.9 1.73 3.85c.57.51.45 1.61.5 2.32c.1 1.36 0 1.98-.56 3.24c-.55 1.23-1.06 2.49-1.41 3.79c-.27 1-.45 2.03-.63 3.05c-1.19 6.83-1.73 14.13-4.88 20.41a.993.993 0 0 0 .45 1.34a1.007 1.007 0 0 0 1.35-.44c1.64-3.27 2.49-6.85 3.19-10.4c-.04 3.21-.06 6.45-.17 9.95c-.02.68-.07 2.05.55 2.35c2.33 1.13 2.33-2.35 2.33-2.35s.03 3.13 3.2 3.13s3.4-3.13 3.4-3.13s.23 2.87 1.86 2.73c.66-.06 1.53-.46 1.22-3.89c-.31-3.42-1.08-15.68-1.41-19.56c-.46-5.37-2.22-8.56-2.58-10.46c-.13-.72-.14-1.47.43-1.94a5.165 5.165 0 0 0 .13-7.88a1.71 1.71 0 0 1-.58-1.42c.19-2.59.4-6.35.57-7.22c.74-3.91 2.67-4.61 4.65-5.77c1.98-1.17 30.66-14.19 32.33-15.3c3.09-2.07 2.43-3.95 2.43-3.95z"
                                fill="#e2a610"
                              ></path>
                              <path
                                d="M69.35 44.74c-2.47 3.49-7.6 1.93-7.6 1.93s-13.11 5.81-12.24 4.76c.86-1.05 9.84-6.16 9.84-6.16s-.67-2.46-.6-3.51c0 0-22.1 12.77-30.67 18.91c-2.21 1.59-4.95 4.19-2.72 6.78c1.03 1.19 3.02 1.44 4.29.5c.77-.56 1.37-1.38 2.05-2.03c.84-.82 1.86-1.34 2.86-1.93c1.98-1.17 30.66-14.19 32.33-15.3c3.12-2.07 2.46-3.95 2.46-3.95z"
                                fill="#ffca28"
                              ></path>
                              <path
                                d="M26.11 91.86c-1.32 0-2.21-.11-3.02-.3a.62.62 0 0 1-.48-.65l.26-3.82c.03-.39.4-.66.78-.55c.9.26 2.7.52 5.64-.1c.36-.08.72.17.76.54l.4 3.8c.03.31-.17.6-.47.67c-1.53.35-2.64.41-3.87.41z"
                                fill="#9e740b"
                              ></path>
                              <path
                                d="M99.06 91.42s1.77-9.24 1.06-19.07c-.12-1.66-1.14-3.09-1.93 2.72c-.45 3.33-1.43 13.3-3.1 19.53c2.55-1.84 3.97-3.18 3.97-3.18z"
                                fill="#616161"
                              ></path>
                              <path
                                d="M65.73 36.79c.73.23 1.4.79 1.59 1.54c.25 1-.38 2-1.06 2.78c-1.33 1.53-3.16 2.87-5.19 2.8c-.67-.02-1.39-.24-1.8-.77c-.29-.37-.39-.85-.42-1.32c-.18-3.43 3.7-6.03 6.88-5.03z"
                                fill="#616161"
                              ></path>
                            </g>
                          </svg>
                        )}
                        <span className="text-xs text-[#8c7f73]">
                          {profile.highSchool}
                        </span>
                      </span>
                    </p>
                    {profile.hometown && (
                      <p className="text-xs text-[#8c7f73] mt-1">
                        {profile.hometown}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#544b43]">
                  {profile.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f1b18]">
                  {profile.links.map((link) => {
                    if (link.label === "Discord") {
                      const rawHandle = link.href.trim();

                      if (!rawHandle) return null;

                      const displayHandle = rawHandle.startsWith("@")
                        ? rawHandle
                        : `@${rawHandle || "discord"}`;
                      return (
                        <span
                          key={link.label}
                          className="flex items-center gap-2 rounded-full border border-[#d9d1c8] px-2 py-1 text-[#1f1b18]"
                          aria-label={`Discord username ${displayHandle}`}
                          title={displayHandle}
                        >
                          <span className="h-4 w-4">
                            {socialIcons[link.label] ?? link.label}
                          </span>
                          <span className="text-[10px] normal-case tracking-normal text-[#6f645b]">
                            {displayHandle}
                          </span>
                        </span>
                      );
                    }

                    const rawHref = link.href.trim();
                    if (!rawHref) return null;

                    const href =
                      link.label === "LinkedIn"
                        ? rawHref.startsWith("https://linkedin.com")
                          ? rawHref
                          : `https://linkedin.com/in/${rawHref}`
                        : link.label === "Instagram"
                          ? rawHref.startsWith("https://instagram.com")
                            ? rawHref
                            : `https://instagram.com/${rawHref}`
                          : rawHref;


                    return (
                      <a
                        key={link.label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d1c8] text-[#1f1b18] transition hover:border-[#1f1b18] text-[11px] font-normal"
                        aria-label={link.label}
                        title={link.label}
                      >
                        {socialIcons[link.label] ?? LinkIcon}
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

export default function ClassProfilePage() {
  return <ClassProfileDirectory />;
}
