import PublicLayout from "@/components/layout/PublicLayout";

export default function LoginPage() {
  // Step 2.5에서는 공통 레이아웃만 적용하고, 실제 화면 내용은 아직 간단한 안내문으로 유지합니다.
  return (
    <PublicLayout>
      <section className="placeholder-page">
        <h1>로그인</h1>
        <p>사용자가 로그인할 페이지입니다. 실제 로그인 기능은 나중에 연결합니다.</p>
      </section>
    </PublicLayout>
  );
}