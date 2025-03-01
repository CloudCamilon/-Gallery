import { Footer } from "./_components/footer";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="bg-white  px-0 2xl:px-[640px] text-black ">
      <Header selected="Home" />
      <Footer />
    </div>
  );
}
