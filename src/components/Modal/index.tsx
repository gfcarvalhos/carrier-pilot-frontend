import './styles.css'

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-dialog">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {title && <h2 className="modal-title">{title}</h2>}

        {children}
      </div>
    </div>
  );
};
