import Link from "next/link";

const sidebarMenus = [
  { label: "대시보드", href: "/dashboard" },
  { label: "추천 공고", href: "/bids/recommended" },
  { label: "통합 검색", href: "/bids/search" },
  { label: "관심 공고", href: "/bids/favorites" },
  { label: "입찰 일정", href: "/calendar" },
  { label: "AI 분석 리포트", href: "/bids/1/analysis" },
  { label: "알림 이력", href: "/notifications" },
  { label: "기업정보 설정", href: "/settings/company" },
  { label: "매칭 조건 설정", href: "/settings/matching" },
  { label: "요금제/결제", href: "/billing" },
];

export default function Sidebar() {
  // 기업회원 화면에서 왼쪽에 놓을 메뉴입니다. 현재 단계에서는 링크만 준비합니다.
  return (
    <aside className="sidebar" aria-label="기업회원 메뉴">
      <div className="sidebar__title">기업 메뉴</div>
      <nav className="sidebar__nav">
        {sidebarMenus.map((menu) => (
          <Link key={menu.href} className="sidebar__link" href={menu.href}>
            {menu.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}