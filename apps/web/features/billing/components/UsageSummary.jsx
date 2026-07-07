import Card from "@/components/common/Card";

const usageItems = [
  { label: "AI 분석", value: "0 / 3건", percent: 0 },
  { label: "관심 키워드", value: "3 / 3개", percent: 100 },
  { label: "관심 공고", value: "2 / 10개", percent: 20 },
  { label: "이메일 알림", value: "일 1회", percent: 50 },
];

export default function UsageSummary() {
  // 이번 달 사용량을 보여주는 더미 카드입니다. 실제 사용량 계산은 나중에 백엔드와 연결합니다.
  return (
    <Card title="이번 달 사용량 카드">
      <ul className="usage-list">
        {usageItems.map((item) => (
          <li key={item.label} className="usage-list__item">
            <div className="usage-list__top">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <div className="usage-list__bar" aria-hidden="true">
              <span style={{ width: `${item.percent}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}