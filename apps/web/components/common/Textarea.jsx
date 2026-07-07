"use client";

export default function Textarea({ label, id, className = "", ...props }) {
  // 메모나 설명처럼 긴 글을 입력받을 때 사용하는 공통 입력창입니다.
  return (
    <label className={`field ${className}`} htmlFor={id}>
      {label && <span className="field__label">{label}</span>}
      <textarea id={id} className="field__input field__textarea" {...props} />
    </label>
  );
}