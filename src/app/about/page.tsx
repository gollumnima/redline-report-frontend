import Link from "next/link";
import ProfileCard from "~/components/ProfileCard";
import { generateSEO } from '~/utils/seo'

export const metadata = generateSEO({
  title: "RedLine Report | 프로젝트 소개",
  url: "https://redline-report.com/about"
})

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="space-y-12">
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            프로젝트 소개
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              여성은 오랫동안 사회에서 제대로 주목받지 못해왔다. 아이러니하게도
              기사 제목 속에서만 예외가 존재한다. 하루가 멀다 하고 &apos;女, 女,
              女&apos;라는 표현이 난무하지만, 정작 여성의 목소리와 권리는 필요한
              순간에 배제된다. 존재를 존중하지 않으면서도 소비 가능한 소재로만
              활용하는 언론의 태도는 우리 사회의 구조적 문제를 적나라하게
              드러낸다.
            </p>

            <p>
              혹시나 하는 마음에 한국언론진흥재단의 《
              <a
                href="https://www.kpf.or.kr/front/board/boardContentsView.do?board_id=291&contents_id=4e06a367dd454d6f95362ec484cee653"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                인터넷신문 기사심의규정
              </a>
              》을 찾아보았다. 제6조 &apos;제목의 원칙&apos;은 이렇게 단 한 줄로
              정리되어 있었다.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-6 bg-gray-50 p-4 rounded-r-lg">
              <p className="font-medium text-gray-800">
                &quot;기사의 제목은 기사의 요약적 내용이나 핵심적 내용을
                대표해야 하며, 기사 내용과 다르게 허위, 과장, 비방, 선정적
                표현을 사용하지 않도록 한다.&quot;
              </p>
            </blockquote>

            <p>
              규정은 놀라울 만큼 단순하다. 기사 제목은 독자가 기사를 클릭하기
              전에 가장 먼저 마주하는 문구임에도 불구하고, 제목 작성 원칙은
              지나치게 간략하다. 언론이 사회적 책임을 다하기에는 턱없이 부족한
              수준이다.
            </p>

            <p>
              물론 더 복잡한 제도적 장치가 있을 수도 있다. 그러나 내가 확인한
              바로는, 2020년 1월 21일에 게시된 이 규정이 최신이었다. 그 이후로
              개선되지 않았다는 사실만으로도 언론계가 제목 문제를 얼마나 가볍게
              다뤄왔는지를 보여준다.
            </p>

            <p>
              개인이 할 수 있는 대응은 제한적이다. SNS에 글을 올리면 지인들만 볼
              뿐이고, 직접 언론사에 항의 메일을 보내 제목이 수정된 경험도
              있었지만, 이는 근본적인 변화를 만들지 못한다. 언론이 스스로 책임을
              다하지 않는다면, 결국 피해는 사회 전체로 돌아온다.
            </p>

            <p>
              이런 배경에서 시작된 것이{" "}
              <strong className="text-red-600">Redline Report</strong>다.
              headline 속에 경각심을 불러일으키는 색, red를 결합해{" "}
              <strong>redline</strong>이라는 이름을 붙였다. 기사 제목을 사회적
              감수성의 기준으로 삼아, 언론이 스스로 넘어서는 안 될 선(red
              line)을 점검하도록 만드는 것이다.
            </p>

            <p>
              첫 단계로는 <strong>젠더 감수성</strong>을 측정하는 기능을
              개발했다. 그러나 여기서 멈추지 않는다. 향후에는 지역 혐오, 외국인
              혐오 등 사회를 분열시키는 차별적 표현까지 검증 영역을 넓혀갈
              계획이다.
            </p>
          </div>
        </section>
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            만든 사람들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfileCard
              name="김두리"
              role="Full-Stack Developer"
              description="웹 프론트엔드부터 백엔드 API, 서버 배포까지 전체적인 웹 개발을 담당했습니다."
              linkedin="https://linkedin.com/in/dooreplay"
              github="https://github.com/gollumnima"
              avatarColor="from-blue-400 to-purple-500"
            />
            <ProfileCard
              name="박정현"
              role="AI Engineer"
              description="기사 크롤링 시스템 구축과 젠더감수성 분석을 위한 AI 모델 개발을 담당했습니다."
              linkedin="https://linkedin.com/in/example2"
              github="https://github.com/example2"
              avatarColor="from-green-400 to-blue-500"
            />
          </div>
        </section>
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            분석 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
}
