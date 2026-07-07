import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";

export default function CurrentPlanCard() {
  // 현재는 실제 결제 API가 없으므로 고정된 Free 플랜 더미 정보를 보여줍니다.
  return (
    <Card title="현재 요금제 카드">
      <dl className="info-grid">
        <div>
          <dt>현재 요금제</dt>
          <dd>Free</dd>
        </div>
        <div>
          <dt>상태</dt>
          <dd><Badge tone="success">무료 체험</Badge></dd>
        </div>
        <div>
          <dt>다음 결제일</dt>
          <dd>없음</dd>
        </div>
      </dl>
    </Card>
  );
}