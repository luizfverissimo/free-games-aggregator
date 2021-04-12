import Button from './Button';
import GameCard from './GameCard';

function MainList() {
  return (
    <div className='w-full my-8 max-w-[1415px] flex flex-col items-center'>
      <h1 className='mb-8 font-semibold  text-4xl'>
        Get this games for free <strong className="font-black text-theme-blue">right now</strong>!
      </h1>

      <div className='w-full flex justify-between'>
        <div className='w-full flex justify-between flex-1 mr-9'>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
        <div className='flex max-w-[300px] flex-col items-center'>
          <div className='bg-gray-400 w-[300px] h-[250px]' />
          <div className='donate w-full mt-4 text-sm'>
            <h3>Help us keep this site up, <strong>DONATE!</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eu,
              convallis molestie enim. Quis libero aliquam quam purus
              pellentesque mattis nunc, cum. Vitae, quis pretium iaculis non
              gravida erat pulvinar erat tristique. Neque, viverra integer
              tempor mi, neque egestas.
            </p>
          </div>
          <Button className='w-48 mt-4 self-end'>DONATE!</Button>
        </div>
      </div>
    </div>
  );
}

export default MainList;
