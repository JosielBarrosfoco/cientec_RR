import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const directors = [
    {
      name: 'André Araújo',
      role: 'Presidente',
      image: '/images/portfolio-2026/diretoria-andre-araujo.jpg',
      bio: 'Presidência e coordenação institucional do CIENTEC-RR.',
      linkedin: 'https://www.linkedin.com/in/andr%C3%A9-mateus-ara%C3%BAjo-32294a192/',
    },
    {
      name: 'Glória Almeida',
      role: 'Diretora Jurídica',
      image: '/images/portfolio-2026/diretoria-gloria-almeida.jpg',
      bio: 'Direção jurídica e apoio à governança institucional.',
      linkedin: 'https://www.linkedin.com/in/gloria-dos-s-almeida-barbosa-67b10a1b0/?originalSubdomain=br',
    },
    {
      name: 'Luci Campelo',
      role: 'Diretora Administrativo-Financeira',
      image: '/images/portfolio-2026/diretoria-luci-campelo.jpg',
      bio: 'Gestão administrativa e financeira da instituição.',
      linkedin: 'https://www.linkedin.com/in/luci-campelo-38194269/',
    },
    {
      name: 'Tyara Level',
      role: 'Diretora de Inovação e Tecnologia',
      image: '/images/portfolio-2026/diretoria-tyara-level.jpg',
      bio: 'Coordenação das frentes de inovação e tecnologia.',
    },
    {
      name: 'Kátia Lopes',
      role: 'Diretora de Desenvolvimento, Projetos e Relações Institucionais',
      image: '/images/portfolio-2026/diretoria-katia-lopes.jpg',
      bio: 'Desenvolvimento de projetos e articulação institucional.',
    },
  ];

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.clientWidth - 48;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="diretoria" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-neutral-200 mb-6">
            <span className="text-sm font-semibold text-primary">Nossa Equipe</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Nossa Diretoria
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Conheça os líderes comprometidos em transformar nossa missão em realidade
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 z-10 flex items-center">
            <button
              type="button"
              onClick={() => scrollCarousel('prev')}
              aria-label="Ver integrantes anteriores"
              className="h-12 w-12 rounded-full bg-white/90 text-primary shadow-lg border border-neutral-200 hover:bg-white focus:outline-none"
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-10 flex items-center">
            <button
              type="button"
              onClick={() => scrollCarousel('next')}
              aria-label="Ver próximos integrantes"
              className="h-12 w-12 rounded-full bg-white/90 text-primary shadow-lg border border-neutral-200 hover:bg-white focus:outline-none"
            >
              ›
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto pb-6 scroll-smooth px-4 md:px-0"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {directors.map((director, index) => (
              <div
                key={index}
                className="group snap-start min-w-[280px] sm:min-w-[330px] md:min-w-[380px] lg:min-w-[420px] bg-white rounded-2xl border border-neutral-200 overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={director.image}
                    alt={`Retrato de ${director.name}, ${director.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-3">
                      {director.linkedin && (
                        <a
                          aria-label={`LinkedIn de ${director.name}`}
                          href={director.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      <a href="mailto:cientecrr@gmail.com" aria-label="Enviar e-mail ao CIENTEC-RR" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{director.name}</h3>
                  <p className="text-primary font-semibold mb-3 text-sm">{director.role}</p>
                  <p className="text-text/70 text-sm leading-relaxed">{director.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
