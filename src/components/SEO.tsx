import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website";
  noIndex?: boolean;
}

export default function SEO({
  title = "RedLine Report | 기사 제목 분석기",
  description = "기사 제목의 사회적 감수성을 분석하는 웹사이트 입니다.",
  image = "/redline_report_og.png",
  url = "https://redline-report.com",
  type = "website",
  noIndex = false,
}: SEOProps) {
  const seoConfig: NextSeoProps = {
    title,
    description,
    noindex: noIndex,
    openGraph: {
      type,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "RedLine Report | 기사 제목 분석기",
      ...(url && { url }),
    },
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
  };

  return <NextSeo {...seoConfig} />;
}
