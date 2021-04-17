import { createContext, useState } from 'react';

import Modal from '../components/Modal'

export const ModalContext = createContext({})

function ModalProvider({children}) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [gameData, setGameData] = useState({})

  function closeModal() {
    setIsOpenModal(false)
  }

  function openModal(gameDataModal) {
    setIsOpenModal(true)
    setGameData(gameDataModal)
  }

  return(
    <ModalContext.Provider value={{gameData, openModal, closeModal}}>
      {children}
      {isOpenModal && <Modal/>}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
