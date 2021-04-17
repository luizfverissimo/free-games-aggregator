import Head from 'next/head';

import ModalProvider from '../context/ModalContext';

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import MainList from '../components/MainList';
import Footer from '../components/Footer';

const Home = () => (
  <ModalProvider>
    <main className='w-full flex flex-col items-center font-mont text-theme-white'>
      <Head>
        <title>Free Games 4YOU</title>
      </Head>
      <Header />
      <section className='w-full mt-8 relative flex justify-center'>
        <div className='w-full h-full absolute inset-0 bg-theme-white opacity-10 z-[-1]' />
        <MainList />
      </section>
      <section className='w-full max-w-[1440px] flex flex-col items-center my-8'>
        <div className='bg-gray-400 w-[728px] h-[90px]' />
        <h2 className='mt-8 font-bold text-2xl'>
          Watch out for new free games:
        </h2>
        <div className='w-full grid grid-cols-5 items-center mt-8 gap-8'>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
        <div className='bg-gray-400 mt-8 w-[728px] h-[90px]' />
        <h2 className='mt-8 font-bold text-2xl'>More free games:</h2>
        <div className='w-full grid grid-cols-5 items-center mt-8 gap-8'>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
        <Button className='max-w-max px-6 mt-12 font-bold text-2xl '>
          Load more free game ↓
        </Button>
      </section>
      <Footer />
    </main>
  </ModalProvider>
);

export default Home;
