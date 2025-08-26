import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
}

export function generateSEO({
  title = 'RedLine Report | 기사 제목 분석기',
  description = "기사 제목의 사회적 감수성을 분석하는 웹사이트 입니다.",
  image = "/redline_report_og.png",
  url = "https://redline-report.com"
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{
        url: `https://redline-report.com${image}`,
        width: 1200,
        height: 630,
        alt: title,
      }],
      url,
      siteName: "RedLine Report | 기사 제목 분석기",
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://redline-report.com${image}`],
    }
  }
}