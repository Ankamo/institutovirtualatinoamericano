import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section (El que ya teníamos) */}
        {/* Aquí puedes meter la sección de Diplomados */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
