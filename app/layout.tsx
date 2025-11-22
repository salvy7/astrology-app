import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Connect - Your Trusted Astrology Partner",
  description: "Connect with expert astrologers 24/7. Get personalized guidance for life, career, relationships, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-slate-50 to-orange-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}

