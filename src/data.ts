export const THEME_COLORS = {
  sacolas: '#F26522', // Assaí Vibrant Orange
  servicosFinanceiros: '#004A99', // Assaí Navy Blue
  academiaAssai: '#22C55E', // Green 500
  sustentabilidade: '#047857', // Emerald 700
  institutoAssai: '#6366F1', // Indigo 500
};

export const CATEGORIES = [
  { id: 'sacolas', name: 'Sacolas', color: THEME_COLORS.sacolas, count: 30, networks: '4 redes', reach: 1525848 },
  { id: 'servicos', name: 'Serv. Financeiros', color: THEME_COLORS.servicosFinanceiros, count: 12, networks: '4 redes', reach: 568910 },
  { id: 'academia', name: 'Academia Assaí', color: THEME_COLORS.academiaAssai, count: 6, networks: '2 redes', reach: 555204 },
  { id: 'sustentabilidade', name: 'Sustentabilidade', color: THEME_COLORS.sustentabilidade, count: 4, networks: '3 redes', reach: 137297 },
  { id: 'instituto', name: 'Instituto Assaí', color: THEME_COLORS.institutoAssai, count: 2, networks: '1 rede', reach: 54949 },
];

export const KPIS = [
  { id: 'total', label: 'Total de posts', value: '54', sub: ' ', indicatorIndicatorColor: '#F26522' },
  { id: 'reach', label: 'Alcance total combinado', value: '2,84M', sub: 'Alcance + Visualizações', indicatorIndicatorColor: THEME_COLORS.sacolas },
  { id: 'interactions', label: 'Interações totais', value: '61.528', sub: 'Curtidas, comentários, salvos', indicatorIndicatorColor: THEME_COLORS.servicosFinanceiros },
  { id: 'engagement', label: 'Engajamento médio', value: '2,49%', sub: 'Média ponderada das redes', indicatorIndicatorColor: THEME_COLORS.sustentabilidade },
];

export const CATEGORY_PERFORMANCE = [
  {
    id: 'servicos',
    name: 'Serviços Financeiros',
    color: THEME_COLORS.servicosFinanceiros,
    badge: '12 posts',
    isWide: false,
    stats: [
      { label: 'Alcance total', value: '568.910' },
      { label: 'Interações totais', value: '9.455' },
      { label: 'Engajamento médio', value: '3,06%' },
      { label: 'Melhor eng. (TikTok)', value: '4,42%' },
      { label: 'Redes', value: 'FB · IG Feed · IG Stories · TikTok' },
    ],
  },
  {
    id: 'academia',
    name: 'Academia Assaí',
    color: THEME_COLORS.academiaAssai,
    badge: '6 posts',
    isWide: false,
    stats: [
      { label: 'Alcance total', value: '555.204' },
      { label: 'Interações totais', value: '19.448' },
      { label: 'Engajamento médio', value: '3,17%' },
      { label: 'Melhor eng. (IG Stories)', value: '3,55%' },
      { label: 'Redes', value: 'FB · IG Stories' },
    ],
  },
  {
    id: 'instituto',
    name: 'Instituto Assaí',
    color: THEME_COLORS.institutoAssai,
    badge: '2 posts',
    isWide: false,
    stats: [
      { label: 'Alcance total', value: '54.949' },
      { label: 'Interações totais', value: '353' },
      { label: 'Engajamento médio', value: '0,66%' },
      { label: 'Temas publicados', value: 'Alimento · Seg. Alimentar' },
      { label: 'Redes', value: 'IG Feed' },
    ],
  },
  {
    id: 'sustentabilidade',
    name: 'Sustentabilidade',
    color: THEME_COLORS.sustentabilidade,
    badge: '4 posts',
    isWide: false,
    stats: [
      { label: 'Alcance total', value: '137.297' },
      { label: 'Interações totais', value: '1.805' },
      { label: 'Engajamento médio', value: '1,25%' },
      { label: 'Melhor eng. (IG Stories)', value: '1,44%' },
      { label: 'Redes', value: 'FB · IG Feed · IG Stories' },
    ],
  },
  {
    id: 'sacolas',
    name: 'Sacolas',
    color: THEME_COLORS.sacolas,
    badge: '30 posts — maior volume da análise',
    isWide: true,
    statsBlocks: [
      [
        { label: 'Alcance total', value: '1.525.848' },
        { label: 'Interações totais', value: '30.467' },
      ],
      [
        { label: 'Eng. médio geral', value: '2,32%' },
        { label: 'Melhor eng. (TikTok)', value: '5,55%' },
      ],
      [
        { label: 'IG Stories eng.', value: '5,14%' },
        { label: 'Facebook eng.', value: '1,10%' },
      ],
      [
        { label: 'Maior concentração', value: 'IG Feed (18 posts)' },
        { label: 'Redes', value: 'FB · IG Feed · IG Stories · TikTok' },
      ]
    ]
  }
];

