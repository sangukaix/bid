import AppHeader from "./AppHeader";
import PageContainer from "./PageContainer";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  // 기업회원 페이지에서 반복되는 상단 영역, 왼쪽 메뉴, 본문 여백을 묶습니다.
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-layout__content">
        <AppHeader />
        <main className="app-layout__main">
          <PageContainer>{children}</PageContainer>
        </main>
      </div>
    </div>
  );
}