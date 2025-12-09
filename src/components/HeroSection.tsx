import { Button } from "@/components/ui/button";
import { MapPin, Shield, Sparkles, User } from "lucide-react";

interface HeroSectionProps {
  onBooking: () => void;
}

export function HeroSection({ onBooking }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen bg-gradient-hero overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/primeira-secao/background-primeira-secao.png')"
      }}
    >
      {/* Decorative elements - smaller on mobile */}
      <div className="absolute top-10 left-4 w-20 md:w-32 h-20 md:h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-24 md:w-40 h-24 md:h-40 bg-rose/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-gold rounded-full animate-pulse-soft" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose rounded-full animate-pulse-soft delay-300" />
      
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent z-0" />
      
      <div className="container mx-auto px-4 py-6 md:py-20 relative z-10">
        <div className="flex flex-col items-start justify-center min-h-[80vh] max-w-4xl">
          {/* Text Content */}
          <div className="text-left animate-slide-up w-full">
            {/* Badge - smaller on mobile */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-gold/50 rounded-full px-3 py-1.5 mb-4 md:mb-6 shadow-lg">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gold-light" />
              <span className="text-xs md:text-sm font-medium text-white">Método Exclusivo</span>
            </div>
            
            {/* Main Title - responsive sizing */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-3 md:mb-6">
              Reduza inchaço, dores físicas e emocionais com o{" "}
              <span className="text-script italic text-gold-light">
                Método DrenoWoman
              </span>
            </h1>
            
            {/* Subtitle - smaller on mobile */}
            <p className="text-sm md:text-lg lg:text-xl text-white/90 drop-shadow-md leading-relaxed mb-5 md:mb-8 max-w-2xl">
              Sessões de drenagem e terapia integrativa em Angra dos Reis, pensadas para 
              aliviar retenção de líquidos, dores no corpo e tensão emocional, em um momento 
              de <span className="text-script italic text-gold-light">autocuidado</span> só seu.
            </p>
            
            {/* CTA Button - smaller on mobile */}
            <Button 
              onClick={onBooking}
              size="lg"
              className="bg-primary hover:bg-rose-dark text-primary-foreground text-sm md:text-lg px-5 md:px-8 py-3 md:py-6 rounded-full shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Agendar sessão pelo WhatsApp
            </Button>
            
            {/* Trust badges - smaller on mobile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 mt-5 md:mt-8 text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gold-light" />
                <span>Angra dos Reis – Centro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-gold-light" />
                <span>Agendamento rápido e seguro</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating badge - smaller on mobile */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/10 backdrop-blur-md shadow-lg rounded-xl md:rounded-2xl p-2 md:p-4 border border-white/20 animate-fade-in delay-200 z-20">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-soft">
              <User className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
            </div>
            <div>
              <p className="font-heading font-semibold text-white text-xs md:text-base drop-shadow-md">Bianca Oliveira</p>
              <p className="text-[10px] md:text-sm text-white/80">@biancaterapeuta_</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gold line separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
