export type ProfileLink = {
  label: string;
  href: string;
};

export type Profile = {
  slug: string;
  name: string;
  stream: 4 | 8;
  photo: string;
  description: string;
  links: ProfileLink[];
};

export const profiles: Profile[] = [
  {
    slug: "alex-morgan",
    name: "Alex Morgan",
    stream: 4,
    photo: "/profiles/alex-morgan.svg",
    description:
      "I am a first-year UW Mechanical Engineering student focused on sustainable product design and robotics. I love CAD, rapid prototyping, and exploring how materials behave under load. Outside class, I build small mechanisms, tinker with sensor kits, and volunteer at local STEM workshops in Waterloo.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Portfolio", href: "https://example.com" },
    ],
  },
  {
    slug: "priya-desai",
    name: "Priya Desai",
    stream: 8,
    photo: "/profiles/priya-desai.svg",
    description:
      "I am interested in fluid systems and clean energy storage at Waterloo. My goal is to work on mechanical systems that make renewables more reliable and affordable. I spend my weekends sketching mechanisms, running, and reading about aviation history.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Email", href: "mailto:priya@example.com" },
    ],
  },
  {
    slug: "samir-khan",
    name: "Samir Khan",
    stream: 4,
    photo: "/profiles/samir-khan.svg",
    description:
      "I am drawn to mechatronics and human-centered design in UW Mechanical Engineering. I want to build assistive devices that are reliable, approachable, and repairable. I enjoy model building, photography, and late-night brainstorming about how everyday objects could move better.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Portfolio", href: "https://example.com" },
    ],
  },
  {
    slug: "elena-park",
    name: "Elena Park",
    stream: 8,
    photo: "/profiles/elena-park.svg",
    description:
      "I am fascinated by manufacturing systems, automation, and quality control at Waterloo. My goal is to blend mechanical engineering with data-driven process improvement. I like rock climbing, sketching industrial scenes, and collecting old machine parts.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    slug: "liam-chen",
    name: "Liam Chen",
    stream: 4,
    photo: "/profiles/liam-chen.svg",
    description:
      "I am focused on thermal systems and sustainable building design in the UWME program. I am hoping to work on HVAC innovations that cut emissions without sacrificing comfort. I spend time hiking, cooking, and experimenting with small heat exchanger models.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Email", href: "mailto:liam@example.com" },
    ],
  },
  {
    slug: "maya-owens",
    name: "Maya Owens",
    stream: 8,
    photo: "/profiles/maya-owens.svg",
    description:
      "I am exploring biomechanics and prosthetic design at the University of Waterloo. I want to build devices that feel intuitive and empowering. When I am not studying, I am usually sketching product ideas, playing soccer, or learning about material science breakthroughs.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Portfolio", href: "https://example.com" },
    ],
  },
];

export const streams = [4, 8] as const;
