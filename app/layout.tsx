// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "A.B Ceeprel",
    template: "%s | Agboola Boluwatife",
  },
  description:
    "Software developer, scientist, community builder with a passion for health and finance.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = (await cookies()).get("theme")?.value || "light";

  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body
          className={`antialiased tracking-tight ${
            theme === "dark" ? "dark" : ""
          }`}
        >
          <ClientLayout>
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
          </ClientLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: "email", url: "mailto:bolutifegboola@gmail.com" },
    { name: "whatsapp", url: "https://wa.me/2347069014391" },
    { name: "x/twitter", url: "https://x.com/ceeprel3" },
    { name: "instagram", url: "https://www.instagram.com/ceeprel" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ceeprel",
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
