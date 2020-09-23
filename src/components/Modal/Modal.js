import React, { useEffect, useRef } from 'react';
import T from 'prop-types';
import { closeProductFormModal } from '../../redux/sagas/productsSagas/productFormSaga';
import useRunSaga from '../../hooks/useRunSaga';
import useOutsideClick from '../../hooks/useOtsideClick';

import Portal from '../Portal/Portal';
import Overlay from '../Overlay/Overlay';

import CloseIcon from '../../assets/img/remove-icon.svg';

const Modal = ({ title, children }) => {
  const ref = useRef();
  const closeModal = useRunSaga(closeProductFormModal);

  const handleKeypress = e => {
    if (e.code !== 'Escape') return;

    closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);

    return () => window.removeEventListener('keydown', handleKeypress);
  });

  useOutsideClick(ref, closeModal);

  return (
    <Portal>
      <div className="modal">
        <div className="modal__wrap" ref={ref}>
          <header className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <button onClick={closeModal} className="modal__close-btn">
              <img src={CloseIcon} alt="close" />
            </button>
          </header>
          {children}
        </div>
        <Overlay full />
      </div>
    </Portal>
  );
};

Modal.defaultProps = {
  title: '',
};

Modal.propTypes = {
  title: T.string,
  children: T.element.isRequired,
};

export default Modal;
