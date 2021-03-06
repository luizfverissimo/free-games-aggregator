import Head from 'next/head';
import moment from 'moment';

import ModalProvider from '../context/ModalContext';

import Button from '../components/Button';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import MainList from '../components/MainList';
import EndSection from '../components/EndSection';
import Footer from '../components/Footer';

const importGames = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/games', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/games/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const Home = ({ gamesList }) => {
  return (
    <>
      {gamesList && (
        <ModalProvider>
          <main className='w-full flex flex-col items-center font-mont text-theme-white'>
            <Head>
              <title>Free Games 4YOU</title>
            </Head>
            <Header />
            <section className='w-full mt-8 relative flex justify-center'>
              <div className='w-full h-full absolute inset-0 bg-theme-white opacity-10 z-[-1]' />
              <MainList gameData={gamesList} />
            </section>
            <section className='w-full  flex flex-col items-center my-8 xl:max-w-[1440px]'>
              <div className='bg-gray-400 w-[300px] h-[50px] md:w-[728px] md:h-[90px]' />
              <h2 className='mt-8 font-bold text-2xl'>More free games:</h2>
              <div className='w-full flex flex-wrap px-8 justify-center sm:justify-between items-center mt-8 xl:gap-8 xl:px-0 xl:grid xl:grid-cols-5'>
                {gamesList.map((game, index) => {
                  if (game.attributes.isHighlight) {
                    return;
                  }

                  if (moment(game.attributes.startPeriod).isBefore(moment())) {
                    return <GameCard key={index} gameData={game} />;
                  }
                })}
              </div>

              <div className='bg-gray-400 mt-8 w-[300px] h-[50px] md:w-[728px] md:h-[90px]' />
              <h2 className='mt-8 font-bold text-2xl'>
                Watch out for new free games:
              </h2>
              <div className='w-full flex flex-wrap px-8 justify-center sm:justify-between items-center mt-8 xl:gap-8 xl:px-0 xl:grid xl:grid-cols-5'>
                {gamesList.map((game, index) => {
                  if (moment(game.attributes.startPeriod).isAfter(moment())) {
                    return <GameCard key={index} gameData={game} />;
                  }
                })}
              </div>
            </section>
            <EndSection />
            <Footer />
          </main>
        </ModalProvider>
      )}
    </>
  );
};

export async function getStaticProps() {
  const gamesList = await importGames();

  return {
    props: {
      gamesList
    } // will be passed to the page component as props
  };
}

export default Home;
