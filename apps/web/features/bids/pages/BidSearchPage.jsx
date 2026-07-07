"use client";

import Link from "next/link";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import SelectBox from "@/components/common/SelectBox";
import Table from "@/components/common/Table";
import AppLayout from "@/components/layout/AppLayout";
import { dummyBids } from "@/data/dummyBids";
import { formatDate } from "@/lib/formatDate";
import { formatMoney } from "@/lib/formatMoney";

const businessTypeOptions = [
  { value: "all", label: "전체 업무구분" },
  { value: "education", label: "교육/콘텐츠" },
  { value: "system", label: "시스템/AI" },
  { value: "consulting", label: "컨설팅" },
  { value: "operation", label: "운영 대행" },
];

const regionOptions = [
  { value: "all", label: "전체 지역" },
  { value: "none", label: "지역제한 없음" },
  { value: "capital", label: "수도권" },
  { value: "nationwide", label: "전국" },
];

const aiStatusOptions = [
  { value: "all", label: "전체 AI 상태" },
  { value: "done", label: "분석완료" },
  { value: "running", label: "분석중" },
  { value: "pending", label: "분석대기" },
];

const resultColumns = [
  { key: "title", label: "공고명" },
  { key: "agency", label: "발주기관" },
  { key: "businessType", label: "업무구분" },
  { key: "baseAmount", label: "기초금액" },
  { key: "closeDate", label: "마감일" },
  { key: "regionLimit", label: "지역제한" },
  { key: "aiDecision", label: "AI 판단" },
  { key: "action", label: "상세" },
];

const resultRows = dummyBids.map((bid) => ({
  id: bid.id,
  title: bid.title,
  agency: bid.agency,
  businessType: bid.businessType,
  baseAmount: formatMoney(bid.baseAmount),
  closeDate: formatDate(bid.closeDate),
  regionLimit: bid.regionLimit,
  aiDecision: <Badge tone={bid.aiDecision === "주의 필요" ? "danger" : "warning"}>{bid.aiDecision}</Badge>,
  action: <Link className="text-link" href={`/bids/${bid.id}`}>상세보기</Link>,
}));

export default function BidSearchPage() {
  function handleSearchClick() {
    // Step 4 추가 작업에서는 실제 검색 대신 안내 메시지만 보여줍니다.
    alert("검색 기능은 추후 API 연결 예정입니다.");
  }

  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Bid Search</p>
          <h1>통합 공고 검색</h1>
          <p>나라장터 공고를 키워드, 기관, 지역, 금액, 마감일 기준으로 검색하는 화면입니다.</p>
        </section>

        <Card title="검색 영역">
          <div className="search-form-grid">
            <Input id="keyword" label="키워드" placeholder="예: AI 교육, LMS, 통번역" />
            <SelectBox id="businessType" label="업무구분" options={businessTypeOptions} />
            <SelectBox id="region" label="지역" options={regionOptions} />
            <SelectBox id="aiStatus" label="AI 상태" options={aiStatusOptions} />
            <div className="form-action-cell">
              <Button onClick={handleSearchClick}>검색</Button>
            </div>
          </div>
        </Card>

        <Card title="상세 필터 영역">
          <div className="filter-grid filter-grid--five">
            <Input id="agency" label="발주기관" placeholder="기관명을 입력하세요" />
            <Input id="demandOrg" label="수요기관" placeholder="수요기관명을 입력하세요" />
            <Input id="minAmount" label="최소 금액" placeholder="예: 50000000" inputMode="numeric" />
            <Input id="maxAmount" label="최대 금액" placeholder="예: 200000000" inputMode="numeric" />
            <Input id="deadline" label="마감일" type="date" />
          </div>
          <p className="helper-text">현재 단계에서는 필터 값을 입력해도 결과가 바뀌지 않습니다.</p>
        </Card>

        <Card title="검색 결과 테이블">
          <Table columns={resultColumns} rows={resultRows} />
        </Card>
      </div>
    </AppLayout>
  );
}