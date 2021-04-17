import { useContext } from 'react';

import { ModalContext } from '../context/ModalContext';
import Button from './Button';

function GameCard() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className='w-56 flex flex-col items-center relative'>
      <div className='w-full shadow-md transition-all hover:ring-2 ring-theme-green'>
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
            alt='The Witcher 3'
            className='w-full h-80 object-cover'
          />
          <span className='absolute top-0 right-0 pl-2 pr-4 bg-theme-blue font-black text-sm text-theme-white'>
            PC
          </span>
          <span className='w-full bg-theme-green flex justify-center font-black text-theme-black'>
            FREE
          </span>
        </a>
      </div>
      <h2 className='w-full mt-4 truncate font-semibold text-lg '>
        The Witcher 3: Wild Hunt
      </h2>
      <p className='w-full truncate font-semibold text-sm text-theme-gray'>
        Epic Games Store
      </p>
      <p className='w-full mt-3 mb-1 truncate font-semibold text-sm text-theme-white text-right'>
        From 12/03 to 19/03
      </p>
      <Button onClickButton={openModal}>Get the Game! 👉</Button>
    </div>
  );
}

export default GameCard;
