import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface FAQSectionProps {
  onBooking: () => void;
}

const faqs = [
  {
    question: "Quantas sessões são recomendadas?",
    answer: "O número de sessões varia de acordo com o objetivo e a necessidade de cada pessoa. Geralmente, recomendo um pacote inicial de 4 a 8 sessões para resultados mais visíveis e duradouros. Na primeira sessão, conversamos sobre suas expectativas e montamos um plano personalizado.",
  },
  {
    question: "Qual é a duração média de cada sessão?",
    answer: "Cada sessão do Método DrenoWoman dura aproximadamente 1 hora a 1 hora e 30 minutos, incluindo a conversa inicial de acolhimento e as orientações finais. É um tempo dedicado inteiramente a você.",
  },
  {
    question: "A drenagem dói?",
    answer: "Não! O Método DrenoWoman utiliza técnicas suaves e gentis. O objetivo é proporcionar relaxamento e bem-estar. Você pode sentir um pouco de pressão em algumas áreas, mas nunca dor. Se algo incomodar, é só me avisar que adapto o toque.",
  },
  {
    question: "É indicado para pós-operatório?",
    answer: "A drenagem linfática pode trazer benefícios gerais para o corpo, mas casos de pós-operatório precisam de avaliação médica prévia. Sempre consulte seu médico antes de agendar. Juntos, podemos avaliar se o momento é adequado para você.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceito Pix, dinheiro e cartões (débito/crédito). Os valores e condições de pacotes são combinados diretamente pelo WhatsApp, para que eu possa oferecer a melhor opção para você.",
  },
  {
    question: "Como funciona a remarcação ou cancelamento?",
    answer: "Peço que avise com pelo menos 24 horas de antecedência caso precise remarcar ou cancelar. Assim consigo reorganizar a agenda e oferecer o horário para outra cliente. Imprevistos acontecem, e sempre vamos encontrar uma solução juntas! 💖",
  },
  {
    question: "Preciso levar alguma coisa para a sessão?",
    answer: "Não precisa! Tudo o que você precisa está aqui no espaço. Apenas venha com roupas confortáveis e, se possível, evite aplicar cremes ou óleos corporais antes da sessão.",
  },
];

export function FAQSection({ onBooking }: FAQSectionProps) {
  return (
    <section className="py-10 md:py-20 px-4 bg-card" id="duvidas">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 animate-slide-up">
          <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Dúvidas{" "}
            <span className="text-script italic text-primary">frequentes</span>
          </h2>
        </div>
        
        {/* FAQ Accordion */}
        <div className="animate-slide-up delay-100">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-r from-nude-light to-card rounded-xl md:rounded-2xl border border-border/50 px-3 md:px-6 data-[state=open]:shadow-soft transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading text-sm md:text-lg font-semibold text-foreground hover:text-primary py-3 md:py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-3 md:pb-5 text-xs md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 p-4 md:p-8 bg-gradient-to-r from-rose-light/30 to-gold/10 rounded-xl md:rounded-3xl border border-border/50 animate-slide-up delay-200">
          <p className="text-foreground text-sm md:text-lg mb-4 md:mb-6">
            Se ainda ficou alguma dúvida, pode me chamar no WhatsApp.<br />
            <span className="text-script italic text-primary">Vou te responder com carinho 💖</span>
          </p>
          <Button 
            onClick={onBooking}
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-5 md:px-8 py-2.5 md:py-6 text-sm md:text-base flex items-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Tirar dúvida pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
