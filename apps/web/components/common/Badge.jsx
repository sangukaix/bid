export default function Badge({ children, tone = "neutral", className = "" }) {
  // 공고 상태, 분석 상태, 위험도 같은 짧은 상태값을 표시합니다.
  return <span className={`badge badge--${tone} ${className}`}>{children}</span>;
}