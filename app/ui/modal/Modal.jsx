import classes from './modal.module.css';

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        {children}
      </div>
    </>
  );
}

export default Modal;