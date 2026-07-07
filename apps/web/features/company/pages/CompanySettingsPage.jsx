import AppLayout from "@/components/layout/AppLayout";

export default function CompanySettingsPage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <AppLayout>
      <section className="placeholder-page">
        <h1>기업정보 설정</h1>
        <p>회사 기본정보, 면허, 인증, 실적을 관리할 페이지입니다.</p>
      </section>
    </AppLayout>
  );
}