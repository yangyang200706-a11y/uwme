import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical Engineering Class of 2031 | UWME",
  description:
    "Discover the students of the University of Waterloo Mechanical Engineering Class of 2031.",
};

export default function MechEng31Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}