import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansi Gambhir — AI Agent & Backend Engineer",
  description:
    "Portfolio of Mansi Gambhir — production AI agents, MCP servers and backend systems built with tests, approval gates and audit trails.",
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
