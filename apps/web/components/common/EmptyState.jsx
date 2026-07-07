export default function EmptyState({ title = "데이터가 없습니다.", description = "조건을 바꾸거나 나중에 다시 확인해 주세요." }) {
  // 목록이나 검색 결과가 비어 있을 때 보여주는 안내 영역입니다.
  return (
    <div className="empty-state">
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__description">{description}</p>
    </div>
  );
}