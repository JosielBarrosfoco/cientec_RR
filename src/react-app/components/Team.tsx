import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const directors = [
    {
      name: 'Dr. Carlos Eduardo Silva',
      role: 'Presidente',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Especialista em desenvolvimento sustentável com mais de 20 anos de experiência.',
    },
    {
      name: 'Dra. Maria Fernanda Costa',
      role: 'Diretora de Inovação',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Líder em inovação social e tecnologia aplicada ao desenvolvimento regional.',
    },
    {
      name: 'Prof. João Roberto Santos',
      role: 'Diretor de Educação',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Educador renomado, dedicado ao desenvolvimento de programas transformadores.',
    },
    {
      name: 'Dra. Ana Paula Oliveira',
      role: 'Diretora de Projetos Sociais',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Especialista em gestão de projetos sociais com foco em inclusão.',
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
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                      <Linkedin size={20} />
                    </button>
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
