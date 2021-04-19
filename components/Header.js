import Link from 'next/link';

import Logo from './Logo';

function Header() {
  return (
    <header className='w-full flex flex-col p-4 justify-between items-center xl:flex-row xl:max-w-[1415px] xl:h-32 xl:p-0'>
      <div className='w-full flex justify-between items-center flex-1 mx-4 mb-4 xl:w-auto xl:ml-0'>
        <Link href='/'>
          <a>
            <Logo className="w-[75px] xl:w-[111px]" />
          </a>
        </Link>
        <div className="flex ">
          <Link href='/indicate-games'>
            <a className="ml-8 transition-all hover:text-theme-blue">Indicate a free game</a>
          </Link>
          <Link href='/report'>
            <a className="ml-8 transition-all hover:text-theme-blue">Report</a>
          </Link>
        </div>
      </div>
      <div className='bg-gray-400 w-[300px] h-[50px] md:w-[728px] md:h-[90px]' />
    </header>
  );
}

export default Header;
