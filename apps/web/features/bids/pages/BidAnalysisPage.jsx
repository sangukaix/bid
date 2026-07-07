import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import AppLayout from "@/components/layout/AppLayout";
import { dummyAiAnalysis } from "@/data/dummyAiAnalysis";
import { dummyBids } from "@/data/dummyBids";

function findBidById(bidId) {
  const numericBidId = Number(bidId);
  return dummyBids.find((bid) => bid.id === numericBidId) ?? dummyBids[0];
}

function findAnalysisByBidId(bidId) {
  return dummyAiAnalysis.find((analysis) => analysis.bidId === bidId) ?? dummyAiAnalysis[0];
}

export default function BidAnalysisPage({ bidId }) {
  const bid = findBidById(bidId);
  const analysis = findAnalysisByBidId(bid.id);

  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">AI Analysis</p>
          <h1>{bid.title}</h1>
          <p>더미 AI 분석 결과를 기준으로 공고의 적합성과 확인 사항을 정리했습니다.</p>
        </section>

        <Card title="AI 분석 상태">
          <dl className="info-grid">
            <div><dt>AI 분석 상태</dt><dd><Badge tone="success">{bid.aiStatus}</Badge></dd></div>
            <div><dt>입찰 가능성</dt><dd><Badge tone="warning">{analysis.fitLevel}</Badge></dd></div>
            <div><dt>적합도 점수</dt><dd>{analysis.fitScore}점</dd></div>
          </dl>
        </Card>

        <Card title="공고 요약">
          <p className="summary-text">{analysis.summary}</p>
        </Card>

        <div className="content-grid content-grid--two">
          <Card title="좋은 점">
            <ul className="check-list">
              {analysis.goodPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </Card>
          <Card title="확인 필요 항목">
            <ul className="check-list">
              {analysis.checkPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </Card>
        </div>

        <div className="content-grid content-grid--two">
          <Card title="위험사항">
            <ul className="check-list check-list--danger">
              {analysis.risks.map((risk) => <li key={risk}>{risk}</li>)}
            </ul>
          </Card>
          <Card title="제출서류">
            <ul className="check-list">
              {analysis.requiredDocuments.map((documentName) => <li key={documentName}>{documentName}</li>)}
            </ul>
          </Card>
        </div>

        <Card title="세부 요약">
          <dl className="info-grid info-grid--wide">
            <div><dt>마감 요약</dt><dd>{analysis.deadlineSummary}</dd></div>
            <div><dt>예산/금액 요약</dt><dd>{analysis.budgetSummary}</dd></div>
            <div><dt>참가자격 요약</dt><dd>{analysis.qualificationSummary}</dd></div>
            <div><dt>회사 기준 판단</dt><dd>{analysis.companyFit}</dd></div>
          </dl>
        </Card>

        <Card title="AI 면책 문구" className="disclaimer-card">
          <p>{analysis.disclaimer}</p>
        </Card>
      </div>
    </AppLayout>
  );
}