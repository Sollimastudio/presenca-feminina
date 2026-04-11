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
  description: string;
  mainSignals: string[];
  impact: string;
  guidance: string;
  color: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quando algo não sai como esperado, sua primeira reação é:",
    options: [
      { text: "Analisar o que deu errado e ajustar rapidamente", score: 2 },
      { text: "Sentir uma mistura de frustração e dúvida sobre si mesma", score: 1 },
      { text: "Entrar em modo protetor e culpar circunstâncias externas", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Quando alguém demora para responder uma mensagem sua, você:",
    options: [
      { text: "Segue em frente tranquilamente, sem questionar", score: 2 },
      { text: "Fica pensando se fez algo errado ou se incomodou", score: 1 },
      { text: "Assume que a pessoa está desinteressada e se afasta", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Quando você gosta de alguém, sua tendência é:",
    options: [
      { text: "Ser autêntica e deixar a atração fluir naturalmente", score: 2 },
      { text: "Tentar ser quem você acha que a pessoa quer", score: 1 },
      { text: "Manter distância para não parecer vulnerável", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Quando você sente insegurança, você:",
    options: [
      { text: "Reconhece o sentimento e segue em frente", score: 2 },
      { text: "Tenta compensar sendo mais performática ou controladora", score: 1 },
      { text: "Se retrai e fica observando de longe", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Em um grupo, sua postura natural é:",
    options: [
      { text: "Participar, ouvir e se permitir ser vista", score: 2 },
      { text: "Alternar entre participação e observação, dependendo do humor", score: 1 },
      { text: "Observar mais do que participar, mantendo distância", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Quando você precisa dizer não, você:",
    options: [
      { text: "Diz com clareza, sem culpa ou explicações excessivas", score: 2 },
      { text: "Diz, mas sente culpa e tenta compensar depois", score: 1 },
      { text: "Evita dizer não ou o faz de forma agressiva", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Quando está frustrada, você:",
    options: [
      { text: "Expressa o sentimento de forma clara e segue adiante", score: 2 },
      { text: "Fica ruminando internamente ou explode depois", score: 1 },
      { text: "Se fecha emocionalmente e fica fria", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Quando alguém é inconsistente com você, você:",
    options: [
      { text: "Conversa sobre o padrão de forma clara", score: 2 },
      { text: "Questiona a si mesma sobre o que fez de errado", score: 1 },
      { text: "Se afasta silenciosamente e cria uma armadura", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Quando você precisa relaxar, você:",
    options: [
      { text: "Consegue desligar e aproveitar o momento", score: 2 },
      { text: "Tenta relaxar mas fica pensando em coisas que precisa controlar", score: 1 },
      { text: "Dificilmente consegue relaxar, sempre há algo para controlar", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Quando você percebe que está tentando controlar tudo, você:",
    options: [
      { text: "Reconhece e consegue soltar", score: 2 },
      { text: "Reconhece mas acha difícil parar", score: 1 },
      { text: "Não reconhece ou acha que é necessário controlar", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Quando você se sente julgada, você:",
    options: [
      { text: "Segue sendo você mesma, sem mudar", score: 2 },
      { text: "Fica insegura mas tenta manter a compostura", score: 1 },
      { text: "Se fecha ainda mais ou fica defensiva", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Quando alguém se aproxima com interesse, você:",
    options: [
      { text: "Fica aberta e deixa a conexão fluir", score: 2 },
      { text: "Fica em dúvida se merece ou se é verdade", score: 1 },
      { text: "Desconfia ou cria distância para testar as intenções", score: 0 },
    ],
  },
  {
    id: 13,
    question: "Quando a situação exige receptividade, você:",
    options: [
      { text: "Consegue receber e aproveitar o momento", score: 2 },
      { text: "Tenta receber mas sente desconforto", score: 1 },
      { text: "Prefere dar do que receber, é mais seguro", score: 0 },
    ],
  },
  {
    id: 14,
    question: "Sua relação com o próprio valor é:",
    options: [
      { text: "Você sabe seu valor e o comunica naturalmente", score: 2 },
      { text: "Você sabe seu valor mas tem dificuldade em comunicar", score: 1 },
      { text: "Você sente que precisa constantemente provar seu valor", score: 0 },
    ],
  },
  {
    id: 15,
    question: "Quando você pensa em sua presença no mundo, você se vê como:",
    options: [
      { text: "Leve, firme e magnética", score: 2 },
      { text: "Forte, mas às vezes rígida ou controlada", score: 1 },
      { text: "Defensiva, difícil de acessar ou excessivamente controlada", score: 0 },
    ],
  },
];

export const diagnosisResults: Record<string, DiagnosisResult> = {
  presencaFeminina: {
    id: "presencaFeminina",
    name: "Vênus Magnética",
    description: "Você transmite leveza, firmeza e receptividade simultaneamente.",
    mainSignals: [
      "Presença natural e confiante",
      "Capacidade de receber sem perder poder",
      "Leveza sem fragilidade",
      "Firmeza sem rigidez",
      "Magnetismo autêntico",
    ],
    impact: "Você é percebida como alguém que tem clareza, valor e ao mesmo tempo acessibilidade. Seu magnetismo vem da autenticidade, não da defesa.",
    guidance: "Mantenha essa presença. O desafio agora é não deixar que pressões externas te façam retroceder para padrões de proteção. Continuar cultivando essa leveza é um ato de força.",
    color: "#C48A8A",
  },
  presencaInstavel: {
    id: "presencaInstavel",
    name: "Vênus em Construção",
    description: "Você oscila entre clareza e autossabotagem, entre abertura e proteção.",
    mainSignals: [
      "Oscilação entre segurança e insegurança",
      "Dificuldade em manter consistência emocional",
      "Alternância entre receptividade e defesa",
      "Incerteza sobre seu próprio valor",
      "Magnetismo intermitente",
    ],
    impact: "Você é percebida como alguém com potencial, mas às vezes inacessível. Sua presença varia conforme seu estado emocional, o que pode confundir as pessoas ao seu redor.",
    guidance: "O primeiro passo é reconhecer os gatilhos que te fazem oscilar. Quando você se sente insegura, você retrai? Quando sente que precisa provar algo, você fica rígida? Identificar esses padrões é o começo da transformação.",
    color: "#D9A5A5",
  },
  presencaModoDefesa: {
    id: "presencaModoDefesa",
    name: "Diagnóstico: A Mulher-Armadura",
    description: "Você confunde rigidez com força. E é por isso que afasta quem tenta chegar perto.",
    mainSignals: [
      "Frieza letal disfarçada de mecanismo de defesa",
      "A compulsão exaustiva por provar que não precisa de ninguém",
      "Um campo de energia que bloqueia em vez de atrair",
      "Distanciamento crônico: você está lá, mas ninguém te acessa",
    ],
    impact: "A sua força assusta, e a sua frieza afasta. Você construiu muros tão altos para não se machucar que acabou trancada do lado de dentro. Os homens veem a sua competência, mas esbarram no seu bloqueio.",
    guidance: "Quem disse que a sua força precisa ser um escudo? Leveza não é fraqueza. Receptividade não é submissão. Quando a proteção vira a sua única identidade, o magnetismo morre.",
    color: "#C6A769",
  },
};

export const diagnosisLadder = [
  { level: 1, name: "Diagnóstico: A Mulher-Armadura", description: "Frieza letal, bloqueio de energia" },
  { level: 2, name: "Presença Instável", description: "Oscilação entre clareza e autossabotagem" },
  { level: 3, name: "Vênus em Construção", description: "Potencial em desenvolvimento, transição" },
  { level: 4, name: "Vênus Magnética", description: "Leveza, firmeza e receptividade" },
  { level: 5, name: "Cleópatra Inescapável", description: "Presença absoluta, magnetismo irresistível" },
];

export function calculateDiagnosis(score: number): string {
  if (score >= 24) {
    return "presencaFeminina";   // 80%+ das respostas positivas
  } else if (score >= 14) {
    return "presencaInstavel";   // 47–79%
  } else {
    return "presencaModoDefesa"; // abaixo de 47% — maioria em modo defesa
  }
}
