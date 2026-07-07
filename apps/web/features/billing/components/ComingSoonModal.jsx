import Modal from "@/components/common/Modal";

export default function ComingSoonModal({ isOpen, onClose }) {
  // 실제 결제 연동은 금지되어 있으므로 준비중 안내만 보여줍니다.
  return (
    <Modal title="결제 기능 안내" isOpen={isOpen} onClose={onClose}>
      <div className="modal-message">
        <strong>결제 기능은 준비중입니다.</strong>
        <p>곧 이용하실 수 있도록 준비 중입니다.</p>
      </div>
    </Modal>
  );
}