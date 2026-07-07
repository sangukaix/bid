import Input from "@/components/common/Input";
import SelectBox from "@/components/common/SelectBox";

const regionOptions = [
  { value: "", label: "본점 지역 선택" },
  { value: "seoul", label: "서울" },
  { value: "gyeonggi", label: "경기" },
  { value: "incheon", label: "인천" },
  { value: "daejeon", label: "대전" },
  { value: "busan", label: "부산" },
  { value: "other", label: "기타" },
];

const businessOptions = [
  { value: "", label: "업종 선택" },
  { value: "it", label: "IT/SW" },
  { value: "education", label: "교육/연수" },
  { value: "consulting", label: "컨설팅" },
  { value: "translation", label: "통번역" },
  { value: "etc", label: "기타" },
];

export default function CompanyBasicStep() {
  // 회사 기본정보는 나중에 기업정보 저장 API로 전송될 입력값입니다.
  return (
    <div className="form-stack">
      <div className="section-heading">
        <h2>Step 1. 회사 기본정보</h2>
        <p>AI 매칭에 사용할 회사와 담당자 기본 정보를 입력합니다.</p>
      </div>

      <div className="form-grid form-grid--two">
        <Input id="onboarding-company-name" label="회사명" placeholder="주식회사 비드" />
        <Input id="onboarding-business-number" label="사업자등록번호" placeholder="000-00-00000" />
        <Input id="onboarding-ceo-name" label="대표자명" placeholder="김대표" />
        <SelectBox id="onboarding-region" label="본점 지역" options={regionOptions} />
        <SelectBox id="onboarding-business-type" label="업종" options={businessOptions} />
        <Input id="onboarding-manager-name" label="담당자 이름" placeholder="홍길동" />
        <Input id="onboarding-manager-email" label="담당자 이메일" type="email" placeholder="manager@example.com" />
        <Input id="onboarding-manager-phone" label="담당자 전화번호" placeholder="010-0000-0000" />
      </div>
    </div>
  );
}