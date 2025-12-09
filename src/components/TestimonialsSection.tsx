import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana C.",
    location: "Angra dos Reis",
    text: "Nunca me senti tão leve! A Bianca tem mãos de fada e um carinho no atendimento que faz toda diferença. Saí renovada.",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Juliana M.",
    location: "Paraty",
    text: "O Método DrenoWoman me ajudou muito com as dores e ansiedade. É muito mais que uma drenagem, é um momento de paz.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Fernanda R.",
    location: "Centro, Angra",
    text: "Depois de semanas estressantes no trabalho, a sessão com a Bianca foi exatamente o que eu precisava. Recomendo muito!",
    rating: 5,
    avatar: "F",
  },
  {
    name: "Mariana S.",
    location: "Bracuí",
    text: "Sofria muito com inchaço nas pernas. Após as sessões, sinto uma diferença enorme. O atendimento é super acolhedor 💖",
    rating: 5,
    avatar: "M",
  },
  {
    name: "Camila L.",
    location: "Angra dos Reis",
    text: "A Bianca tem um dom! Me senti ouvida e cuidada do início ao fim. Virou meu momento sagrado de autocuidado.",
    rating: 5,
    avatar: "C",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-20 px-4 bg-card" id="depoimentos">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 animate-slide-up">
          <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
            Depoimentos reais
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            O que as clientes sentem{" "}
            <span className="text-script italic text-primary">após as sessões</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias de transformação e bem-estar de quem já experimentou o Método DrenoWoman
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="relative p-4 md:p-6 rounded-xl md:rounded-3xl bg-gradient-to-br from-nude-light to-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-7 h-7 md:w-10 md:h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-soft">
                <Quote className="w-3 h-3 md:w-5 md:h-5 text-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-2 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground leading-relaxed mb-4 md:mb-6 text-xs md:text-base min-h-[60px] md:min-h-[80px]">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border/50">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rose to-rose-light flex items-center justify-center text-primary-foreground font-semibold text-xs md:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-xs md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] md:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
