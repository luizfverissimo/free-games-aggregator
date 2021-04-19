import fs from 'fs';
import Head from 'next/head';
import path from 'path';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ModalProvider from '../../context/ModalContext';

const Post = ({ gameInfo }) => {
  if (!gameInfo) return <div>not found</div>;

  const { html, attributes } = gameInfo;

  return (
    <ModalProvider>
      <main className='w-full min-h-screen flex flex-col items-center font-mont text-theme-white'>
        <Head>
          <title>{attributes.title} | Free Games 4YOU</title>
        </Head>
        <Header />
        <section className='w-full mt-8 relative flex justify-center'>
          <div className='w-full h-full absolute inset-0 bg-theme-white opacity-10 z-[-1]' />

          <div className='w-full px-8 xl:px-0 max-w-[1440px] flex flex-col sm:flex-row items-center sm:items-start justify-between my-12'>
            <img
              src={attributes.imageUrl}
              alt={`${attributes.imageUrl} Cover Art`}
              className='w-[265px] h-[375px] object-cover mb-8 sm:mb-0'
            />
            <div className='flex flex-1 flex-col items-start ml-12'>
              <p className='font-mont font-semibold text-xl text-theme-blue'>
                {attributes.platform}
              </p>
              <h2 className='font-mont font-semibold text-2xl text-theme-white m-0'>
                {attributes.title}
              </h2>

              <div
                className='modal-text w-full max-w-[75ch] flex flex-col mt-12 font-mont text-lg text-theme-gray leading-5'
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
              <Button
                className='max-w-[256px] mt-8 self-center sm:self-end'
                onClickButton={() =>
                  window.open(attributes.link, '_blank')
                }
              >
                GET THE GAME! 👉
              </Button>
            </div>
          </div>
        </section>
        <div className="mt-auto"></div>
        <Footer />
      </main>
    </ModalProvider>
  );
};

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/games'))
    .map((games) => {
      const trimmedName = games.substring(0, games.length - 3);
      return {
        params: { slug: trimmedName }
      };
    });

  return {
    paths,
    fallback: false // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const games = await import(`../../content/games/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      gameInfo: games.default
    }
  };
}

export default Post;
