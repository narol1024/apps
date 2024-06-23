import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apps hall",
  description: "This website is to show a bunch of apps that I have created.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-slate-950">
        {children}
      </body>
    </html>
  );
}
