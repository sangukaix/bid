"use client";

import Link from "next/link";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import AppLayout from "@/components/layout/AppLayout";
import { dummyAiAnalysis } from "@/data/dummyAiAnalysis";
import { dummyBids } from "@/data/dummyBids";
import { formatDate } from "@/lib/formatDate";
import { formatMoney } from "@/lib/formatMoney";

const dummyFiles = ["공고문.pdf", "제안요청서.pdf", "과업지시서.pdf"];

function findBidById(bidId) {
  // URL에서 받은 id는 문자열이므로 숫자로 바꿔 더미 데이터와 비교합니다.
  const numericBidId = Number(bidId);
  return dummyBids.find((bid) => bid.id === numericBidId) ?? dummyBids[0];
}

export default function BidDetailPage({ bidId }) {
  const bid = findBidById(bidId);
  const analysis = dummyAiAnalysis.find((item) => item.bidId === bid.id) ?? dummyAiAnalysis[0];

  function handleFavoriteClick() {
    alert("관심저장 기능은 아직 더미 화면입니다. 실제 저장은 나중에 연결합니다.");
  }

  return (
    <AppLayout>
      <div className="page-stack">
        <section className="detail-hero">
          <div>
            <p className="page-heading__eyebrow">Bid Detail</p>
            <h1>{bid.title}</h1>
            <p>{bid.agency} · 공고번호 {bid.bidNo}</p>
          </div>
          <div className="detail-hero__actions">
            <Badge tone={bid.status === "마감임박" ? "warning" : "success"}>{bid.status}</Badge>
            <Badge tone="neutral">마감 {formatDate(bid.closeDate)}</Badge>
            <Button variant="secondary" onClick={handleFavoriteClick}>
              {bid.isFavorite ? "관심저장됨" : "관심저장"}
            </Button>
          </div>
        </section>

        <Card title="핵심 정보">
          <dl className="info-grid info-grid--wide">
            <div><dt>기초금액</dt><dd>{formatMoney(bid.baseAmount)}</dd></div>
            <div><dt>추정가격</dt><dd>{formatMoney(bid.estimatedPrice)}</dd></div>
            <div><dt>공고일</dt><dd>{formatDate(bid.noticeDate)}</dd></div>
            <div><dt>마감일</dt><dd>{formatDate(bid.closeDate)}</dd></div>
            <div><dt>개찰일</dt><dd>{formatDate(bid.openDate)}</dd></div>
            <div><dt>업무구분</dt><dd>{bid.businessType}</dd></div>
            <div><dt>계약방법</dt><dd>{bid.contractMethod}</dd></div>
            <div><dt>낙찰자결정방법</dt><dd>{bid.awardMethod}</dd></div>
            <div><dt>지역제한</dt><dd>{bid.regionLimit}</dd></div>
            <div><dt>면허제한</dt><dd>{bid.licenseLimit}</dd></div>
          </dl>
        </Card>

        <Card title="AI 요약 미리보기">
          <div className="summary-block">
            <p>{analysis.summary}</p>
            <dl className="info-grid">
              <div><dt>입찰 가능성</dt><dd><Badge tone="warning">{analysis.fitLevel}</Badge></dd></div>
              <div><dt>적합도 점수</dt><dd>{analysis.fitScore}점</dd></div>
            </dl>
          </div>

          <div className="content-grid content-grid--two">
            <div>
              <h3 className="subsection-title">확인 필요 항목</h3>
              <ul className="check-list">
                {analysis.checkPoints.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="subsection-title">위험사항</h3>
              <ul className="check-list check-list--danger">
                {analysis.risks.map((risk) => <li key={risk}>{risk}</li>)}
              </ul>
            </div>
          </div>

          <div className="action-row action-row--end">
            <Link className="button button--primary" href={`/bids/${bid.id}/analysis`}>
              AI 분석 상세보기
            </Link>
          </div>
        </Card>

        <div className="content-grid content-grid--two">
          <Card title="첨부파일 더미 리스트">
            <ul className="simple-list">
              {dummyFiles.map((fileName) => (
                <li key={fileName} className="simple-list__item">
                  <span>{fileName}</span>
                  <Badge tone="neutral">더미</Badge>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="메모">
            <label className="field" htmlFor="bidMemo">
              <span className="field__label">내부 검토 메모</span>
              <textarea
                id="bidMemo"
                className="field__input field__textarea"
                placeholder="이 공고를 검토하면서 기억할 내용을 적어두세요. 아직 저장되지는 않습니다."
              />
            </label>
            <p className="helper-text">메모 저장 기능은 아직 연결하지 않았습니다.</p>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}