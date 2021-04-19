import Button from './Button';
import GameCard from './GameCard';

import { attributes, html } from '../content/donate.md';

function MainList({gameData}) {
  return (
    <div className='w-full my-8 flex flex-col items-center xl:max-w-[1415px]'>
      <h1 className='mb-8 font-semibold text-center text-4xl'>
        Get this games for free{' '}
        <strong className='font-black text-theme-blue'>right now</strong>!
      </h1>

      <div className='w-full flex flex-col justify-between px-8 xl:px-0 xl:flex-row'>
        <div className='w-full flex flex-wrap justify-center sm:justify-between  items-center xl:grid xl:grid-cols-4 flex-1 mb-8 xl:mb-0 xl:mr-9'>
          {gameData && (
            gameData.map((game, index) => {
              if(!game.attributes.isHighlight) {
                return
              }

              return (
                <GameCard key={index} gameData={game} />
              )
            })
          )}
        </div>
        <div className='w-full flex flex-col items-center xl:max-w-[300px]'>
          <div className='bg-gray-400 w-[300px] h-[250px]' />
          <div className='donate w-full mt-4 text-sm text-center xl:text-left' dangerouslySetInnerHTML={{__html: html}}>
          </div>
          <Button
            className='w-48 mt-4 self-center xl:self-end'
            onClickButton={() => window.open(attributes.hrefButton, '_blank')}
          >
            {attributes.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainList;
