import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "~/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://redline-report.com"),
  title: {
    default: "RedLine Report | 기사 제목 분석기",
    template: "%s | RedLine Report",
  },
  description: "기사 제목의 사회적 감수성을 분석하는 웹사이트 입니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "RedLine Report | 기사 제목 분석기",
    url: "https://redline-report.com",
    title: "RedLine Report | 기사 제목 분석기",
    description: "기사 제목의 사회적 감수성을 분석하는 웹사이트 입니다.",
    images: [
      {
        url: "/redline_report_og.png",
        width: 1200,
        height: 630,
        alt: "RedLine Report | 기사 제목 분석기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RedLine Report | 기사 제목 분석기",
    description: "기사 제목의 사회적 감수성을 분석하는 웹사이트 입니다.",
    images: ["/redline_report_og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen transition-colors duration-300 break-keep bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
        <Header />
        <main className="pb-8">{children}</main>
      </body>
    </html>
  );
}
