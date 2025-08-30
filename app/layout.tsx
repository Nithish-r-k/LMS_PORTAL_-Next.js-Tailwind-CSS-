// lms-web/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata
export const metadata: Metadata = {
  title: "LMS Portal",
  description: "A simple LMS built with Next.js",
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        {/* ✅ Navbar */}
        <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
          <h1 className="font-extrabold text-xl tracking-wide flex items-center gap-2">
            🎓 LMS Portal
          </h1>
          <div className="space-x-6">
            <Link
              href="/"
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-yellow-300 transition-colors font-medium"
            >
              Courses
            </Link>
          </div>
        </nav>

        {/* ✅ Page content */}
        <main className="p-6 container mx-auto">{children}</main>
      </body>
    </html>
  );
}
