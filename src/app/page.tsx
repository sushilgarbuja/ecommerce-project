import Featured from "./pages/Featured";
import HeroSection from "./pages/HeroSection";
import FreeShippingBanner from "./pages/FreeShippingBanner";
import NewArrival from "./pages/NewArrival";
import FeatureCollection from "./pages/FeatureCollection";
import Trending from "./pages/Trending";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <FreeShippingBanner />
      <NewArrival />
      <FeatureCollection />
      <Trending />
      <Testimonial />
      <Footer />
    </>
  );
}
