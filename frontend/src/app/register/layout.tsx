import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your AnytimeLLM account. Get started today and automate your customer support and sales on WhatsApp.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
