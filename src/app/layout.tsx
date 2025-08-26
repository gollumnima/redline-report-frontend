import './globals.css'
import Header from "~/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen transition-colors duration-300 break-keep bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
        <Header />
        <main className="pb-8">
          {children}
        </main>
      </body>
    </html>
  )
}