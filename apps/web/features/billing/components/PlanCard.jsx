import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function PlanCard({ name, price, description, features = [], actionLabel, highlighted = false, onAction }) {
  // 요금제 하나를 카드 형태로 보여줍니다. 버튼은 실제 결제 대신 준비중 모달을 열 때 사용합니다.
  return (
    <Card className={`plan-card ${highlighted ? "plan-card--highlighted" : ""}`}>
      <div className="plan-card__header">
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        {highlighted && <Badge tone="success">추천</Badge>}
      </div>

      <strong className="plan-card__price">{price}</strong>

      <ul className="check-list">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {actionLabel && (
        <Button variant={highlighted ? "primary" : "secondary"} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Card>
  );
}