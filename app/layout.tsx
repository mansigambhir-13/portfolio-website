import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansi Gambhir — AI Agent & Backend Engineer",
  description:
    "Portfolio of Mansi Gambhir — AWS Certified AI engineer, backend builder and published researcher in explainable AI, medical diagnostics and drug discovery.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
