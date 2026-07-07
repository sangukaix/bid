import Link from "next/link";

const publicMenus = [
  { label: "서비스 소개", href: "/" },
  { label: "기능", href: "/#features" },
  { label: "요금제", href: "/billing" },
];

export default function PublicHeader() {
  // 비로그인 사용자가 보는 상단 메뉴입니다. 실제 로그인 상태 처리는 나중에 연결합니다.
  return (
    <header className="public-header">
      <Link className="public-header__logo" href="/">
        bid
      </Link>

      <nav className="public-header__nav" aria-label="공개 페이지 메뉴">
        {publicMenus.map((menu) => (
          <Link key={menu.href} className="public-header__link" href={menu.href}>
            {menu.label}
          </Link>
        ))}
      </nav>

      <div className="public-header__actions">
        <Link className="public-header__login" href="/login">
          로그인
        </Link>
        <Link className="public-header__start" href="/signup">
          무료로 시작하기
        </Link>
      </div>
    </header>
  );
}