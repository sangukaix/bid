"use client";

export default function SelectBox({ label, id, options = [], className = "", ...props }) {
  // 지역, 상태, 구분처럼 정해진 값 중 하나를 선택할 때 사용합니다.
  return (
    <label className={`field ${className}`} htmlFor={id}>
      {label && <span className="field__label">{label}</span>}
      <select id={id} className="field__input" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}