import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedListings from '@/components/home/FeaturedListings';
import TrustMetrics from '@/components/home/TrustMetrics';
import CitySection from '@/components/home/CitySection';
import SupplierCTA from '@/components/home/SupplierCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <HowItWorks />
      <FeaturedListings />
      <TrustMetrics />
      <CitySection />
      <SupplierCTA />
    </>
  );
}
