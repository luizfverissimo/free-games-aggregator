import Link from 'next/link';
import LogoWhite from './LogoWhite';

function Footer() {
  return (
    <footer className='w-full bg-black py-6'>
      <div className='w-full px-8 mx-auto flex justify-between items-center text-sm text-center font-semibold xl:max-w-[1440px] xl:px-0'>
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
        <div className='flex items-center flex-col ml-4 xl:flex-row xl:ml-0'>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
