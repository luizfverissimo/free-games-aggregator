import Head from 'next/head';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ModalProvider from '../context/ModalContext';

import { attributes, html } from '../content/report.md';

const Contact = () => {
  const [name, setName] = useState('Free Games 4YOU')
  const [email, setEmail] = useState('luizfverissimo@gmail.com')
  const [link, setLink] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    init(`${process.env.NEXT_PUBLIC_EMAILJS_USER}`);
  }, []);

  const handleSubmitContactForm = async (event) => {
    event.preventDefault();

    const regExUrlValidation = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/ig

    if(!regExUrlValidation.test(link)) {
      setStatus('Enter a valid link.');
      return;
    }

    if (!isVerified) {
      setStatus('Verify reCaptcha field.');
      return;
    }

    try {
      setStatus('Sending message...');
      await emailjs.send('service_bsg0df3', 'template_t258nxu', {
        from_name: name,
        from_email: email,
        message: link
      });

      setStatus('Thank you for your indication!');
      setLink('');
    } catch (err) {
      console.log(err);
      setStatus('An Error occurred, please resubmit.');
    }
  };

  const recaptchaVerify = () => {
    console.log('verificou');
    setIsVerified(true);
    return;
  };

  return (
    <ModalProvider>
      <main className='w-full min-h-screen flex flex-col items-center font-mont text-theme-white'>
        <Head>
          <title>{attributes.title} | Free Games 4YOU</title>
        </Head>
        <Header />
        <section className='w-full mt-8 relative flex justify-center'>
          <div className='w-full h-full absolute inset-0 bg-theme-white opacity-10 z-[-1]' />

          <div className='w-full px-8 xl:px-0 max-w-[1440px] flex flex-col my-12'>
            <h1 className='text-3xl'>{attributes.title}</h1>
            <div
              className='donate modal-text w-full max-w-[75ch] flex flex-col mt-12 font-mont text-lg text-theme-white'
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>

            <div className='w-full px-4 xl:px-0 xl:w-1/2 flex flex-col items-start justify-start'>
              <label
                htmlFor='Name'
                className='mt-4 sm:mt-8 font-pop font-bold text-lg text-theme-white'
              >
                Link
              </label>
              <input
                id='Name'
                type='text'
                className='w-full transition-all bg-transparent border-b-2 focus:border-theme-blue font-pop font-light text-theme-white text-lg p-2 outline-none'
                value={link}
                onChange={(e) => setLink(e.target.value)}
              ></input>
              <div className='w-full mt-4 flex flex-col items-center'>
                <p className='font-pop h-auto sm:h-5 text-lg text-theme-blue'>
                  {status}
                </p>
                <div className='w-full outline-none mt-4 sm:mt-8 flex flex-col sm:flex-row justify-start sm:justify-between items-center '>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                    onChange={recaptchaVerify}
                    theme='dark'
                    hl='en'
                  />
                  <button
                    onClick={handleSubmitContactForm}
                    className='group flex outline-none p-2 mt-5 sm:mt-0 items-center font-pop font-bold text-white-theme text-xl transition-all transform hover:text-theme-blue hover:-translate-y-1'
                  >
                    <svg
                      className='mr-2 fill-current outline-none text-white-theme transition-all group-hover:text-theme-blue'
                      width='20'
                      height='20'
                      viewBox='0 0 29 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M27.6401 12.1428L2.14011 0.142751C1.88333 0.021926 1.59755 -0.0235801 1.31595 0.0115168C1.03434 0.0466137 0.768474 0.160874 0.54921 0.341028C0.329946 0.521182 0.166286 0.75984 0.0772323 1.02929C-0.0118211 1.29873 -0.0226134 1.58792 0.0461091 1.86325L1.86411 9.13675L13.5011 13.5003L1.86411 17.8638L0.0461091 25.1373C-0.0239064 25.4128 -0.0140149 25.7026 0.0746267 25.9727C0.163268 26.2428 0.326995 26.4821 0.546654 26.6626C0.766313 26.8431 1.03282 26.9573 1.31501 26.9918C1.59719 27.0264 1.88339 26.9799 2.14011 26.8578L27.6401 14.8578C27.8978 14.7366 28.1157 14.5446 28.2683 14.3042C28.4209 14.0639 28.502 13.785 28.502 13.5003C28.502 13.2155 28.4209 12.9366 28.2683 12.6963C28.1157 12.4559 27.8978 12.2639 27.6401 12.1428Z' />
                    </svg>
                    Send Link!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='mt-auto'></div>
        <Footer />
      </main>
    </ModalProvider>
  );
};

export default Contact;
