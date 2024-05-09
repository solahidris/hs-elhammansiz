import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/HeaderNavbar";
import { HeroHighlightHomepage } from "@/components/HeroHighlightHomepage";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      
      <HeroHighlightHomepage />
      <div className="flex flex-col mt-[76px] lg:mt-[80px] min-h-[77vh]">
        <p className="font-semibold text-5xl">Elham</p>
        <p className="font-semibold text-3xl">Mansiz</p>
      </div>

      <Footer />
    </main>
  );
}

export default Home;