import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join AnytimeLLM and build the future of autonomous agents.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
