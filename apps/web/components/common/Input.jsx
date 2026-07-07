"use client";

export default function Input({ label, id, className = "", ...props }) {
  // 짧은 텍스트를 입력받을 때 사용하는 공통 입력창입니다.
  return (
    <label className={`field ${className}`} htmlFor={id}>
      {label && <span className="field__label">{label}</span>}
      <input id={id} className="field__input" {...props} />
    </label>
  );
}