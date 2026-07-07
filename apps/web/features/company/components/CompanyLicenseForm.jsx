import Card from "@/components/common/Card";
import Textarea from "@/components/common/Textarea";

export default function CompanyLicenseForm() {
  // 면허 정보는 공고의 참가자격 조건을 확인할 때 사용될 예정입니다.
  return (
    <Card title="보유 면허">
      <Textarea
        id="company-licenses"
        label="보유 면허"
        defaultValue="소프트웨어사업자\n직접생산확인증명서"
      />
    </Card>
  );
}