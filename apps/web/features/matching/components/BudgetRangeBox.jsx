import Card from "@/components/common/Card";
import Input from "@/components/common/Input";

export default function BudgetRangeBox() {
  // 금액과 마감 여유일은 우리 회사가 검토 가능한 공고인지 판단하는 기준입니다.
  return (
    <Card title="예산 및 마감 조건">
      <div className="form-grid form-grid--three">
        <Input id="matching-min-budget" label="희망 금액 최소" type="number" defaultValue="10000000" />
        <Input id="matching-max-budget" label="희망 금액 최대" type="number" defaultValue="150000000" />
        <Input id="matching-deadline-buffer" label="마감일 최소 여유일" type="number" defaultValue="7" />
      </div>
    </Card>
  );
}