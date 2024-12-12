import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="max-w-full h-full mt-16">
        <Hero />
        <Listing />
      </main>
      <Footer />
    </div>
  );
}
