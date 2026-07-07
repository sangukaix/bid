import AdminSidebar from "./AdminSidebar";
import AppHeader from "./AppHeader";
import PageContainer from "./PageContainer";

export default function AdminLayout({ children }) {
  // 관리자 페이지에서 반복되는 상단 영역, 관리자 메뉴, 본문 여백을 묶습니다.
  return (
    <div className="app-layout app-layout--admin">
      <AdminSidebar />
      <div className="app-layout__content">
        <AppHeader companyName="관리자" userName="관리자" />
        <main className="app-layout__main">
          <PageContainer>{children}</PageContainer>
        </main>
      </div>
    </div>
  );
}