import PublicLayout from "@/components/layout/PublicLayout";

export default function HomePage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <PublicLayout>
      <section className="placeholder-page">
        <h1>홈</h1>
        <p>서비스 소개 페이지입니다. 지금은 공통 레이아웃 적용 여부를 확인하는 임시 화면입니다.</p>
      </section>
    </PublicLayout>
  );
}