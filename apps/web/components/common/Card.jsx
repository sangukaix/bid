export default function Card({ children, title, className = "" }) {
  // 관련 정보를 하나의 박스로 묶을 때 사용하는 카드 컴포넌트입니다.
  return (
    <section className={`card ${className}`}>
      {title && <h2 className="card__title">{title}</h2>}
      {children}
    </section>
  );
}