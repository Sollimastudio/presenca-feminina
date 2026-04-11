export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface DiagnosisResult {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainSignals: string[];
  impact: string;
  guidance: string;
  color: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quando alguém demonstra interesse genuíno por você, sua primeira reação é:",
    options: [
      { text: "Receber com abertura e ver onde vai", score: 2 },
      { text: "Aceitar, mas ficar esperando o erro aparecer", score: 1 },
      { text: "Diminuir o interesse deles mentalmente — deve querer algo", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Sua amiga mais honesta diria que você é:",
    options: [
      { text: "Leve, acessível, fácil de estar perto", score: 2 },
      { text: "Intensa — ótima, mas cansa às vezes", score: 1 },
      { text: "Difícil de acessar de verdade — parece sempre na defensiva", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Quando você está bem em um relacionamento, você:",
    options: [
      { text: "Vive o momento sem esperar o fim", score: 2 },
      { text: "Fica com um pé atrás esperando quando vai acabar", score: 1 },
      { text: "Sabota levemente para não depender — melhor você sair antes", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Elogios sinceros te fazem:",
    options: [
      { text: "Receber bem e agradecer de verdade", score: 2 },
      { text: "Agradecer por fora, desconfiar por dentro", score: 1 },
      { text: "Procurar imediatamente a intenção por trás", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Quando alguém te decepciona, você:",
    options: [
      { text: "Fala, resolve e segue", score: 2 },
      { text: "Guarda, não fala, espera que percebam", score: 1 },
      { text: "Anota mentalmente e vai se afastando em silêncio", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Você prefere:",
    options: [
      { text: "Ser vulnerável com as pessoas certas", score: 2 },
      { text: "Ser forte — vulnerabilidade é arriscado demais", score: 1 },
      { text: "Que ninguém saiba de você mais do que o estritamente necessário", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Quando você se apaixona, você:",
    options: [
      { text: "Vive plenamente e aceita o risco", score: 2 },
      { text: "Coloca o pé no freio sem conseguir explicar por quê", score: 1 },
      { text: "Espera a pessoa provar repetidamente que vai ficar", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Você diria que é fácil te amar?",
    options: [
      { text: "Sim — sou acessível e recebo bem quem chega", score: 2 },
      { text: "Depende do dia e do meu humor", score: 1 },
      { text: "Provavelmente não — sou complicada e sei disso", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Quando você quer algo de alguém, você:",
    options: [
      { text: "Pede diretamente e com clareza", score: 2 },
      { text: "Insinua e espera que a pessoa perceba", score: 1 },
      { text: "Prefere não querer do que correr o risco de não ter", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Sua última situação amorosa fracassou porque:",
    options: [
      { text: "Não funcionou por incompatibilidade real — sem drama", score: 2 },
      { text: "Você foi demais ou de menos sem conseguir o equilíbrio", score: 1 },
      { text: "A outra pessoa não soube lidar com a sua forma de ser", score: 0 },
    ],
  },
];

export const diagnosisResults: Record<string, DiagnosisResult> = {
  presencaFeminina: {
    id: "presencaFeminina",
    name: "A Magnética",
    tagline: "Você é exceção. Mas exceção não significa perfeita.",
    description: "Menos de 20% das mulheres chegam aqui. Você tem abertura real, não a abertura performática que a maioria faz nas redes sociais.",
    mainSignals: [
      "Você consegue receber sem imediatamente cobrar de volta",
      "Sua vulnerabilidade é seletiva — não aleatória",
      "Você tolera incerteza sem sabotagem",
      "Sua presença atrai sem precisar de esforço visível",
      "Você se comunica sem joguinhos",
    ],
    impact: "O seu desafio não é atrair — é manter. Quando as coisas ficam muito boas, alguma parte de você ainda quer testar. Isso é o único obstáculo que fica entre você e o que realmente quer.",
    guidance: "Você já tem o fundamento. O protocolo aqui não é corrigir — é afinar. A diferença entre atrair e reter está nos detalhes que a maioria das mulheres ignora.",
    color: "#C9A84C",
  },
  presencaInstavel: {
    id: "presencaInstavel",
    name: "A Contraditória",
    tagline: "Você quer conexão mas age para provar que não precisa.",
    description: "Você confunde as pessoas ao seu redor — inclusive você mesma. Ora entrega demais, ora desaparece. Ora presente, ora fria. E chama isso de personalidade complexa.",
    mainSignals: [
      "Relacionamentos intensos que terminam sem explicação clara",
      "Você oscila entre entrega total e controle total",
      "Sabe o que quer mas age diferente",
      "Ora muito presente, ora desaparecida",
      "Você testa as pessoas — e elas cansam",
    ],
    impact: "O problema não é que as pessoas erradas chegam até você. É que você não se permite ficar com as certas. Sua instabilidade não é o problema — é o sintoma. A raiz é mais antiga.",
    guidance: "Você está a um passo de sair do ciclo. Mas esse passo exige que você pare de chamar de 'proteção' o que na verdade é sabotagem.",
    color: "#8B7D3A",
  },
  presencaModoDefesa: {
    id: "presencaModoDefesa",
    name: "A Fortaleza Vazia",
    tagline: "Você construiu muros tão altos que nem você mesma consegue mais sair.",
    description: "Você não precisa de ninguém. Ou pelo menos é o que você convenceu todo mundo — incluindo você mesma. A fortaleza está impecável. E completamente vazia.",
    mainSignals: [
      "Você chama de independência o que na verdade é solidão organizada",
      "Relacionamentos chegam até você mas não conseguem entrar de verdade",
      "Você testa as pessoas sem perceber que está testando",
      "Frieza que você mistura com autopreservação",
      "Você precisa de tudo por conta própria — pedir ajuda dói",
    ],
    impact: "A sua frieza não é frieza. É medo tão antigo que virou personalidade. E enquanto você vive convicta de que é forte, a vida que você quer fica esperando do lado de fora da sua fortaleza.",
    guidance: "Você não precisa se tornar fraca. Você precisa aprender a diferença entre proteção e prisão. Uma protege. A outra te mantém em cárcere privado — e você mesma é a carcereira.",
    color: "#1B3A2D",
  },
};

export const diagnosisLadder = [
  { level: 1, name: "A Fortaleza Vazia", description: "Muros tão altos que nem você sai de dentro" },
  { level: 2, name: "A Contraditória", description: "Quer conexão mas age para provar que não precisa" },
  { level: 3, name: "A Magnética", description: "Abertura real, presença que atrai sem esforço" },
];

export function calculateDiagnosis(score: number): string {
  if (score >= 16) {
    return "presencaFeminina";   // 80%+ — exceção real
  } else if (score >= 8) {
    return "presencaInstavel";   // 40–79% — oscilando
  } else {
    return "presencaModoDefesa"; // abaixo de 40% — modo fortaleza
  }
}
