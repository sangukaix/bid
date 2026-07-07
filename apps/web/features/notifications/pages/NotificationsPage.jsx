import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import Table from "@/components/common/Table";
import AppLayout from "@/components/layout/AppLayout";
import { dummyNotifications } from "@/data/dummyNotifications";
import { formatDate } from "@/lib/formatDate";

const notificationStats = [
  { label: "전체 알림", value: dummyNotifications.length, tone: "neutral" },
  { label: "읽지 않은 알림", value: dummyNotifications.filter((item) => !item.isRead).length, tone: "warning" },
  { label: "발송 성공", value: dummyNotifications.filter((item) => item.status === "발송완료").length, tone: "success" },
  { label: "발송 실패", value: dummyNotifications.filter((item) => item.status === "발송실패").length, tone: "danger" },
];

const filterTabs = ["전체", "이메일", "SMS", "카카오 알림톡", "읽지 않음"];

const columns = [
  { key: "type", label: "알림 종류" },
  { key: "title", label: "제목" },
  { key: "bidTitle", label: "관련 공고" },
  { key: "channel", label: "채널" },
  { key: "status", label: "상태" },
  { key: "sentAt", label: "발송일시" },
  { key: "isRead", label: "읽음 여부" },
];

const rows = dummyNotifications.map((notification) => ({
  id: notification.id,
  type: <Badge tone="neutral">{notification.type}</Badge>,
  title: notification.title,
  bidTitle: notification.bidTitle || "-",
  channel: notification.channel,
  status: (
    <Badge tone={notification.status === "발송완료" ? "success" : notification.status === "발송실패" ? "danger" : "warning"}>
      {notification.status}
    </Badge>
  ),
  sentAt: formatDate(notification.sentAt),
  isRead: <Badge tone={notification.isRead ? "neutral" : "warning"}>{notification.isRead ? "읽음" : "읽지 않음"}</Badge>,
}));

export default function NotificationsPage() {
  return (
    <AppLayout>
      <div className="page-stack">
        <section className="page-heading">
          <p className="page-heading__eyebrow">Notifications</p>
          <h1>알림 이력</h1>
          <p>신규 추천 공고, AI 분석 완료, 마감 임박 알림 내역을 확인합니다.</p>
        </section>

        <section className="stat-grid" aria-label="알림 요약">
          {notificationStats.map((stat) => (
            <Card key={stat.label} className="stat-card">
              <span className="stat-card__label">{stat.label}</span>
              <strong className="stat-card__value">{stat.value}</strong>
              <Badge tone={stat.tone}>더미 데이터</Badge>
            </Card>
          ))}
        </section>

        <Card title="필터 영역">
          <div className="tabs tabs--static" role="tablist" aria-label="알림 필터">
            {filterTabs.map((tab, index) => (
              <button
                key={tab}
                className={`tabs__button ${index === 0 ? "tabs__button--active" : ""}`}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="helper-text">현재 단계에서는 필터 모양만 보여주며 실제 알림 발송이나 읽음 처리는 하지 않습니다.</p>
        </Card>

        <Card title="알림 목록 테이블">
          <Table columns={columns} rows={rows} />
        </Card>
      </div>
    </AppLayout>
  );
}