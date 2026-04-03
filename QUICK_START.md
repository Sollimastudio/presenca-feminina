# Quick Start Guide — Diagnóstico de Presença Feminina

## 🚀 Começar Rápido

### 1. Instalação
```bash
cd presenca-feminina
pnpm install
```

### 2. Desenvolvimento Local
```bash
pnpm dev
```
Acesse em `http://localhost:3000`

### 3. Build para Produção
```bash
pnpm build
pnpm start
```

## 📖 Estrutura do Projeto

### Páginas Principais
- **`/`** — Quiz interativo (15 perguntas)
- **`/oferta`** — Página de vendas

### Componentes Chave
- `Quiz.tsx` — Lógica do quiz com animações
- `QuizResult.tsx` — Exibição de resultados com escada
- `SalesPage.tsx` — Página de vendas com ofertas
- `quizData.ts` — Dados das perguntas e diagnósticos

## 🎨 Customização

### Alterar Cores
Edite `/client/src/index.css` na seção `:root`:
```css
--primary: oklch(0.7 0.18 20);      /* Rosé queimado */
--background: oklch(0.98 0.001 60); /* Off-white */
```

### Alterar Tipografia
Google Fonts já estão importadas em `index.css`:
- Playfair Display (headlines)
- Lora (corpo)

### Adicionar Perguntas
Edite `/client/src/data/quizData.ts` e adicione à array `quizQuestions`.

## 🖼️ Imagens

As imagens estão hospedadas em CDN:
- Hero: `hero-quiz-6cbhb9WsucGBWuRXQZbFtx.webp`
- Resultado: `resultado-diagnóstico-8ZJmPE6dGZAuuAE2khRCZb.webp`
- Sales: `sales-page-Gt82rTNgHpppSn2Jt6PyJG.webp`

Para substituir, gere novas imagens e atualize as URLs nos componentes.

## 🔄 Fluxo do Quiz

1. Usuária clica "Quero descobrir meu padrão"
2. Responde 15 perguntas (cada uma vale 0-2 pontos)
3. Sistema calcula score total
4. Exibe resultado com escada de evolução
5. Botão "Sair e ver a solução" leva para `/oferta`

## 💡 Dicas de Conversão

- **CTA sempre visível**: Botões principais em rosa queimado
- **Progresso visual**: Barra de progresso motiva conclusão
- **Transição suave**: Mensagem de contexto antes da venda
- **Escada aspiracional**: Mostra potencial de evolução

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique URLs do CDN em `Quiz.tsx` e `SalesPage.tsx`
- Certifique-se de que as imagens estão públicas

### Animações lentas
- Reduza duração em `transition={{ duration: 0.3 }}`
- Verifique performance em DevTools

### TypeScript errors
```bash
pnpm check
```

## 📊 Analytics

Para adicionar rastreamento:
1. Integre Google Analytics ou Mixpanel
2. Rastreie eventos: "quiz_started", "quiz_completed", "offer_viewed"
3. Monitore taxa de conversão

## 🚢 Deploy

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

### Manus
Use o botão "Publish" na interface de gerenciamento.

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique `README_PROJECT.md` para documentação completa
2. Consulte logs em `.manus-logs/`
3. Verifique console do navegador (F12)

---

**Projeto pronto para conversão premium!**
