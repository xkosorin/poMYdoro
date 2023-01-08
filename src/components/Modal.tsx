import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  isShown: boolean;
  toggleModal: () => void;
}

const Modal = (props: Props) => {
  const style = {
    width: `${props.width || "unset"}`,
    height: `${props.width || "unset"}`,
  };

  return (
    <>
      {props.isShown && (
        <div className="modal-overlay" onClick={props.toggleModal}>
          <div
            className="modal-box"
            style={style}
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
