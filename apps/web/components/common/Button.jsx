"use client";

export default function Button({ children, type = "button", variant = "primary", className = "", ...props }) {
  // 여러 화면에서 같은 모양의 버튼을 재사용하기 위한 컴포넌트입니다.
  return (
    <button className={`button button--${variant} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}