export const ENGAGEMENT_CHART_DATA = [
  { name: 'TikTok — Sacolas', value: 5.55, color: THEME_COLORS.sacolas },
  { name: 'IG Stories — Sacolas', value: 5.14, color: THEME_COLORS.sacolas },
  { name: 'TikTok — Serv. Fin', value: 4.42, color: THEME_COLORS.servicosFinanceiros },
  { name: 'IG Stories — Academia', value: 3.55, color: THEME_COLORS.academiaAssai },
  { name: 'IG Stories — Serv. Fin', value: 2.88, color: THEME_COLORS.servicosFinanceiros },
  { name: 'IG Stories — Sustentabilidade', value: 1.44, color: THEME_COLORS.sustentabilidade },
  { name: 'Facebook — Sustentabilidade', value: 1.36, color: THEME_COLORS.sustentabilidade },
  { name: 'Facebook — Academia', value: 1.24, color: THEME_COLORS.academiaAssai },
  { name: 'IG Feed — Sacolas', value: 1.25, color: THEME_COLORS.sacolas },
  { name: 'IG Feed — Sustentabilidade', value: 1.09, color: THEME_COLORS.sustentabilidade },
  { name: 'Facebook — Sacolas', value: 1.10, color: THEME_COLORS.sacolas },
  { name: 'IG Feed — Instituto', value: 0.66, color: THEME_COLORS.institutoAssai },
  { name: 'IG Feed — Serv. Fin', value: 0.52, color: THEME_COLORS.servicosFinanceiros },
  { name: 'Facebook — Serv. Fin', value: 0.52, color: THEME_COLORS.servicosFinanceiros }
];

