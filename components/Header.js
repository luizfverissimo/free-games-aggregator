import Link from 'next/link';

import Logo from './Logo';

function Header() {
  return (
    <header className='w-full max-w-[1415px] h-32 flex justify-between items-center'>
      <div className="flex justify-between items-center flex-1 mr-4">
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <a>Indicate a free game</a>
      </div>
      <div className="bg-gray-400 w-[728px] h-[90px]"/>
    </header>
  );
}

export default Header;
