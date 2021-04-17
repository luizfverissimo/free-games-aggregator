import { createContext, useState } from 'react';

import Modal from '../components/Modal'

export const ModalContext = createContext({})

function ModalProvider({children}) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function closeModal() {
    setIsOpenModal(false)
  }

  function openModal() {
    setIsOpenModal(true)
  }

  return(
    <ModalContext.Provider value={{openModal, closeModal}}>
      {children}
      {isOpenModal && <Modal/>}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
