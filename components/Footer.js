import Link from 'next/link';
import LogoWhite from './LogoWhite';

function Footer() {
  return (
    <footer className='w-full bg-black py-6'>
      <div className='w-full max-w-[1440px] mx-auto flex justify-between items-center text-sm font-semibold'>
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <LogoWhite />
            </a>
          </Link>
          <p className='ml-6'>
            2021 ©{' '}
            <a className='underline' href='http://lfverissimo.com' target="_blank" rel="external" rel="noopener">
              LF Verissimo
            </a>
          </p>
        </div>
        <div className='flex items-center'>
          <Link href='/about'>
            <a className='underline mx-6'>About</a>
          </Link>
          <Link href='/privacy-police'>
            <a className='underline mx-6'>Privacy Police</a>
          </Link>
          <Link href='/terms-of-use'>
            <a className='underline mx-6'>Terms of Use</a>
          </Link>
          <Link href='/contact'>
            <a className='underline mx-6'>Contact</a>
          </Link>
          <p className='ml-6'>
            Created by{' '}
            <a href='http://lfverissimo.com' target="_blank" rel="external" rel="noopener" className='underline'>
              LF Verissimo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
