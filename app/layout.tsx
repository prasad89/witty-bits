import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WittyBits",
  description:
    "Discover the tech-savvy humor of Prasad Bhalerao @prasad89, a witty software engineer. Dive into coding puzzles, tech trends, and software intricacies on his blog. Get ready for a unique blend of humor and tech insights. Join the fun and explore the world of technology with a twist!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
