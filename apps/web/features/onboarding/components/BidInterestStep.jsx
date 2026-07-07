import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import SelectBox from "@/components/common/SelectBox";

const bidTypes = ["용역", "물품", "공사", "외자"];
const interestFields = ["IT/SW", "교육/연수", "컨설팅", "해외사업", "통번역", "플랫폼 구축", "AI/데이터"];

const regionOptions = [
  { value: "", label: "관심 지역 선택" },
  { value: "all", label: "전국" },
  { value: "seoul", label: "서울" },
  { value: "gyeonggi", label: "경기" },
  { value: "incheon", label: "인천" },
  { value: "other", label: "기타" },
];

export default function BidInterestStep() {
  // 체크박스와 입력값은 현재 화면 확인용이며 실제 검색 조건 저장은 아직 하지 않습니다.
  return (
    <div className="form-stack">
      <div className="section-heading">
        <h2>Step 2. 입찰 관심 조건</h2>
        <p>추천 공고를 걸러낼 때 사용할 관심 업무, 분야, 키워드 조건입니다.</p>
      </div>

      <div className="form-stack">
        <div>
          <h3 className="subsection-title">관심 업무구분</h3>
          <div className="checkbox-grid checkbox-grid--four">
            {bidTypes.map((bidType) => (
              <Checkbox key={bidType} id={`onboarding-bid-type-${bidType}`} label={bidType} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="subsection-title">관심 분야</h3>
          <div className="checkbox-grid checkbox-grid--three">
            {interestFields.map((field) => (
              <Checkbox key={field} id={`onboarding-interest-${field}`} label={field} />
            ))}
          </div>
        </div>

        <div className="form-grid form-grid--two">
          <Input id="onboarding-include-keywords" label="관심 키워드" placeholder="예: AI, 교육, 플랫폼" />
          <Input id="onboarding-exclude-keywords" label="제외 키워드" placeholder="예: 단순 장비, 유지보수 제외" />
          <SelectBox id="onboarding-interest-region" label="관심 지역" options={regionOptions} />
          <Input id="onboarding-min-budget" label="희망 금액 최소" type="number" placeholder="예: 10000000" />
          <Input id="onboarding-max-budget" label="희망 금액 최대" type="number" placeholder="예: 100000000" />
        </div>
      </div>
    </div>
  );
}