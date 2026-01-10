import Link from "next/link";
import { notFound } from "next/navigation";
import { profiles } from "../../data/profiles";

const streamLabels: Record<4 | 8, string> = {
  4: "Stream 4",
  8: "Stream 8",
};

type ProfilePageProps = {
  params: { slug: string };
};

export default function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = params;
  const profile = profiles.find((entry) => entry.slug === slug);

  if (!profile) {
    notFound();
  }

  return (
    <div
      className="min-h-screen text-[#1d1a17]"
      style={{
        backgroundColor: "#f7f2ea",
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255, 210, 160, 0.45), transparent 55%), radial-gradient(circle at 85% 30%, rgba(170, 210, 255, 0.4), transparent 55%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-20 pt-12">
        <Link
          href="/#directory"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a35f20]"
        >
          Back to directory
        </Link>

        <div className="grid gap-8 rounded-[32px] border border-[#e4d6c5] bg-white/90 p-8 shadow-[0_30px_60px_rgba(50,40,30,0.12)] md:grid-cols-[200px_1fr]">
          <img
            src={profile.photo}
            alt={`${profile.name} profile photo`}
            className="h-52 w-52 rounded-[28px] object-cover"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-[var(--font-display)] text-3xl font-semibold text-[#1d1a17] sm:text-4xl">
                {profile.name}
              </h1>
              <p className="text-sm text-[#6b6259]">
                {streamLabels[profile.stream]} - Mechanical Engineering
              </p>
            </div>
            <p className="text-base leading-7 text-[#4f473f]">
              {profile.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#1d1a17] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1d1a17]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <section className="rounded-[28px] border border-[#e4d6c5] bg-[#1d1a17] p-6 text-[#f7f2ea]">
          <h2 className="font-[var(--font-display)] text-xl font-semibold">
            Profile layout snapshot
          </h2>
          <p className="mt-3 text-sm text-[#e9ddcf]">
            [Profile Photo] [Full Name] [Stream X - Mechanical Engineering]
            [Personal Description] [External Links]
          </p>
        </section>
      </div>
    </div>
  );
}
