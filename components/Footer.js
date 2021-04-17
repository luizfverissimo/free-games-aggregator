import Link from 'next/link';
import LogoWhite from './LogoWhite';

function Footer() {
  return (
    <footer className='w-full bg-black py-6'>
      <div className='w-full max-w-[1440px] mx-auto flex justify-between items-center text-sm font-semibold'>
        <div className='flex items-center'>
          <LogoWhite />
          <p className='ml-6'>
            2021 ©{' '}
            <a className='underline' href='http://lfverissimo.com'>
              LF Verissimo
            </a>
          </p>
        </div>
        <div className='flex items-center'>
          <Link href='/about'>
            <a className='underline mx-6'>About</a>
          </Link>
          <Link href='/'>
            <a className='underline mx-6'>Privacy Police</a>
          </Link>
          <Link href='/'>
            <a className='underline mx-6'>Terms of Use</a>
          </Link>
          <Link href='/'>
            <a className='underline mx-6'>Terms of Use</a>
          </Link>
          <p className='mr-6'>
            Created by{' '}
            <a href='http://lfverissimo.com' className='underline'>
              LF Verissimo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
