"use client";

import AppLayout from "@/components/layout/AppLayout";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Checkbox from "@/components/common/Checkbox";
import SelectBox from "@/components/common/SelectBox";
import BidTypeSettingBox from "@/features/matching/components/BidTypeSettingBox";
import BudgetRangeBox from "@/features/matching/components/BudgetRangeBox";
import KeywordSettingBox from "@/features/matching/components/KeywordSettingBox";
import RegionSettingBox from "@/features/matching/components/RegionSettingBox";

const interestFields = ["IT/SW", "교육/연수", "컨설팅", "해외사업", "통번역", "플랫폼 구축", "AI/데이터"];

const aiModeOptions = [
  { value: "strict", label: "보수적으로 추천" },
  { value: "wide", label: "넓게 추천" },
  { value: "experimental", label: "실험적 추천 포함" },
];

export default function MatchingSettingsPage() {
  const handleSave = (event) => {
    event.preventDefault();
    // 실제 매칭 조건 저장은 API 연결 단계에서 구현합니다.
    alert("매칭 조건 저장 기능은 추후 API 연결 예정입니다.");
  };

  return (
    <AppLayout>
      <form className="page-stack" onSubmit={handleSave}>
        <div className="page-heading">
          <h1>매칭 조건 설정</h1>
          <p>관심 키워드와 조건을 기준으로 추천 공고가 계산됩니다.</p>
        </div>

        <KeywordSettingBox />

        <Card title="관심 분야">
          <div className="checkbox-grid checkbox-grid--three">
            {interestFields.map((field) => (
              <Checkbox key={field} id={`matching-interest-${field}`} label={field} defaultChecked={field === "IT/SW" || field === "AI/데이터"} />
            ))}
          </div>
        </Card>

        <div className="content-grid content-grid--two">
          <BidTypeSettingBox />
          <RegionSettingBox />
        </div>

        <BudgetRangeBox />

        <Card title="AI 추천 방식">
          <SelectBox id="matching-ai-mode" label="추천 방식" options={aiModeOptions} defaultValue="wide" />
        </Card>

        <div className="form-footer form-footer--end">
          <Button type="submit">저장</Button>
        </div>
      </form>
    </AppLayout>
  );
}