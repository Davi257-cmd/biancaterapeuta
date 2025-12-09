import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
// TODO: Adicionar a imagem spa-interior.jpg na pasta src/assets
// import spaInterior from "@/assets/spa-interior.jpg";
const spaInterior = "https://via.placeholder.com/800x600/E8D5C4/D4A574?text=Espaço+de+Atendimento";

interface LocationSectionProps {
  onBooking: () => void;
}

export function LocationSection({ onBooking }: LocationSectionProps) {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-6 md:px-4 bg-gradient-nude" id="localizacao">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 animate-slide-up">
          <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
            Onde encontrar
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Atendimentos presenciais em{" "}
            <span className="text-script italic text-primary">Angra dos Reis</span> – RJ
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Um espaço acolhedor e preparado para o seu momento de autocuidado
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
          <div className="bg-card rounded-xl md:rounded-3xl p-5 md:p-8 shadow-card border border-border/50 animate-slide-up">
            <div className="rounded-lg md:rounded-2xl overflow-hidden mb-4 md:mb-8">
              <img
                src={spaInterior}
                alt="Espaço de atendimento da Bianca em Angra dos Reis"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold/20 to-rose-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-heading text-sm md:text-lg font-semibold text-foreground mb-0.5 md:mb-1">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    Rua Coronel Carvalho, 149<br />
                    Centro, Angra dos Reis – RJ
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold/20 to-rose-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 md:w-6 md:h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-heading text-sm md:text-lg font-semibold text-foreground mb-0.5 md:mb-1">
                    Horário de atendimento
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    Segunda a Sábado<br />
                    Mediante agendamento
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold/20 to-rose-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-6 md:h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-heading text-sm md:text-lg font-semibold text-foreground mb-0.5 md:mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-base">
                    (24) 99263-5904
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa dentro do card no mobile */}
            <div className="mt-4 md:mt-6 lg:hidden rounded-lg overflow-hidden shadow-soft h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8!2d-44.318!3d-23.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Coronel%20Carvalho%2C%20149%20-%20Centro%2C%20Angra%20dos%20Reis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Bianca Oliveira Terapeuta"
                className="w-full h-full"
              />
            </div>
            
            <Button 
              onClick={onBooking}
              size="lg"
              className="w-full mt-6 md:mt-8 bg-primary hover:bg-rose-dark text-primary-foreground rounded-full py-2.5 md:py-6 text-sm md:text-base"
            >
              Quero reservar meu horário 💆‍♀️
            </Button>
          </div>
          
          {/* Mapa separado no desktop */}
          <div className="hidden lg:block rounded-xl md:rounded-3xl overflow-hidden shadow-card animate-fade-in delay-200 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8!2d-44.318!3d-23.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Coronel%20Carvalho%2C%20149%20-%20Centro%2C%20Angra%20dos%20Reis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização - Bianca Oliveira Terapeuta"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
