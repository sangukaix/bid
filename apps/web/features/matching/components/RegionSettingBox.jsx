import Card from "@/components/common/Card";
import SelectBox from "@/components/common/SelectBox";

const regionOptions = [
  { value: "all", label: "전국" },
  { value: "seoul", label: "서울" },
  { value: "gyeonggi", label: "경기" },
  { value: "incheon", label: "인천" },
  { value: "other", label: "기타" },
];

export default function RegionSettingBox() {
  // 지역 조건은 지역제한이 있는 공고를 걸러낼 때 사용할 예정입니다.
  return (
    <Card title="지역 조건">
      <div className="form-grid form-grid--two">
        <SelectBox id="matching-interest-region" label="관심 지역" options={regionOptions} defaultValue="all" />
        <SelectBox id="matching-exclude-region" label="제외 지역" options={regionOptions} defaultValue="other" />
      </div>
    </Card>
  );
}