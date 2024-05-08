import HeaderNavbar from "@/components/HeaderNavbar";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      
      <div className="flex flex-col mt-[76px] lg:mt-[80px]">
        <p className="font-semibold text-5xl">Elham</p>
        <p className="font-semibold text-3xl">Mansiz</p>
      </div>
      
    </main>
  );
}

export default Home;