import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { CalProvider } from "@/components/cal-provider";
import { getSEOTags } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...getSEOTags(),
  icons: {
    icon: "https://res.cloudinary.com/dreomly4m/image/upload/v1748120226/BI_Dark_o79vzm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-primary h-full bg-white [--pattern-fg:var(--color-charcoal-900)]/10 dark:bg-black dark:[--pattern-fg:var(--color-neutral-100)]/30">
        <ThemeProvider attribute="class" defaultTheme="system">
          <main className="h-full bg-white antialiased dark:bg-black">
            <Navbar />
            {children}
            <Footer />
          </main>
          <CalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
