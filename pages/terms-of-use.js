import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ModalProvider from '../context/ModalContext';

import { attributes, html } from '../content/terms.md';

const About = () => (
  <ModalProvider>
    <main className='w-full min-h-screen flex flex-col items-center font-mont text-theme-white'>
      <Head>
        <title>{attributes.title} | Free Games 4YOU</title>
      </Head>
      <Header />
      <section className='w-full mt-8 relative flex justify-center'>
        <div className='w-full h-full absolute inset-0 bg-theme-white opacity-10 z-[-1]' />

        <div className='w-full px-8 xl:px-0 max-w-[1440px] flex flex-col my-12'>
          <h1 className="text-3xl">{attributes.title}</h1>
          <div
            className='donate modal-text w-full max-w-[75ch] flex flex-col mt-12 font-mont text-lg text-theme-white'
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </section>
      <div className='mt-auto'></div>
      <Footer />
    </main>
  </ModalProvider>
);

export default About;
