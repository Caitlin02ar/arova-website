import type { Metadata } from "next";
import { Work_Sans, Assistant } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: {
    default: "Arova",
    template: "%s | Arova",
  },
  description: "Arova official website",
  applicationName: "Arova",
  icons: {
    icon: [
      { url: "/favicon.ico" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${assistant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LoadingScreen>
          {children}
        </LoadingScreen>
        </body>
    </html>
  );
}
