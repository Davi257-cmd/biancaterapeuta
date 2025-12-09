import React, { useEffect, useState } from 'react';
import { CircularGallery, GalleryItem } from '@/components/circular-gallery';
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados dos posts do Instagram com arquivos reais
const galleryData: GalleryItem[] = [
  {
    common: 'Post 1',
    binomial: 'Método DrenoWoman',
    photo: {
      url: '/instagram/imagem1.webp',
      text: 'Post do Instagram 1',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'image'
    }
  },
  {
    common: 'Video 1',
    binomial: 'Drenagem Linfática',
    photo: {
      url: '/instagram/video1.mp4',
      text: 'Video do Instagram 1',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'video'
    }
  },
  {
    common: 'Video 2',
    binomial: 'Terapia Integrativa',
    photo: {
      url: '/instagram/video2.mp4',
      text: 'Video do Instagram 2',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'video'
    }
  },
  {
    common: 'Video 3',
    binomial: 'Autocuidado',
    photo: {
      url: '/instagram/video3.mp4',
      text: 'Video do Instagram 3',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'video'
    }
  },
  {
    common: 'Video 4',
    binomial: 'Bem-estar',
    photo: {
      url: '/instagram/video4.mp4',
      text: 'Video do Instagram 4',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'video'
    }
  },
  {
    common: 'Video 5',
    binomial: 'Resultados',
    photo: {
      url: '/instagram/video5.mp4',
      text: 'Video do Instagram 5',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'video'
    }
  },
  {
    common: 'Video 6',
    binomial: 'Transformação',
    photo: {
      url: '/instagram/video6.mp4',
      text: 'Video do Instagram 6',
      pos: 'center',
      by: 'Bianca Oliveira',
      type: 'video'
    }
  },
];

export function InstagramCarouselSection() {
  const [radius, setRadius] = useState(400);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 150 : window.innerWidth < 1024 ? 300 : 400);
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section className="py-10 md:py-20 px-4 bg-gradient-nude overflow-hidden relative" id="instagram">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 animate-slide-up">
          <span className="inline-block text-xs md:text-sm font-medium text-gold uppercase tracking-wider mb-2 md:mb-4">
            Conecte-se
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Meu{" "}
            <span className="text-script italic text-primary">Instagram</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo diário, dicas de bem-estar e bastidores do Método DrenoWoman
          </p>
        </div>

        {/* Circular Gallery Container */}
        <div className="relative w-full" style={{ height: '100vh', minHeight: '600px' }}>
          <div className="w-full h-full sticky top-0 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full h-full">
              <CircularGallery 
                items={galleryData} 
                radius={radius}
                autoRotateSpeed={0.01}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12 animate-fade-in delay-200">
          <Button
            asChild
            className="bg-primary hover:bg-rose-dark text-primary-foreground text-sm md:text-base px-5 md:px-8 py-2.5 md:py-6 rounded-full shadow-soft hover:shadow-glow transition-all duration-300"
          >
            <a href="https://instagram.com/biancaterapeuta_" target="_blank" rel="noopener noreferrer">
              Ver mais no Instagram <Instagram className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

