import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WittyBits",
  description:
    "Explore the witty world of Prasad Bhalerao @prasad89, a software engineer sharing tech explanations with sarcastic humor. Delve into coding conundrums, tech trends, and software engineering intricacies. Expect fresh perspectives and signature wit in my blog. Laugh, learn, and enjoy tech insights with a twist. Join me on this entertaining journey through the fascinating world of technology.",
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
