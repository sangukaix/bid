export default function AppHeader({ companyName = "샘플 주식회사", userName = "사용자" }) {
  // 로그인 후 기업회원 화면에서 공통으로 사용할 상단 영역입니다.
  // 실제 회사명, 알림 개수, 사용자 정보는 나중에 API와 로그인 기능을 연결한 뒤 바꿉니다.
  return (
    <header className="app-header">
      <div>
        <p className="app-header__label">현재 회사</p>
        <strong className="app-header__company">{companyName}</strong>
      </div>

      <div className="app-header__actions">
        <button className="app-header__icon-button" type="button" aria-label="알림 보기">
          <span aria-hidden="true">알림</span>
        </button>
        <button className="app-header__user-button" type="button">
          {userName} 메뉴
        </button>
      </div>
    </header>
  );
}