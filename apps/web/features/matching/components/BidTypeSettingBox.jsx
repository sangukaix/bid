import Card from "@/components/common/Card";
import Checkbox from "@/components/common/Checkbox";

const bidTypes = ["용역", "물품", "공사", "외자"];

export default function BidTypeSettingBox() {
  // 업무구분은 나라장터 공고의 큰 분류를 기준으로 추천 대상을 좁히는 조건입니다.
  return (
    <Card title="업무구분">
      <div className="checkbox-grid checkbox-grid--four">
        {bidTypes.map((bidType) => (
          <Checkbox key={bidType} id={`matching-bid-type-${bidType}`} label={bidType} defaultChecked={bidType === "용역"} />
        ))}
      </div>
    </Card>
  );
}