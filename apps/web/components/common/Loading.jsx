export default function Loading({ message = "불러오는 중입니다." }) {
  // 데이터를 가져오는 동안 사용자에게 대기 상태를 알려줍니다.
  return (
    <div className="loading" role="status">
      <span className="loading__dot" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}