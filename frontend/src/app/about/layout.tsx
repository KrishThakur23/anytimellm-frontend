import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the team building intelligent software that feels human. Learn about our philosophy, our people, and why craftsmanship matters.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
