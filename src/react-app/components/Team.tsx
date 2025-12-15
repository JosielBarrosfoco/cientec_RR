import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const directors = [
    {
      name: 'LUCI CAMPELO',
      role: 'Presidente',
      image: '/images/presidente-luci-campelo.png',
      bio: 'Especialista em consultoria financeira, assessoria e consultoria de negócios, com sólida experiência em planejamento financeiro e análise financeira. Atua também em consultoria educacional e política, promovendo segurança financeira de longo prazo e sustentabilidade patrimonial. Exercendo a presidência do Instituto com liderança técnica, ética e compromisso institucional com resultados consistentes.',
      linkedin: 'https://www.linkedin.com/in/luci-campelo-38194269/',
    },
    {
      name: 'Glória dos Santos Almeida',
      role: 'Diretora Jurídico-Institucional',
      image: '/images/diretora-juridica-gloria-almeida.png',
      bio: 'Atua como Diretora Jurídico-Institucional, sendo responsável pela condução estratégica das diretrizes jurídicas e pelo fortalecimento da governança institucional. Possui atuação pautada na ética, na conformidade legal e na segurança das decisões organizacionais. Contribui para a sustentabilidade, credibilidade e integridade institucional do Instituto.',
    },
    {
      name: 'IVAN GONZALO',
      role: 'Diretor de Inovação e Tecnologia',
      image: '/images/diretor-inovacao-ivan-gonzalo.png',
      bio: 'Atua como Analista de Comércio Exterior, sendo responsável pela gestão e acompanhamento de operações de importação e exportação, assegurando conformidade com a legislação aduaneira e regulatória. Possui atuação estratégica na análise de mercados, processos logísticos e negociações internacionais. Contribui para a eficiência operacional e o fortalecimento das relações comerciais do Instituto.',
      linkedin: 'https://www.linkedin.com/in/ivan-gonzalo/',
    },
    {
      name: 'Tainisy Brito Santos',
      role: 'Diretora Educacional Pedagógica',
      image: '/images/diretora-educacional-tainisy-brito.png',
      bio: 'Sendo responsável pela coordenação das diretrizes pedagógicas e pelo desenvolvimento de programas educacionais alinhados à missão institucional. Sua atuação é pautada na qualidade do ensino, inovação metodológica e formação contínua. Contribui para o fortalecimento educacional e o impacto social do Instituto.',
    },
    {
      name: 'MILLENA BRUNA SILVA LOPES',
      role: 'Diretora de Compliance e Responsabilidade Socioambiental',
      image: '/images/diretora-compliance-millena-bruna.png',
      bio: 'Sendo responsável pela implementação e monitoramento das políticas de conformidade, integridade e governança institucional. Sua atuação assegura o cumprimento das normas legais, éticas e regulatórias, promovendo transparência e gestão responsável. Contribui para o desenvolvimento sustentável e o fortalecimento do compromisso socioambiental do Instituto.',
    },
    {
      name: 'André Mateus Araújo',
      role: 'Diretor Administrativo-Financeiro',
      image: '/images/diretor-administrativo-andre-mateus.png',
      bio: 'Diretor Administrativo-Financeiro, sendo responsável pela gestão administrativa e pelo planejamento financeiro da instituição, assegurando controle, eficiência e sustentabilidade dos recursos. Sua atuação é pautada na organização dos processos, na transparência e na tomada de decisões estratégicas. Contribui para o equilíbrio financeiro e o fortalecimento institucional do Instituto.',
      linkedin: 'https://www.linkedin.com/in/andr%C3%A9-mateus-ara%C3%BAjo-32294a192/',
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover-lift">
              <div className="relative overflow-hidden h-80">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    {director.linkedin && (
                      <a 
                        href={director.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                      <Mail size={20} />
                    </button>
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
    </section>
  );
}
