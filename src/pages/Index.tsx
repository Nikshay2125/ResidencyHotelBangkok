
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import RoomsSection from "@/components/RoomsSection"
import DiningSection from "@/components/DiningSection"
import ExperiencesSection from "@/components/ExperiencesSection"
import BookingSection from "@/components/BookingSection"
import AboutUsSection from "@/components/AboutUsSection"
import GuestReviewsSection from "@/components/GuestReviewsSection"
import GallerySection from "@/components/GallerySection"
import NearbyAttractionsSection from "@/components/NearbyAttractionsSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <RoomsSection />
      <DiningSection />
      <ExperiencesSection />
      <GallerySection />
      <GuestReviewsSection />
      <NearbyAttractionsSection />
      <Footer />
    </div>
  )
}

export default Index