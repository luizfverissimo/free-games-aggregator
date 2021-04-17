import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import Button from './Button';

function Modal() {
  const { closeModal, gameData } = useContext(ModalContext);

  return (
    <div className='fixed w-full h-full inset-0 z-10 flex justify-center items-center'>
      <div className='fixed w-full h-full inset-0 z-10 bg-[#0C0C0C] opacity-90' />
      <div className='z-20 m-6 w-full max-w-screen-lg bg-[#0F1B31] flex flex-col items-center p-12 shadow-lg'>
        <div className='w-full flex justify-end'>
          <div className='w-[728px] h-[90px] bg-gray-500 mx-auto' />
          <svg
            className='cursor-pointer transform transition-all hover:scale-110'
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={closeModal}
          >
            <path
              d='M21 2.625C10.7625 2.625 2.625 10.7625 2.625 21C2.625 31.2375 10.7625 39.375 21 39.375C31.2375 39.375 39.375 31.2375 39.375 21C39.375 10.7625 31.2375 2.625 21 2.625ZM28.0875 30.1875L21 23.1L13.9125 30.1875L11.8125 28.0875L18.9 21L11.8125 13.9125L13.9125 11.8125L21 18.9L28.0875 11.8125L30.1875 13.9125L23.1 21L30.1875 28.0875L28.0875 30.1875Z'
              fill='#FDFDFD'
            />
          </svg>
        </div>
        <div className='w-full flex justify-between mt-12'>
          <img
            src={gameData.attributes.imageUrl}
            alt={`${gameData.attributes.imageUrl} Cover Art`}
            className='w-[265px] h-[375px] object-cover'
          />
          <div className='flex flex-1 flex-col items-start ml-12'>
            <p className='font-mont font-semibold text-xl text-theme-blue'>
              {gameData.attributes.platform}
            </p>
            <h2 className='font-mont font-semibold text-2xl text-theme-white m-0'>
              {gameData.attributes.title}
            </h2>

            <div
              className='modal-text w-full flex flex-col mt-12 font-mont text-lg text-theme-gray leading-5'
              dangerouslySetInnerHTML={{ __html: gameData.html }}
            ></div>
            <Button
              className='max-w-[256px] mt-auto self-end'
              onClickButton={() =>
                window.open(gameData.attributes.link, '_blank')
              }
            >
              GET THE GAME! 👉
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
