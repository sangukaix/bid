import Checkbox from "@/components/common/Checkbox";
import SelectBox from "@/components/common/SelectBox";

const notificationCycleOptions = [
  { value: "immediate", label: "즉시" },
  { value: "daily1", label: "하루 1회" },
  { value: "daily2", label: "하루 2회" },
];

export default function NotificationStep() {
  // 실제 이메일/SMS 발송은 아직 연결하지 않고, 알림 설정 화면만 보여줍니다.
  return (
    <div className="form-stack">
      <div className="section-heading">
        <h2>Step 4. 알림 설정</h2>
        <p>추천 공고와 마감 임박 정보를 어떤 방식으로 받을지 정합니다.</p>
      </div>

      <div className="form-grid form-grid--two">
        <div className="checkbox-panel">
          <Checkbox id="onboarding-email-alert" label="이메일 알림 ON/OFF" defaultChecked />
        </div>
        <div className="checkbox-panel">
          <Checkbox id="onboarding-sms-alert" label="문자 알림 ON/OFF" />
        </div>
        <SelectBox id="onboarding-notification-cycle" label="알림 주기" options={notificationCycleOptions} />
      </div>
    </div>
  );
}