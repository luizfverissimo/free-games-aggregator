import Header from "../components/Header";
import MainList from "../components/MainList";

const Home = () => (
  <main className="w-full flex flex-col items-center font-mont text-theme-white">
    <Header/>
    <section className="w-full mt-8 relative flex justify-center">
      <div className="w-full h-full absolute inset-0 bg-theme-white opacity-10 z-[-1]"/>
      <MainList/>
    </section>
  </main>
)

export default Home
