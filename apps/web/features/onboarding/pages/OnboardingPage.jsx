import PublicLayout from "@/components/layout/PublicLayout";

export default function OnboardingPage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <PublicLayout showFooter={false}>
      <section className="placeholder-page">
        <h1>온보딩</h1>
        <p>가입 후 기업정보와 관심 입찰 조건을 입력할 페이지입니다.</p>
      </section>
    </PublicLayout>
  );
}