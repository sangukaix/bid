"use client";

export default function Checkbox({ label, id, className = "", ...props }) {
  // 켜기/끄기 또는 여러 항목 선택에 사용하는 체크박스입니다.
  return (
    <label className={`checkbox ${className}`} htmlFor={id}>
      <input id={id} className="checkbox__input" type="checkbox" {...props} />
      <span className="checkbox__label">{label}</span>
    </label>
  );
}