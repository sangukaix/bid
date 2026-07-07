import Link from "next/link";

const adminMenus = [
  { label: "관리자 홈", href: "/admin" },
  { label: "기업 회원 관리", href: "/admin/companies" },
  { label: "공고 관리", href: "/admin/bids" },
  { label: "AI 분석 관리", href: "/admin/ai-jobs" },
  { label: "알림 관리", href: "/admin/notifications" },
  { label: "로그 관리", href: "/admin/logs" },
];

export default function AdminSidebar() {
  // 관리자 화면에서 왼쪽에 놓을 메뉴입니다. 권한 처리는 백엔드와 로그인 연결 후 추가합니다.
  return (
    <aside className="sidebar sidebar--admin" aria-label="관리자 메뉴">
      <div className="sidebar__title">관리자 메뉴</div>
      <nav className="sidebar__nav">
        {adminMenus.map((menu) => (
          <Link key={menu.href} className="sidebar__link" href={menu.href}>
            {menu.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}