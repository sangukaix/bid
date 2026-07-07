import "./globals.css";

export const metadata = {
  title: "bid",
  description: "AI 기반 나라장터 입찰공고 매칭 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/* 모든 페이지가 공통으로 지나가는 Next.js 루트 레이아웃입니다. */}
      <body>{children}</body>
    </html>
  );
}
