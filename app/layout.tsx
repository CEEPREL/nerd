import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ceeprel.com.ng"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "A.B Ceeprel",
    template: "%s | Agboola Boluwatife",
  },
  description:
    "Software developer, scientist, community builder with a passion for health and finance.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check the cookie for the current theme (or default to light)
  const theme = (await cookies()).get("theme")?.value || "light"; // Default to "light"

  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body
          className={`antialiased tracking-tight ${
            theme === "dark" ? "dark" : ""
          }`}
        >
          <div
            className={`min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 ${
              theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: "@ceeprel3", url: "https://x.com/ceeprel3" },
    { name: "instagram", url: "https://www.instagram.com/ceeprel" },
    {
      name: "linkedin",
      url: "www.linkedin.com/in/boluwatife-agboola-a04ab985",
    },
    { name: "github", url: "https://github.com/ceeprel" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
