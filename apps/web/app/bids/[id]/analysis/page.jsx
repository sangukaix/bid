import BidAnalysisPage from "@/features/bids/pages/BidAnalysisPage";

export default async function Page({ params }) {
  // app 폴더는 URL 주소를 담당하고, URL의 id만 실제 화면 컴포넌트로 전달합니다.
  const { id } = await params;

  return <BidAnalysisPage bidId={id} />;
}