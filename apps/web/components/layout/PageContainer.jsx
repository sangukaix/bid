export default function PageContainer({ children, size = "wide" }) {
  // 페이지 본문 폭과 좌우 여백을 일정하게 맞추는 공통 감싸개입니다.
  return <div className={`page-container page-container--${size}`}>{children}</div>;
}