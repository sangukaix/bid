import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import SelectBox from "@/components/common/SelectBox";

const regionOptions = [
  { value: "seoul", label: "서울" },
  { value: "gyeonggi", label: "경기" },
  { value: "incheon", label: "인천" },
  { value: "daejeon", label: "대전" },
  { value: "busan", label: "부산" },
  { value: "other", label: "기타" },
];

const businessOptions = [
  { value: "it", label: "IT/SW" },
  { value: "education", label: "교육/연수" },
  { value: "consulting", label: "컨설팅" },
  { value: "translation", label: "통번역" },
  { value: "etc", label: "기타" },
];

export default function CompanyBasicForm() {
  // 기업 기본정보는 AI가 공고 참가 조건을 비교할 때 가장 먼저 참고하는 정보입니다.
  return (
    <Card title="기업 기본정보">
      <div className="form-grid form-grid--two">
        <Input id="company-name" label="회사명" defaultValue="주식회사 비드" />
        <Input id="company-business-number" label="사업자등록번호" defaultValue="123-45-67890" />
        <Input id="company-ceo-name" label="대표자명" defaultValue="김대표" />
        <SelectBox id="company-region" label="본점 지역" options={regionOptions} defaultValue="seoul" />
        <SelectBox id="company-business-type" label="업종" options={businessOptions} defaultValue="it" />
      </div>
    </Card>
  );
}