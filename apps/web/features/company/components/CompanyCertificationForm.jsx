import Card from "@/components/common/Card";
import Textarea from "@/components/common/Textarea";

export default function CompanyCertificationForm() {
  // 인증 정보는 가점이나 필수 자격 조건 검토에 사용할 수 있습니다.
  return (
    <Card title="보유 인증">
      <Textarea
        id="company-certifications"
        label="보유 인증"
        defaultValue="벤처기업확인서\nISO 9001"
      />
    </Card>
  );
}