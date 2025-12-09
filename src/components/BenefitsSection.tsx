import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Heart, 
  Wind, 
  Smile, 
  Brain, 
  Feather,
  Sparkles,
  Leaf
} from "lucide-react";

interface BenefitsSectionProps {
  onBooking: () => void;
}

const benefits = [
  {
    icon: Droplets,
    title: "Redução de inchaço",
    description: "Elimine a retenção de líquidos e sinta seu corpo mais leve e definido.",
  },
  {
    icon: Feather,
    title: "Alívio de dores físicas",
    description: "Diminua a sensação de peso nas pernas e dores pelo corpo.",
  },
  {
    icon: Wind,
    title: "Melhora da circulação",
    description: "Estimule o sistema linfático e otimize o funcionamento do seu corpo.",
  },
  {
    icon: Smile,
    title: "Relaxamento profundo",
    description: "Diminua a ansiedade e encontre paz em cada sessão.",
  },
  {
    icon: Brain,
    title: "Alívio emocional",
    description: "Libere tensões emocionais acumuladas no corpo e na mente.",
  },
  {
    icon: Heart,
    title: "Sensação de leveza",
    description: "Experimente uma leveza completa, física e mental.",
  },
  {
    icon: Leaf,
    title: "Momento de autocuidado",
    description: "Um tempo dedicado só para você, em um ambiente acolhedor.",
  },
  {
    icon: Sparkles,
    title: "Bem-estar integral",
    description: "Una estética, saúde física e equilíbrio emocional em uma única sessão.",
  },
];

export function BenefitsSection({ onBooking }: BenefitsSectionProps) {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-6 md:px-4 bg-gradient-nude" id="beneficios">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 animate-slide-up">
          <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
            Benefícios exclusivos
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Por que o{" "}
            <span className="text-script italic text-primary">Método DrenoWoman</span>
            {" "}é diferente?
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma abordagem única que cuida do seu corpo e das suas emoções ao mesmo tempo
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="card-benefit group animate-slide-up p-4 sm:p-5 md:p-6 rounded-lg md:rounded-2xl aspect-square flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold/20 to-rose-light flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gold-dark" />
              </div>
              <h3 className="font-heading text-sm sm:text-base md:text-xl font-semibold text-foreground mb-2 sm:mb-3 md:mb-4 flex-shrink-0">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed flex-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <Button 
            onClick={onBooking}
            size="lg"
            className="bg-primary hover:bg-rose-dark text-primary-foreground text-sm md:text-base px-5 md:px-8 py-2.5 md:py-6 rounded-full shadow-soft hover:shadow-glow transition-all duration-300"
          >
            Quero sentir essa leveza ✨
          </Button>
        </div>
      </div>
    </section>
  );
}
