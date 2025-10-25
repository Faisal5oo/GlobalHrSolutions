import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Global Hire Solution | International Recruitment & Staffing Services",
  description:
    "Global Hire Solution connects companies with top global talent and helps professionals find international job opportunities. Specialized in recruitment, staffing, executive search, and outsourcing across industries worldwide.",
  keywords: [
    "global recruitment agency",
    "international staffing",
    "hire employees worldwide",
    "job opportunities abroad",
    "recruitment agency",
    "staffing solutions",
    "global hiring",
    "HR outsourcing",
    "staffing services",
    "global recruitment",
    "executive hiring",
    "recruitment outsourcing",
    "job seeker support",
    "hire global employees",
    "recruitment partner",
    "fast hiring solutions",
    "global recruitment company",
    "international staffing agency",
    "overseas job opportunities",
    "hire worldwide talent",
    "Global Hire Solution"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#070C23" }}
      >
        {children}
      </body>
    </html>
  );
}
