import Footer from "./Footer";
import PageContainer from "./PageContainer";
import PublicHeader from "./PublicHeader";

export default function PublicLayout({ children, showFooter = true }) {
  // 비로그인 페이지에서 반복되는 상단 메뉴, 본문 여백, 푸터를 한 번에 묶습니다.
  return (
    <div className="public-layout">
      <PublicHeader />
      <main className="public-layout__main">
        <PageContainer>{children}</PageContainer>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}