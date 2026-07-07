"use client";

export default function Modal({ title, children, isOpen = false, onClose }) {
  // 중요한 안내나 확인이 필요할 때 화면 위에 띄우는 모달입니다.
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__backdrop" />
      <div className="modal__panel">
        <div className="modal__header">
          <h2 id="modal-title" className="modal__title">
            {title}
          </h2>
          {onClose && (
            <button className="modal__close" type="button" onClick={onClose} aria-label="모달 닫기">
              닫기
            </button>
          )}
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}