import Input from "@/components/common/Input";
import SelectBox from "@/components/common/SelectBox";
import Textarea from "@/components/common/Textarea";

const performanceOptions = [
  { value: "", label: "유사 실적 여부 선택" },
  { value: "yes", label: "있음" },
  { value: "no", label: "없음" },
  { value: "unknown", label: "확인 필요" },
];

export default function CompanyAbilityStep() {
  // 회사 역량 정보는 공고 참가자격과 비교할 때 쓰일 예정입니다.
  return (
    <div className="form-stack">
      <div className="section-heading">
        <h2>Step 3. 회사 역량</h2>
        <p>보유 면허, 인증, 실적, 인력 정보를 간단히 정리합니다.</p>
      </div>

      <div className="form-grid form-grid--two">
        <Input id="onboarding-license" label="보유 면허" placeholder="예: 소프트웨어사업자" />
        <Input id="onboarding-certification" label="보유 인증" placeholder="예: 벤처기업, ISO" />
        <Textarea id="onboarding-performance" label="주요 실적" placeholder="최근 수행한 유사 사업을 간단히 적어주세요." />
        <Textarea id="onboarding-people" label="투입 가능 인력" placeholder="예: PM 1명, 개발자 3명, 디자이너 1명" />
        <SelectBox id="onboarding-recent-performance" label="최근 3년 유사 실적 여부" options={performanceOptions} />
      </div>
    </div>
  );
}