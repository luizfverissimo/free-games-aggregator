import { useRouter } from 'next/router';

import Button from './Button';

function GameCard({ gameData }) {
  const router = useRouter();

  return (
    <div className='w-56 flex flex-col items-center relative'>
      {gameData && (
        <>
          <div className='w-full shadow-md transition-all hover:ring-2 ring-theme-green'>
            <a className='cursor-pointer' onClick={() => router.push(`games/${gameData.slug}`)}>
              <img
                src={gameData.attributes.imageUrl}
                alt='The Witcher 3'
                className={`w-full h-80 object-cover filter grayscale`}
              />
              <span className='absolute top-0 right-0 pl-2 pr-4 bg-theme-blue font-black text-sm text-theme-white'>
                {gameData.attributes.platform}
              </span>
              <span
                className={`w-full ${
                  !gameData.attributes.isActive
                    ? 'bg-gray-400'
                    : 'bg-theme-green'
                } flex justify-center font-black text-theme-black`}
              >
                {!gameData.attributes.isActive ? 'SOON' : 'FREE'}
              </span>
            </a>
          </div>
          <h2 className='w-full mt-4 truncate font-semibold text-lg '>
            {gameData.attributes.title}
          </h2>
          <p className='w-full truncate font-semibold text-sm text-theme-gray'>
            {gameData.attributes.store}
          </p>
          <p className='w-full mt-3 mb-1 truncate font-semibold text-sm text-theme-white text-right'>
            {gameData.attributes.textPeriod}
          </p>
          <Button onClickButton={() => router.push(`games/${gameData.slug}`)}>
            Get the Game! 👉
          </Button>
        </>
      )}
    </div>
  );
}

export default GameCard;
