import Link from "next/link";

import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import Table from "@/components/common/Table";
import AppLayout from "@/components/layout/AppLayout";
import { dummyBids } from "@/data/dummyBids";
import { formatDate } from "@/lib/formatDate";

const statusTabs = ["전체", "검토전", "검토중", "참여검토", "보류"];

const favoriteBids = dummyBids.filter((bid) => bid.isFavorite);

const columns = [
  { key: "title", label: "공고명" },
  { key: "agency", label: "발주기관" },
  { key: "closeDate", label: "마감일" },
  { key: "matchScore", label: "매칭점수" },
  { key: "aiDecision", label: "AI 판단" },
  { key: "status", label: "상태" },
  { key: "action", label: "상세" },
];

const rows = favoriteBids.map((bid) => ({
  id: bid.id,
  title: bid.title,
  agency: bid.agency,
  closeDate: formatDate(bid.closeDate),
  matchScore: <Badge tone="success">{bid.matchScore}점</Badge>,
  aiDecision: <Badge tone={bid.aiDecision === "주의 필요" ? "danger" : "warning"}>{bid.aiDecision}</Badge>,
  status: <Badge tone={bid.status === "마감임박" ? "warning" : "neutral"}>{bid.status}</Badge>,
  action: <Link className="text-link" href={`/bids/${bid.id}`}>상세보기</Link>,
}));

export default function FavoriteBidsPage() {
  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Favorite Bids</p>
          <h1>관심 공고</h1>
          <p>관심저장된 공고만 모아 보여줍니다. 상태 변경 기능은 아직 연결하지 않았습니다.</p>
        </section>

        <Card title="상태 필터">
          <div className="tabs tabs--static" role="tablist" aria-label="관심 공고 상태 필터">
            {statusTabs.map((tab, index) => (
              <button
                key={tab}
                className={`tabs__button ${index === 0 ? "tabs__button--active" : ""}`}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="helper-text">현재 단계에서는 필터 모양만 보여주며 실제 목록 변경은 하지 않습니다.</p>
        </Card>

        <Card title="관심 공고 목록">
          <Table columns={columns} rows={rows} />
        </Card>
      </div>
    </AppLayout>
  );
}