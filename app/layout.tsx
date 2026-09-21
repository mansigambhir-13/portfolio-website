import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansi Gambhir — AI Agent & Backend Engineer",
  description:
    "Portfolio of Mansi Gambhir — AWS Certified engineer building production AI agents, Amazon Bedrock systems, MCP servers and reliable backends.",
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
