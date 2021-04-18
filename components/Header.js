import Link from 'next/link';

import Logo from './Logo';

function Header() {
  return (
    <header className='w-full max-w-[1415px] h-32 flex justify-between items-center'>
      <div className='flex justify-between items-center flex-1 mr-4'>
        <Link href='/'>
          <a>
            <Logo />
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
      <div className='bg-gray-400 w-[728px] h-[90px]' />
    </header>
  );
}

export default Header;
