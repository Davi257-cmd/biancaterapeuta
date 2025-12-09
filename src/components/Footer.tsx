import { Instagram, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <div className="mb-4 md:mb-6">
            <h3 className="font-heading text-lg md:text-2xl font-bold text-primary-foreground mb-1 md:mb-2">
              Bianca Oliveira
            </h3>
            <p className="text-muted text-xs md:text-sm">
              Drenagem & Terapia Integrativa
            </p>
          </div>
          
          {/* Instagram */}
          <a 
            href="https://instagram.com/biancaterapeuta_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary transition-colors mb-6 md:mb-8 text-sm md:text-base"
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            <span>@biancaterapeuta_</span>
          </a>
          
          {/* Divider */}
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-6 md:mb-8" />
          
          {/* Made with love */}
          <p className="text-primary-foreground/60 text-xs md:text-sm flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 md:w-4 md:h-4 text-rose fill-rose" /> em Angra dos Reis
          </p>
          
          {/* Copyright */}
          <p className="text-primary-foreground/40 text-[10px] md:text-xs mt-3 md:mt-4">
            © {new Date().getFullYear()} Bianca Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
