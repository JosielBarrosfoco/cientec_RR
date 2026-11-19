import { useState } from 'react';
import { ArrowUpRight, Camera, CheckCircle2 } from 'lucide-react';

const categories = ['Todos', 'Eventos 2025', 'Eventos 2026', 'Assistência Rural', 'Capacitação', 'Ação Social'] as const;
type Category = (typeof categories)[number];

const records: { image: string; title: string; category: Exclude<Category, 'Todos'>; description: string }[] = [
  { image: 'evento-congresso-inovacao-2025.jpg', title: 'Congresso de Inovação e Tecnologia', category: 'Eventos 2025', description: 'Programação e mobilização do ecossistema de inovação' },
  { image: 'evento-nasa-space-apps-2025.jpg', title: 'NASA Space Apps Challenge — Boa Vista', category: 'Eventos 2025', description: 'Participação na maratona global de inovação' },
  { image: 'evento-biotecnologia-2025.jpg', title: 'Painel temático e troca de conhecimento', category: 'Eventos 2025', description: 'Diálogo sobre bioeconomia e tecnologia' },
  { image: 'evento-minerarr-2026.jpg', title: 'Seminário MINERARR', category: 'Eventos 2026', description: 'Registro de participação em programação técnica' },
  { image: 'evento-painel-cientec-2026.jpg', title: 'Painel institucional do CIENTEC-RR', category: 'Eventos 2026', description: 'Compartilhamento de experiências e propostas' },
  { image: 'evento-interacao-2026.jpg', title: 'Dinâmica de trabalho em 2026', category: 'Eventos 2026', description: 'Articulação e atividades com participantes' },
  { image: 'ater-visita-tecnica.jpg', title: 'Visita técnica em campo', category: 'Assistência Rural', description: 'Atendimento e orientação a produtores rurais' },
  { image: 'ater-encontro-produtores.jpg', title: 'Acompanhamento da produção rural', category: 'Assistência Rural', description: 'Interação com produtores e comunidades' },
  { image: 'ater-producao-rural.jpg', title: 'Produção e desenvolvimento territorial', category: 'Assistência Rural', description: 'Vivência em atividades agrícolas em Roraima' },
  { image: 'capacitacao-dinamica-grupo.jpg', title: 'Dinâmica de capacitação', category: 'Capacitação', description: 'Aprendizagem em grupo e troca de experiências' },
  { image: 'capacitacao-certificacao.jpg', title: 'Formação e certificação', category: 'Capacitação', description: 'Registro de atividade formativa' },
  { image: 'capacitacao-atividade-pratica.jpg', title: 'Aprendizado prático', category: 'Capacitação', description: 'Atividades aplicadas em tecnologia e gestão' },
  { image: 'acao-social-publico.jpg', title: 'Encontro com a comunidade', category: 'Ação Social', description: 'Participação e diálogo social' },
  { image: 'acao-social-comunidade.jpg', title: 'Mobilização comunitária', category: 'Ação Social', description: 'Registro de ação social com participantes' },
];

export default function Evidence() {
  const [category, setCategory] = useState<Category>('Todos');
  const visible = category === 'Todos' ? records : records.filter((record) => record.category === category);

  return (
    <section id="resultados" className="py-24 bg-white" aria-labelledby="resultados-titulo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full mb-6">
              <Camera size={16} className="text-primary mr-2" aria-hidden="true" />
              <span className="text-sm font-semibold text-primary">Registros da nossa atuação</span>
            </div>
            <h2 id="resultados-titulo" className="font-display text-4xl lg:text-5xl font-bold text-primary-dark mb-5">
              Resultados e Evidências
            </h2>
            <p className="text-lg text-text/80 leading-relaxed">
              Nosso trabalho acontece nas salas de formação, nos encontros de inovação e no campo.
              Conheça registros de ações realizadas em 2025 e 2026, apresentados no portfólio institucional.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-neutral-100 px-5 py-4 rounded-2xl border border-neutral-200 shrink-0">
            <CheckCircle2 size={24} className="text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-primary-dark">+300 pessoas beneficiadas</p>
              <p className="text-sm text-text/70">+600 horas de aprendizado prático</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-6" role="group" aria-label="Filtrar registros por área">
          {categories.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={category === option}
              onClick={() => setCategory(option)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${category === option
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-primary-dark border-neutral-200 hover:bg-neutral-100'}`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((record) => (
            <a
              key={record.image}
              href={`/images/portfolio-2026/${record.image}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white overflow-hidden rounded-2xl border border-neutral-200 hover:border-primary-light hover:shadow-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Abrir fotografia: ${record.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={`/images/portfolio-2026/${record.image}`}
                  alt={record.description}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-[1.035] transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 text-primary-dark text-xs font-bold shadow-sm">
                  {record.category}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="text-lg font-bold text-primary-dark leading-snug mb-2">{record.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed">{record.description}</p>
                </div>
                <ArrowUpRight size={19} className="shrink-0 text-primary mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-100">
          <h3 className="font-display font-bold text-xl text-primary-dark mb-3">Olhando para o futuro</h3>
          <p className="text-text/80 leading-relaxed">
            Entre as frentes estratégicas previstas estão a inserção digital, a internacionalização de empresas roraimenses
            e a formação em logística e integração fronteiriça, em paralelo à ampliação das ações de Assistência Técnica e Extensão Rural (ATER).
          </p>
        </div>
      </div>
    </section>
  );
}
