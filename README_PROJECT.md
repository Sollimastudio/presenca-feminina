# Diagnóstico de Presença Feminina

Um funil premium de diagnóstico interativo + página de vendas para entender padrões de presença feminina e oferecer soluções de transformação.

## 📋 Visão Geral

Este projeto implementa um funil completo de conversão com:

- **Quiz Interativo**: 15 perguntas situacionais e profundas que revelam padrões invisíveis
- **Sistema de Diagnóstico**: 3 perfis de presença com descrições detalhadas
- **Página de Resultados**: Escada de evolução aspiracional com 5 níveis
- **Página de Vendas**: Apresentação de ofertas (ebook + mentoria)
- **Design Premium**: Tipografia elegante, paleta sofisticada, animações suaves

## 🎨 Design & Estética

### Tipografia
- **Headlines**: Playfair Display (700) — elegância editorial clássica
- **Corpo**: Lora (400) — legibilidade premium com humanidade
- **Botões**: Lora (600) — peso e clareza

### Paleta de Cores
- **Fundo Principal**: Off-white (#FAF7F2)
- **Texto Principal**: Preto (#111111)
- **Destaque**: Rosé queimado (#C48A8A)
- **Detalhes**: Dourado suave (#C6A769)
- **Suporte**: Bege (#F5F1EA)

### Imagens Premium
Três imagens geradas estrategicamente:
1. **Hero Quiz**: Retrato editorial de mulher elegante em ambiente minimalista
2. **Resultado**: Visual abstrato de magnetismo com silhueta e luz dourada
3. **Sales Page**: Mulher contemplando reflexo em espelho com atmosfera de transformação

## 🏗️ Arquitetura

### Estrutura de Pastas
```
client/
├── src/
│   ├── pages/
│   │   ├── Quiz.tsx          # Página principal do quiz
│   │   └── SalesPage.tsx     # Página de vendas
│   ├── components/
│   │   └── QuizResult.tsx    # Componente de resultado
│   ├── data/
│   │   └── quizData.ts       # Dados do quiz e diagnósticos
│   ├── App.tsx               # Roteamento principal
│   └── index.css             # Estilos globais e tema
└── public/
```

### Rotas
- `/` — Quiz interativo
- `/oferta` — Página de vendas

## 🎯 Fluxo do Usuário

1. **Introdução** → Usuária vê headline, subtítulo e introdução motivacional
2. **Quiz** → Responde 15 perguntas com barra de progresso
3. **Resultado** → Recebe diagnóstico com escada de evolução
4. **Transição** → Mensagem de contexto sobre transformação
5. **Oferta** → Página de vendas com ebook e mentoria

## 💾 Sistema de Pontuação

- **A = 2 pontos** (Presença Feminina)
- **B = 1 ponto** (Presença Instável)
- **C = 0 pontos** (Presença em Modo Defesa)

### Classificação Final
- **20-30 pontos**: Vênus Magnética (Presença Feminina)
- **10-19 pontos**: Vênus em Construção (Presença Instável)
- **0-9 pontos**: Presença em Modo Defesa

## 🎬 Animações

Todas as transições usam Framer Motion com:
- Fade-in ao carregar seções (300-500ms)
- Slide suave ao avançar perguntas
- Reveal progressivo de resultados
- Hover effects elegantes em botões
- Transições de cor suave (sem escala)

## 📱 Responsividade

- **Mobile-first**: Otimizado para dispositivos móveis
- **Tablet**: Layout adaptado com imagens lado a lado
- **Desktop**: Experiência completa com espaço generoso

## 🔧 Stack Técnico

- **React 19**: Framework UI
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Styling com design tokens
- **Framer Motion**: Animações elegantes
- **Wouter**: Roteamento leve
- **shadcn/ui**: Componentes base

## 🚀 Deployment

O projeto está pronto para deployment em:
- **Vercel** (recomendado)
- **Netlify**
- **Manus** (built-in hosting)

### Build
```bash
pnpm install
pnpm build
```

### Development
```bash
pnpm dev
```

## 📝 Copy & Mensagens

### Headline Principal
"Você pode ter valor — mas está transmitindo isso?"

### Mensagem Central
"Nem tudo que parece força gera magnetismo. Excesso de defesa reduz leveza. Força sem receptividade vira armadura."

### CTA Principal
"Quero ajustar minha presença"

## 🎯 Próximos Passos Recomendados

1. **Integração de Pagamento**: Conectar Stripe para venda do ebook
2. **Email Capture**: Adicionar formulário para coletar emails dos usuários
3. **Analytics**: Rastrear conversão do quiz para a página de vendas
4. **Conteúdo Dinâmico**: Criar página de confirmação pós-compra com acesso ao ebook
5. **Otimização de Conversão**: A/B testing de headlines e CTAs

## 📊 Métricas de Sucesso

- Taxa de conclusão do quiz
- Taxa de conversão quiz → página de vendas
- Taxa de clique em CTAs
- Tempo médio no quiz

## 🔐 Privacidade

- Nenhum dado é salvo permanentemente
- Respostas não são armazenadas
- Apenas resultado é exibido na sessão

## 📄 Licença

Propriedade privada. Todos os direitos reservados.

---

**Desenvolvido com atenção aos detalhes e foco em conversão premium.**
