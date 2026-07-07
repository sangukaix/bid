"use client";

export default function Tabs({ tabs = [], activeKey, onChange }) {
  // 상세 페이지 안에서 여러 정보를 탭으로 나누어 보여줄 때 사용합니다.
  return (
    <div className="tabs" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`tabs__button ${tab.key === activeKey ? "tabs__button--active" : ""}`}
          type="button"
          onClick={() => onChange?.(tab.key)}
          role="tab"
          aria-selected={tab.key === activeKey}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}