import { Button } from "@/components/ui/button";
import { Check, Heart, Sparkles, Leaf, Droplets } from "lucide-react";

interface ForWhomSectionProps {
  onBooking: () => void;
}

const indications = [
  "Sofrem com inchaço e retenção de líquidos no dia a dia",
  "Sentem pernas pesadas ou dores pelo corpo ao final do dia",
  "Estão passando por muito estresse e ansiedade",
  "Precisam de um momento de pausa, autocuidado e acolhimento",
  "Buscam unir estética, bem-estar físico e equilíbrio emocional",
];

export function ForWhomSection({ onBooking }: ForWhomSectionProps) {
  return (
    <section className="py-10 md:py-20 px-4 bg-card" id="para-quem">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
              Para você que...
            </span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Para quem o{" "}
              <span className="text-script italic text-primary">Método DrenoWoman</span>
              {" "}foi pensado
            </h2>
            
            <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
              {indications.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 md:gap-4 p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-rose-light/30 to-transparent border border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed text-xs md:text-base">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 md:p-6 bg-gradient-to-r from-gold/10 to-rose-light/20 rounded-xl md:rounded-2xl border border-gold/20 mb-4 md:mb-6 flex items-start gap-3">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium text-sm md:text-lg">
                Se você se reconhece em pelo menos um desses pontos, o{" "}
                <span className="text-script italic">Método DrenoWoman</span> pode te ajudar.
              </p>
            </div>
            
            <Button 
              onClick={onBooking}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-4 md:px-6 text-xs md:text-sm py-2 md:py-2.5"
            >
              Ver horários disponíveis
            </Button>
          </div>
          
          {/* Decorative Visual */}
          <div className="relative hidden lg:block animate-fade-in delay-300">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Rotating orbit container - 3 ícones em triângulo equilátero */}
              <div className="absolute inset-0 animate-spin-slow origin-center">
                {/* Icon 1 - Sparkles (topo) */}
                <div 
                  className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: '12%',
                    left: '50%',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/30 to-rose-light/50 flex items-center justify-center shadow-soft">
                    <Sparkles className="w-5 h-5 text-gold-dark" />
                  </div>
                </div>
                
                {/* Icon 2 - Leaf (inferior direito) */}
                <div 
                  className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: '82%',
                    left: '75%',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-light/50 to-nude flex items-center justify-center shadow-soft">
                    <Leaf className="w-4 h-4 text-rose-dark" />
                  </div>
                </div>
                
                {/* Icon 3 - Droplets (inferior esquerdo) */}
                <div 
                  className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: '82%',
                    left: '25%',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 to-rose-light/30 flex items-center justify-center shadow-soft">
                    <Droplets className="w-4 h-4 text-gold-dark" />
                  </div>
                </div>
              </div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                  </div>
                  <p className="font-heading text-2xl font-semibold text-foreground">
                    Cuidado
                  </p>
                  <p className="text-script italic text-xl text-primary">
                    de verdade
                  </p>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/20 animate-spin-slow-reverse" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-8 rounded-full border border-rose/30" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-rose-light/50 to-nude" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
