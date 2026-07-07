import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";

export default function CompanyPerformanceForm() {
  // 주요 실적과 투입 인력은 AI가 회사 적합도를 판단할 때 참고할 예정입니다.
  return (
    <Card title="주요 실적 및 인력">
      <div className="form-stack">
        <Textarea
          id="company-performance"
          label="주요 실적"
          defaultValue="공공기관 LMS 고도화 사업\n온라인 교육 플랫폼 운영 대행"
        />
        <Input id="company-people" label="투입 가능 인력" defaultValue="PM 1명, 개발자 3명, 디자이너 1명" />
      </div>
    </Card>
  );
}