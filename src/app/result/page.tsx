import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { generateSEO } from "~/utils/seo";

export const metadata = generateSEO({
  title: "RedLine Report | 기사제목 분석 결과",
  url: "https://redline-report.com/result",
});

function ResultContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const score = parseInt(searchParams.get("score") || "0");
  const timestamp = searchParams.get("timestamp") || "";

  return <div className="max-w-4xl mx-auto px-4 py-8">준비중입니다.</div>;
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ResultContent />
    </Suspense>
  );
}
