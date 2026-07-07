import Card from "@/components/common/Card";
import Input from "@/components/common/Input";

export default function KeywordSettingBox() {
  // 포함 키워드는 추천에 더 반영하고, 제외 키워드는 추천에서 줄이는 조건으로 사용할 예정입니다.
  return (
    <Card title="관심 키워드">
      <div className="form-grid form-grid--two">
        <Input id="matching-include-keywords" label="포함 키워드" defaultValue="AI, 교육, 플랫폼" />
        <Input id="matching-exclude-keywords" label="제외 키워드" defaultValue="단순 장비, 인쇄" />
      </div>
    </Card>
  );
}