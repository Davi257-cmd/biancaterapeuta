import { Heart, Sparkles, Leaf, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Escuta e acolhimento",
    description: "Breve conversa para entender suas dores físicas e emocionais, criando um espaço seguro e personalizado.",
    color: "from-gold/30 to-gold/10",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Aplicação do Método DrenoWoman",
    description: "Drenagem e terapia integrativa adaptadas à sua necessidade específica daquele momento.",
    color: "from-rose/30 to-rose-light/20",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Relaxamento profundo",
    description: "Ambiente calmo, toques suaves e foco total no seu bem-estar físico e emocional.",
    color: "from-nude-dark/20 to-nude/30",
  },
  {
    number: "04",
    icon: Heart,
    title: "Orientações finais",
    description: "Dicas personalizadas para manter os resultados e continuar seu autocuidado em casa.",
    color: "from-gold/20 to-rose-light/10",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-10 md:py-20 px-4 bg-gradient-nude overflow-hidden" id="como-funciona">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-slide-up">
          <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
            O processo
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Como funciona uma sessão com a{" "}
            <span className="text-script italic text-primary">Bianca</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-3 md:space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="flex gap-3 md:gap-4 p-3 md:p-6 rounded-xl md:rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-5 h-5 md:w-7 md:h-7 text-gold-dark" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                    <span className="text-[10px] md:text-xs font-bold text-gold uppercase tracking-wider">
                      Passo {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative animate-fade-in delay-200 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 to-rose/10 rounded-[4rem] blur-2xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-card border border-border/50">
                <img
                  src="/secao-bio/secao-bio.png"
                  alt="Bianca Oliveira - Terapeuta especializada em drenagem linfática"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md rounded-2xl p-4 shadow-card border border-gold/20 max-w-xs">
                <p className="text-foreground text-sm italic">
                  "Cada sessão é única, feita para a sua realidade – não é só massagem, é{" "}
                  <span className="text-script text-primary">cuidado de verdade</span>."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
