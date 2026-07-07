"use client";

import Link from "next/link";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import SelectBox from "@/components/common/SelectBox";
import AppLayout from "@/components/layout/AppLayout";
import { dummyBids } from "@/data/dummyBids";
import { formatDate } from "@/lib/formatDate";
import { formatMoney } from "@/lib/formatMoney";

const businessTypeOptions = [
  { value: "all", label: "전체 업무구분" },
  { value: "education", label: "교육/콘텐츠" },
  { value: "system", label: "시스템/AI" },
  { value: "consulting", label: "컨설팅" },
];

const aiStatusOptions = [
  { value: "all", label: "전체 AI 상태" },
  { value: "done", label: "분석완료" },
  { value: "pending", label: "분석대기" },
  { value: "running", label: "분석중" },
];

const favoriteOptions = [
  { value: "all", label: "전체" },
  { value: "favorite", label: "관심공고만" },
];

export default function RecommendedBidsPage() {
  function handleFavoriteClick() {
    // Step 4에서는 실제 저장 기능 없이 사용자에게 임시 안내만 보여줍니다.
    alert("관심저장 기능은 아직 더미 화면입니다. 실제 저장은 나중에 연결합니다.");
  }

  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Recommended Bids</p>
          <h1>추천 공고</h1>
          <p>기업 조건과 관심 키워드를 기준으로 추천된 공고입니다.</p>
        </section>

        <Card title="간단 필터">
          <div className="filter-grid">
            <SelectBox id="businessType" label="업무구분" options={businessTypeOptions} />
            <SelectBox id="aiStatus" label="AI 상태" options={aiStatusOptions} />
            <SelectBox id="favoriteOnly" label="관심공고 여부" options={favoriteOptions} />
          </div>
        </Card>

        <section className="bid-card-grid" aria-label="추천 공고 목록">
          {dummyBids.map((bid) => (
            <Card key={bid.id} className="bid-card">
              <div className="bid-card__header">
                <div>
                  <h2>{bid.title}</h2>
                  <p>{bid.agency}</p>
                </div>
                <Badge tone={bid.matchScore >= 85 ? "success" : "warning"}>{bid.matchScore}점</Badge>
              </div>

              <dl className="info-grid">
                <div>
                  <dt>업무구분</dt>
                  <dd>{bid.businessType}</dd>
                </div>
                <div>
                  <dt>기초금액</dt>
                  <dd>{formatMoney(bid.baseAmount)}</dd>
                </div>
                <div>
                  <dt>마감일</dt>
                  <dd>{formatDate(bid.closeDate)}</dd>
                </div>
                <div>
                  <dt>지역제한</dt>
                  <dd>{bid.regionLimit}</dd>
                </div>
                <div>
                  <dt>면허제한</dt>
                  <dd>{bid.licenseLimit}</dd>
                </div>
                <div>
                  <dt>AI 판단</dt>
                  <dd><Badge tone={bid.aiDecision === "주의 필요" ? "danger" : "warning"}>{bid.aiDecision}</Badge></dd>
                </div>
              </dl>

              <p className="risk-text">{bid.riskSummary}</p>

              <div className="action-row">
                <Link className="button button--primary" href={`/bids/${bid.id}`}>
                  상세보기
                </Link>
                <Button variant="secondary" onClick={handleFavoriteClick}>
                  {bid.isFavorite ? "관심저장됨" : "관심저장"}
                </Button>
              </div>
            </Card>
          ))}
        </section>
      </div>
    </AppLayout>
  );
}