export const TABLE_DATA = [
  { network: 'Facebook', category: 'Serviços Financeiros', catColor: THEME_COLORS.servicosFinanceiros, posts: 2, reach: '195.806', interactions: '280', engagement: '0,52%' },
  { network: 'Facebook', category: 'Academia Assaí', catColor: THEME_COLORS.academiaAssai, posts: 1, reach: '21.461', interactions: '266', engagement: '1,24%' },
  { network: 'Facebook', category: 'Sustentabilidade', catColor: THEME_COLORS.sustentabilidade, posts: 1, reach: '4.259', interactions: '63', engagement: '1,36%' },
  { network: 'Facebook', category: 'Sacolas', catColor: THEME_COLORS.sacolas, posts: 4, reach: '153.948', interactions: '1.413', engagement: '1,10%' },
  { network: 'Instagram Feed', category: 'Serviços Financeiros', catColor: THEME_COLORS.servicosFinanceiros, posts: 1, reach: '37.438', interactions: '193', engagement: '0,52%' },
  { network: 'Instagram Feed', category: 'Instituto Assaí', catColor: THEME_COLORS.institutoAssai, posts: 2, reach: '54.949', interactions: '353', engagement: '0,66%' },
  { network: 'Instagram Feed', category: 'Sustentabilidade', catColor: THEME_COLORS.sustentabilidade, posts: 2, reach: '82.063', interactions: '1.261', engagement: '1,09%' },
  { network: 'Instagram Feed', category: 'Sacolas', catColor: THEME_COLORS.sacolas, posts: 18, reach: '1.020.998', interactions: '14.340', engagement: '1,25%' },
  { network: 'Instagram Stories', category: 'Serviços Financeiros', catColor: THEME_COLORS.servicosFinanceiros, posts: 3, reach: '327.047', interactions: '8.623', engagement: '2,88%' },
  { network: 'Instagram Stories', category: 'Academia Assaí', catColor: THEME_COLORS.academiaAssai, posts: 5, reach: '533.743', interactions: '19.182', engagement: '3,55%' },
  { network: 'Instagram Stories', category: 'Sustentabilidade', catColor: THEME_COLORS.sustentabilidade, posts: 1, reach: '50.975', interactions: '481', engagement: '1,44%' },
  { network: 'Instagram Stories', category: 'Sacolas', catColor: THEME_COLORS.sacolas, posts: 4, reach: '346.351', interactions: '14.310', engagement: '5,14%' },
  { network: 'TikTok', category: 'Serviços Financeiros', catColor: THEME_COLORS.servicosFinanceiros, posts: 6, reach: '8.619', interactions: '359', engagement: '4,42%' },
  { network: 'TikTok', category: 'Sacolas', catColor: THEME_COLORS.sacolas, posts: 4, reach: '4.551', interactions: '404', engagement: '5,55%' },
];

export const ANALYSIS_DATA = [
  {
    title: 'Sacolas',
    color: THEME_COLORS.sacolas,
    text: 'Maior pauta em volume (30 posts) e alcance absoluto (1,5M), presente nas 4 redes. TikTok (5,55%) e Instagram Stories (5,14%) entregam os melhores engajamentos de toda a análise, indicando que formatos dinâmicos e curtos geram alta conexão. O volume de influenciadores no IG Feed amplificou o alcance, com engajamento mais conservador (1,25%).'
  },
  {
    title: 'Academia Assaí',
    color: THEME_COLORS.academiaAssai,
    text: 'Melhor equilíbrio entre alcance e engajamento: apenas 6 posts no IG Stories geraram 19.448 interações e 3,17% de engajamento médio. O post "Dia do Confeiteiro" foi o de maior performance individual de toda a análise (158K alcance · 4,86% eng.). Oportunidade clara de expansão para outras redes.'
  },
  {
    title: 'Serviços Financeiros',
    color: THEME_COLORS.servicosFinanceiros,
    text: 'Maior volume de publicações (12 posts) e presença em todas as redes. TikTok se destaca com 4,42% de engajamento mesmo com menor alcance absoluto. Posts impulsionados no Facebook inflam o alcance (195K) mas comprimem o engajamento (0,52%). Atenção ao balanceamento entre distribuição orgânica e paga.'
  },
  {
    title: 'Sustentabilidade',
    color: THEME_COLORS.sustentabilidade,
    text: '(SUSTENTÁVEL, RECICLAGEM, @serenaenergiabr). Engajamento consistente (1,25% médio), mas volume muito abaixo do potencial estratégico da pauta.'
  },
  {
    title: 'Instituto Assaí',
    color: THEME_COLORS.institutoAssai,
    isWide: true,
    text: 'Presença restrita ao Instagram Feed, com apenas 2 publicações no período — temas relevantes como Segurança Alimentar e "Alimento a Gente Compartilha". O engajamento (0,66%) está dentro da média da plataforma, mas a baixa frequência limita o impacto institucional. Recomenda-se ampliar a distribuição para Stories e demais redes e aumentar a cadência de publicações para fortalecer o posicionamento da marca como agente de transformação social.'
  }
];
