"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [title, setTitle] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const router = useRouter();

  const analyzeTitle = async (): Promise<void> => {
    if (!title.trim()) return;

    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const score = Math.floor(Math.random() * 40) + 60;

    const params = new URLSearchParams({
      title: title,
      score: score.toString(),
      timestamp: new Date().toISOString(),
    });

    router.push(`/result?${params.toString()}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            기사 제목 분석기
          </h1>
          <p className="text-gray-600">
            기사 제목을 입력하면 젠더감수성 점수를 분석해드립니다
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              기사 제목
            </label>
            <textarea
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="분석할 기사 제목을 입력해주세요..."
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 resize-none transition-all duration-200"
              rows={4}
              disabled={isAnalyzing}
            />
          </div>

          <button
            onClick={analyzeTitle}
            disabled={!title.trim() || isAnalyzing}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>분석 중...</span>
              </>
            ) : (
              <>
                <span>분석 시작</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💡 분석 예시
        </h3>
        <div className="space-y-3">
          {[
            "경호원과 눈맞은 현직 女시장…여행에 ‘세비 1억’ 썼다",
            "20대 여경이 대낮 흉기 들고 도심 활보",
          ].map((example, index) => (
            <button
              key={index}
              onClick={() => setTitle(example)}
              className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-200 text-gray-700 hover:text-blue-600"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
