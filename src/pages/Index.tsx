import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ForWhomSection } from "@/components/ForWhomSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InstagramCarouselSection } from "@/components/InstagramCarouselSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onBooking={openBooking} />
      <BenefitsSection onBooking={openBooking} />
      <ForWhomSection onBooking={openBooking} />
      <HowItWorksSection />
      <InstagramCarouselSection />
      <TestimonialsSection />
      <LocationSection onBooking={openBooking} />
      <FAQSection onBooking={openBooking} />
      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <WhatsAppButton onClick={openBooking} />
    </main>
  );
};

export default Index;
