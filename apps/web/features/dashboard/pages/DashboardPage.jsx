import Link from "next/link";

import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import Table from "@/components/common/Table";
import AppLayout from "@/components/layout/AppLayout";
import { dummyBids } from "@/data/dummyBids";
import { dummyDashboardStats } from "@/data/dummyDashboardStats";
import { dummyNotifications } from "@/data/dummyNotifications";
import { formatDate } from "@/lib/formatDate";
import { formatMoney } from "@/lib/formatMoney";

const statCards = [
  { label: "신규 추천 공고", value: dummyDashboardStats.recommendedCount, tone: "success" },
  { label: "마감 임박 공고", value: dummyDashboardStats.deadlineCount, tone: "warning" },
  { label: "AI 분석 완료", value: dummyDashboardStats.aiCompletedCount, tone: "success" },
  { label: "확인 필요 공고", value: dummyDashboardStats.needCheckCount, tone: "danger" },
];

const recommendedBids = dummyBids
  .filter((bid) => bid.matchScore >= 80)
  .slice(0, 5);

const deadlineBids = dummyBids
  .filter((bid) => bid.status === "마감임박")
  .slice(0, 4);

const recentNotifications = dummyNotifications.slice(0, 4);

const bidColumns = [
  { key: "title", label: "공고명" },
  { key: "agency", label: "발주기관" },
  { key: "baseAmount", label: "기초금액" },
  { key: "closeDate", label: "마감일" },
  { key: "matchScore", label: "매칭점수" },
  { key: "aiDecision", label: "AI 판단" },
];

function toBidRows(bids) {
  // Table 컴포넌트가 보여주기 쉬운 형태로 더미 데이터를 가공합니다.
  return bids.map((bid) => ({
    id: bid.id,
    title: <Link className="text-link" href={`/bids/${bid.id}`}>{bid.title}</Link>,
    agency: bid.agency,
    baseAmount: formatMoney(bid.baseAmount),
    closeDate: formatDate(bid.closeDate),
    matchScore: <Badge tone="success">{bid.matchScore}점</Badge>,
    aiDecision: <Badge tone={bid.aiDecision === "주의 필요" ? "danger" : "warning"}>{bid.aiDecision}</Badge>,
  }));
}

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Dashboard</p>
          <h1>대시보드</h1>
          <p>오늘 우리 회사가 먼저 확인하면 좋은 입찰공고와 알림을 모았습니다.</p>
        </section>

        <section className="stat-grid" aria-label="대시보드 주요 통계">
          {statCards.map((stat) => (
            <Card key={stat.label} className="stat-card">
              <span className="stat-card__label">{stat.label}</span>
              <strong className="stat-card__value">{stat.value}</strong>
              <Badge tone={stat.tone}>더미 데이터</Badge>
            </Card>
          ))}
        </section>

        <Card title="오늘의 추천 공고 목록">
          <Table columns={bidColumns} rows={toBidRows(recommendedBids)} />
        </Card>

        <div className="content-grid content-grid--two">
          <Card title="마감 임박 공고 목록">
            <Table columns={bidColumns} rows={toBidRows(deadlineBids)} />
          </Card>

          <Card title="최근 알림 목록">
            <ul className="simple-list">
              {recentNotifications.map((notification) => (
                <li key={notification.id} className="simple-list__item">
                  <div>
                    <strong>{notification.title}</strong>
                    <p>{notification.message}</p>
                  </div>
                  <Badge tone={notification.isRead ? "neutral" : "warning"}>
                    {notification.isRead ? "읽음" : "안읽음"}
                  </Badge>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}